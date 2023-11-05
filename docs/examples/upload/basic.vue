<template>
    <div style="width:500px;height: 500px;">
        <WmUpload :UploadUrl="UploadUrl" :UploadHeader="UploadHeader" :UploadData="UploadData" :fileList="fileList" :UploadDarg="UploadDarg" :UploadMultiple="UploadMultiple" :AutoUpload="AutoUpload" @show_pic="aaa" @uploadSuccess="aaa" />
    </div>
</template>
<script setup lang="ts">
import { ref,onMounted,UnwrapNestedRefs,reactive } from 'vue'

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
let AutoUpload = ref(false);
const fileList = ref<any[]>([{name:"111",url:"http://192.168.1.117:8001/UserFile/2023-02-21/b0963d1f-0bca-4b88-9077-bf533372343c/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230221173636.png",isPicture:true,Loading:false},{name:"222",url:"http://192.168.1.117:8001/UserFile/2023-02-21/b0963d1f-0bca-4b88-9077-bf533372343c/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230221173636.png",isPicture:true,Loading:false}])
const aaa = (e)=>{
    console.log(e)
}
</script>