<script setup lang="ts">
import { reactive, ref} from 'vue'
import VuePictureCropper, { cropper } from 'vue-picture-cropper'

defineOptions({
  name: 'WmCropper',
})

const emits = defineEmits(["savePic"])
const props=defineProps({
    pic:{
        type:String,
        default:""
    },
    type:{
        type:String,
        default:"primary"
    },
    boxStyle:{
        type:Object,
        default:()=>{
            return {
                width: '100%',
                height: '100%',
                backgroundColor: '#f8f8f8',
                margin: 'auto'
            }
        }
    },
    options:{
        type:Object,
        default:()=>{
            return {
                viewMode: 1,
                dragMode: 'crop',
            }
        }
    },
})
let Pic=ref(props.pic)
let TempPic=ref(props.pic)
const cropend = ()=>{
    TempPic.value=cropper!.getDataURL()
}
const zoom = ()=>{
    TempPic.value=cropper!.getDataURL()
}
const rotateLeft = (): void => {
    cropper!.rotate(-90);
}
const rotateRight = (): void => {
    cropper!.rotate(90);
}
const zoomAdd = (): void => {
    cropper!.zoom(0.1);
}
const zoomSubtract = (): void => {
    cropper!.zoom(-0.1);
}
const clear = (): void => {
    cropper!.clear()
}
// 重置默认的裁切区域
const reset = (): void => {
    cropper!.reset()
}
let result=reactive({
    dataURL:"",
    blobURL:""
})
const savePic = async (): Promise<void> => {
    // 获取生成的base64图片地址
    const base64: string = cropper!.getDataURL()

    // 获取生成的blob文件信息
    const blob: Blob | null = await cropper!.getBlob()

    // 获取生成的file文件信息
    const file = await cropper!.getFile({
        fileName: 'cropper',
    })

    console.log({ base64, blob, file })

    // 把base64赋给结果展示区
    result.dataURL = base64
    try {
        if (blob!=null){
            result.blobURL = URL.createObjectURL(blob)
        }
    } catch (e) {
        result.blobURL = ''
    }
    console.log(result)
    emits("savePic",result)
}
</script>

<template>
    <div class="cropper-box">
        <div class="button-box">
            <el-button :type="props.type" @click="rotateLeft">逆时针90</el-button>
            <el-button :type="props.type" @click="rotateRight">顺时针90</el-button>
            <el-button :type="props.type" @click="zoomAdd">+</el-button>
            <el-button :type="props.type" @click="zoomSubtract">-</el-button>
            <el-button :type="props.type" @click="clear">清除</el-button>
            <el-button :type="props.type" @click="reset">重置</el-button>
            <el-button :type="props.type" @click="savePic">保存</el-button>
        </div>
        <el-row gutter="20" class="main">
            <el-col :span="12" >
                <div class="col">
                    <VuePictureCropper
                        :boxStyle="props.boxStyle"
                        :img="Pic"
                        :options="props.options"
                        @cropend="cropend"
                        @zoom="zoom"
                    />
                </div>
            </el-col>
            <el-col :span="12" class="col">
                <div class="border">
                    <img :src="TempPic" class="preview" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>