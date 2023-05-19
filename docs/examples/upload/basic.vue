<script setup lang="ts">
import { ref,onMounted,UnwrapNestedRefs,reactive } from 'vue'
// import VuePictureCropper from 'vue-picture-cropper'

let baseUrl = ref("http://192.168.1.117:8001");
let UploadUrl = ref("http://192.168.1.117:8001/API/File/FileAPI");
let UploadHeader = {
    "Token": "D60C9F58FB834EFDE34E783986C0978D" as string
} as any
let UploadData = ref({
    mode: "upload",
    rootFolder: "/UserFile",
});
let UploadDarg = ref(false);
let UploadMultiple = ref(false);
let AutoUpload = ref(true);
const fileList = ref<any[]>([])
onMounted(()=>{
  fileList.value=
})
const aaa=(e:any)=>{
}
const bbb=(e:any)=>{
  e.url=baseUrl.value+e.url
  fileList.value.push(e.url)
}
</script>

<template>
  <div class="card">
    <WmUpload :UploadUrl="UploadUrl" :UploadHeader="UploadHeader" :UploadData="UploadData" :fileList="fileList" :UploadDarg="UploadDarg" :UploadMultiple="UploadMultiple" :AutoUpload="AutoUpload" @show_pic="aaa" @uploadSuccess="aaa" />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
