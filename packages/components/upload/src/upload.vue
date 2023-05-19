<script setup lang="ts">
import { ref,watch} from 'vue'
// import * as bConf from '@wmcomponent/utils'
import * as extend from './upload'
import {ElNotification, UploadRawFile} from "element-plus"
import type { UploadProps,UploadInstance,UploadFile,UploadFiles  } from 'element-plus'
import { Plus,UploadFilled,CloseBold,Close,Document } from '@element-plus/icons-vue'

defineOptions({
  name: 'WmUpload',
})
/*
fileList的文件对象定义
    uid——文件id
    name——文件名称
    url——文件url路径
    icon——文件类型的图标
    MIME——MIME文件类型
    Loading——上传加载
    UploadFaild——是否上传失败
*/
const FileList = ref<any[]>([])
const emits = defineEmits(['update:fileList','show_pic',"uploadSuccess","selectedFile"])
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
    Uploadmethod:{
        type:String,
        default:"post"
    },
    UploadData:{
        type:Object,
        default:()=>{
            return {}
        }
    },
    UploadDarg:{
        type:Boolean,
        default:false
    },
    UploadMultiple:{
        type:Boolean,
        default:false
    },
    AutoUpload:{
        type:Boolean,
        default:false
    },
    previewHeight:{
        type:String,
        default:"50vh"
    }
})
watch(()=>props.fileList,(newVal)=>{
    if (props.fileList.length>0){
        FileList.value=newVal
    }
})
watch(FileList, (count, prevCount) => {
    emits('update:fileList', FileList.value);
});
const uploadRef = ref<UploadInstance>()
const handleChange: UploadProps['onChange'] = (uploadFile:UploadFile, uploadFiles:UploadFiles) => {
    if (!props.AutoUpload){
        extend.getMIME(uploadFile.url!).then(res=>{
            FileList.value.unshift({uid:uploadFile.uid,name:uploadFile.name,url:uploadFile.url!,MIME:res})
            if (extend.checkFileType(res)=="image"){
                dialogImageVisible.value = true
                isShowCropper.value = true
                tempPic.value=uploadFile.url!
            }
            console.log(FileList.value)
        })
    }
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile:UploadRawFile) => {
    console.log(rawFile,11)
    // extend.getMIME(rawFile.url).then(res=>{
    //     FileList.value.unshift({uid:rawFile.uid,name:rawFile.name,url:rawFile.url!,MIME:res})
    //     console.log(FileList.value)
    //     emits("selectedFile",FileList.value[0])
    // })
}
const uploadeDocError=(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles)=>{
    let a=FileList.value.filter(item=>{
        return item.uid==uploadFile.uid
    })
    a[0].UploadFaild=true
    a[0].Loading=false
    ElNotification({
        title: '文档上传',
        message: '上传失败，请重试'
    })
}
const uploadeDocSuccess: UploadProps['onSuccess'] = (response,uploadFile) => {
    console.log(response,uploadFile)
    ElNotification({
        title: '文档上传',
        message: '上传成功！'
    })
    emits('uploadSuccess', response);
}

  //打开文件或者照片
const showFile=(val:any)=>{
  if (extend.checkFileType(val.MIME)=="image"){
    dialogImageVisible.value = true
    tempPic.value=val.url
    emits('show_pic',val)
  }
  else {
    window.open(val.name)
  }
}
const deleteFile=(index:number)=>{
  FileList.value.splice(index,1)
}

let dialogImageVisible=ref(false)
let isShowCropper=ref(false)
let tempPic=ref("")
const closeDialog = ()=>{
    dialogImageVisible.value=false
    isShowCropper.value=false
}
const aaa = (e:any)=>{
    emits("selectedFile",e)
    closeDialog()
}
</script>
<!-- 
    element-plus组件内部不支持再向外提供插槽
 -->
<template>
    <div class="upload-box" :style="{flexDirection:UploadDarg ? 'column' : 'row'}">
        <div v-show="!readonly" style="margin:0 10px;">
            <el-upload 
            class="avatar-uploader"
            ref="uploadRef"
            :action="UploadUrl"
            :show-file-list="false"
            list-type="picture"
            :headers="UploadHeader"
            :method="Uploadmethod"
            :data="UploadData"
            :drag="UploadDarg"
            :multiple="UploadMultiple"
            :auto-upload="AutoUpload"
            :before-upload="beforeAvatarUpload"
            :on-success="uploadeDocSuccess"
            :on-error="uploadeDocError"
            :on-change="handleChange"
            >
                <div v-if="UploadDarg">
                    <el-icon><upload-filled /></el-icon>
                </div>
                <el-icon v-if="AutoUpload && !UploadDarg" class="avatar-uploader-icon"><Plus /></el-icon>
                <template v-if="!AutoUpload  && !UploadDarg" #trigger>
                    <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
                </template>
            </el-upload>
        </div>
        <div :style="{marginTop:UploadDarg ? '50px' : '0'}" class="fileList-box">
            <el-card v-for="(item, index) in FileList" :key="index" class="file-info" :body-style="{ padding: '0px' }">
                <div v-loading="item.Loading" class="mask">
                    <div v-if="item.UploadFaild" class="mask faild"><el-icon color="red" size="30"><CloseBold /></el-icon></div>
                </div>
                <div v-if="!readonly">
                    <el-icon class="close" :color="item.UploadFaild ? '#fff' : '#000'" @click.stop="deleteFile(index)"><Close /></el-icon>
                </div>
                <el-image v-if="extend.checkFileType(item.MIME)=='image'"
                    class="imgSize"
                    :src="item.url" 
                    fit="fill"
                    @click="showFile(item)"
                    />
                <div v-else class="other-type" @click="showFile(item)">
                    <i :class="item.icon" style="font-size:24px;margin-bottom: 5px;"><el-icon><Document /></el-icon></i>
                    <el-tooltip :content="item.name" placement="bottom" effect="dark">
                        <p class="file-name">{{item.name}}</p>
                    </el-tooltip>
                </div>
            </el-card>
            <div v-if="readonly && FileList.length==0">
                <div class="no-content">{{'没有附件'}}</div>
            </div>
        </div>
        <el-dialog v-model="dialogImageVisible" width="80vw" title="预览" @close="closeDialog">
            <div :style="{height:previewHeight}">
                <WmCropper v-show="isShowCropper" :pic="tempPic" @savePic="aaa" />
                <div v-show="!isShowCropper">
                    <el-button v-if="!props.AutoUpload" type="primary" @click="isShowCropper=true">裁剪</el-button>
                    <div class="preview">
                        <img :src="tempPic" class="preview-img" />
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>