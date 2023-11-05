import Upload from './src/upload.vue.mjs';
import '../../utils/index.mjs';
export { checkFileType, getFileType, getMIME, upload } from './src/upload.mjs';
import { withInstall } from '../../utils/vue/install.mjs';

const WmUpload = withInstall(Upload);

export { WmUpload, WmUpload as default };
//# sourceMappingURL=index.mjs.map
