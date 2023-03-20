<script setup lang="ts">
import { ref,watch } from 'vue'
// import {conf} from '@wmcomponent/utils'
import * as extend from './upload'
import {ElNotification} from "element-plus"

defineOptions({
  name: 'WmUpload',
})

const FileList = ref<any[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
    isPicture:false
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
    isPicture:true
  },
])
const emits = defineEmits(['update:fileList'])
const props=defineProps({
    readonly:{
        type:Boolean,
        default:false
    },
    fileList:{
        type:Array,
        default:()=>{
            return []
        }
    },
    UploadUrl:{
        type:String,
        default:""
    },
    UploadHeader:{
        type:Object,
        default:()=>{
            return {}
        }
    },
    UploadData:{
        type:Object,
        default:()=>{
            return {}
        }
    },
})
watch(()=>props.fileList,(newVal)=>{
    console.log(props.fileList)
    if (props.fileList.length>0){
        FileList.value=newVal
        FileList.value.map((item:any)=>{
            if (extend.getFileType(item.name)=="image"){
                item.isPicture=true
            }
        })
    }
})
watch(FileList, (count, prevCount) => {
    emits('update:fileList', FileList.value);
});
let baseurl=ref("http://106.52.168.23:1205")
/*
fileList的文件对象定义
  name——文件名称
  url——文件url路径
  icon——文件类型的图标
*/
var uploadeDocSuccess = (response: any) => {
  console.log(props)
  if (response.Data.errMessage != undefined || !response.IsPositive) {
      ElNotification({
          title: '文档上传',
          message: '上传失败，请重试'
      })
      return;
  }
  let newFile=response.Data as any
  newFile.name=response.Data.FileName
  let type=extend.getFileType(newFile.name)
  if (type=="image"){
      newFile.isPicture=true
  }
  newFile.url=response.Data.FilePath
  newFile.icon="far fa-file"
  FileList.value.push(newFile)
};
const showFile=(val:any)=>{
  //打开文件或者照片
  if (val.isPicture){
      // utils.mymitt.emit('show_pic',val.name)
  }
  else {
      window.open(val.name)
  }
}
const deleteFile=(index:number)=>{
  FileList.value.splice(index,1)
}
</script>

<template>
  <template>
    <div class="upload-box" >
        <div v-show="!readonly" style="margin:0 10px;">
            <el-upload class="avatar-uploader" :action="UploadUrl" :show-file-list="false" :on-success="uploadeDocSuccess" :headers="UploadHeader" :data="UploadData">
                <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
                <!-- <div class="upload-info">
                    <p class="upload-plus" style="width:100px;height:100px;">+</p>
                </div> -->
            </el-upload>
        </div>
        <div style="width:clac(100% - 120px);height: 100%;overflow-y: hidden;overflow-x: auto;white-space: nowrap;">
            <el-card v-for="(item, index) in FileList" :key="index" class="file-info" :body-style="{ padding: '0px' }" @click="showFile(item)" style="cursor:pointer;">
                <!-- 下面不确定要不要 -->
                <div v-if="!readonly"><i class="fas fa-times" style="position:absolute;top:0;right:0;cursor: pointer;z-index: 1;" @click.stop="deleteFile(index)"></i></div>
                
                <el-image v-if="item.isPicture"
                    class="imgSize"
                    :src="baseurl + item.url" 
                    fit="fill" 
                    />
                <div v-else class="fileList">
                    <i :class="item.icon" style="font-size:24px;"></i>
                    <el-tooltip :content="item.name" placement="bottom" effect="light">
                        <p style="position:absolute;bottom:0;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;line-height:2;left: 0;right: 0;">{{item.name}}</p>
                    </el-tooltip>
                </div>
            </el-card>
            <div v-if="readonly && FileList.length==0">
                <div style="color:#bdc1ca;font-size: large;">{{'没有附件'}}</div>
            </div>
        </div>
    </div>
</template>
</template>

<style scoped>
</style>
