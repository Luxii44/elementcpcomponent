# WmUpload

<script setup>
const demos = import.meta.globEager('../../examples/button/*.vue')
</script>

## 基础用法
```vue
<template>
  <WmUpload :UploadUrl="UploadUrl" :UploadHeader="UploadHeader" :UploadData="UploadData" :fileList="fileList" :UploadDarg="UploadDarg" :UploadMultiple="UploadMultiple" :AutoUpload="AutoUpload" @show_pic="aaa" @uploadSuccess="aaa" />
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
let AutoUpload = ref(true);
const fileList = ref<any[]>([{name:"111",url:"http://192.168.1.117:8001/UserFile/2023-02-21/b0963d1f-0bca-4b88-9077-bf533372343c/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230221173636.png",isPicture:true,Loading:false},{name:"222",url:"http://192.168.1.117:8001/UserFile/2023-02-21/b0963d1f-0bca-4b88-9077-bf533372343c/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230221173636.png",isPicture:true,Loading:false}])
</script>
```

:::demo 通过 `slot` 你可以传入自定义的上传按钮类型和文字提示。 可通过设置 `limit` 和 `on-exceed` 来限制上传文件的个数和定义超出限制时的行为。 可通过设置 `before-remove` 来阻止文件移除操作。

upload/basic

:::
## Upload API

### Attributes

| Name                              | Description                                                                                                                                                                           | Type                                                                                          | Default  | Required |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------- | -------- |
| `UploadUrl`                       | 上传接口路径                                                                                                                                                                          | `string`                                                                                      | —        | Yes      |
| `UploadHeader`                    | 上传接口的请求头传                                                                                                                                                                   | `Headers \| Record<string, any>`                                                                                         | —        | No       |
| `UploadData`                      | 上传接口的其他参数.                                                                                                                                                            | `string`                                                                                      | `'post'` | No       |
| `fileList`                        | whether uploading multiple files is permitted.                                                                                                                                        | `boolean`                                                                                     | `false`  | No       |
| `data`                            | additions options of request.                                                                                                                                                         | `Record<string, any>`                                                                         | —        | No       |
| `name`                            | key name for uploaded file.                                                                                                                                                           | `string`                                                                                      | `'file'` | No       |
| `with-credentials`                | whether cookies are sent.                                                                                                                                                             | `boolean`                                                                                     | `false`  | No       |
| `show-file-list`                  | whether to show the uploaded file list.                                                                                                                                               | `boolean`                                                                                     | `true`   | No       |
| `drag`                            | whether to activate drag and drop mode.                                                                                                                                               | `boolean`                                                                                     | `false`  | No       |
| `accept`                          | accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true`.                                     | `string`                                                                                      | —        | No       |
| `on-preview`                      | hook function when clicking the uploaded files.                                                                                                                                       | `(uploadFile: UploadFile) => void`                                                            | —        | No       |
| `on-remove`                       | hook function when files are removed.                                                                                                                                                 | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                  | —        | No       |
| `on-success`                      | hook function when uploaded successfully.                                                                                                                                             | `(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                   | —        | No       |
| `on-error`                        | hook function when some errors occurs.                                                                                                                                                | `(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                    | —        | No       |
| `on-progress`                     | hook function when some progress occurs.                                                                                                                                              | `(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`        | —        | No       |
| `on-change`                       | hook function when select file or upload file success or upload file fail.                                                                                                            | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                  | —        | No       |
| `on-exceed`                       | hook function when limit is exceeded.                                                                                                                                                 | `(files: File[], uploadFiles: UploadUserFile[]) => void`                                      | —        | No       |
| `before-upload`                   | hook function before uploading with the file to be uploaded as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, uploading will be aborted.      | `(rawFile: UploadRawFile) => Awaitable<void \| undefined \| null \| boolean \| File \| Blob>` | —        | No       |
| `before-remove`                   | hook function before removing a file with the file and file list as its parameters. If `false` is returned or a `Promise` is returned and then is rejected, removing will be aborted. | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>`                    | —        | No       |
| `file-list` / `v-model:file-list` | default uploaded files.                                                                                                                                                               | `UploadUserFile[]`                                                                            | `[]`     | No       |
| `list-type`                       | type of file list.                                                                                                                                                                    | `'text' \| 'picture' \| 'picture-card'`                                                       | `'text'` | No       |
| `auto-upload`                     | whether to auto upload file.                                                                                                                                                          | `boolean`                                                                                     | `true`   | No       |
| `http-request`                    | override default xhr behavior, allowing you to implement your own upload-file's request.                                                                                              | `(options: UploadRequestOptions) => XMLHttpRequest \| Promise<unknown>`                       | —        | No       |
| `disabled`                        | whether to disable upload.                                                                                                                                                            | `boolean`                                                                                     | `false`  | No       |
| `limit`                           | maximum number of uploads allowed.                                                                                                                                                    | `number`                                                                                      | —        | No       |

### Slots

| Name      | Description                         | Type                   |
| --------- | ----------------------------------- | ---------------------- |
| `default` | customize default content.          | -                      |
| `trigger` | content which triggers file dialog. | -                      |
| `tip`     | content of tips.                    | -                      |
| `file`    | content of thumbnail template.      | `{ file: UploadFile }` |

### Exposes

| Name           | Description                                                                                            | Type                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `abort`        | cancel upload request.                                                                                 | `(file: UploadFile) => void`                                              |
| `submit`       | upload the file list manually.                                                                         | `() => void`                                                              |
| `clearFiles`   | clear the file list (this method is not supported in the `before-upload` hook).                        | `(status?: Array<"ready" \| "uploading" \| "success" \| "fail">) => void` |
| `handleStart`  | select the file manually.                                                                              | `(rawFile: UploadRawFile) => void`                                        |
| `handleRemove` | remove the file manually. `file` and `rawFile` has been merged. `rawFile` will be removed in `v2.2.0`. | `(file: UploadFile \| UploadRawFile, rawFile?: UploadRawFile) => void`    |