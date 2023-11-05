import * as extend from './upload';
import { UploadRawFile } from "element-plus";
import type { UploadFile, UploadFiles } from 'element-plus';
declare const _default: import("vue").DefineComponent<{
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    fileList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    UploadUrl: {
        type: StringConstructor;
        default: string;
    };
    UploadHeader: {
        type: ObjectConstructor;
        default: () => {};
    };
    Uploadmethod: {
        type: StringConstructor;
        default: string;
    };
    UploadData: {
        type: ObjectConstructor;
        default: () => {};
    };
    UploadDarg: {
        type: BooleanConstructor;
        default: boolean;
    };
    UploadMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    AutoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewHeight: {
        type: StringConstructor;
        default: string;
    };
}, {
    FileList: import("vue").Ref<any[]>;
    emits: (event: "update:fileList" | "show_pic" | "uploadSuccess" | "selectedFile", ...args: any[]) => void;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        fileList: {
            type: ArrayConstructor;
            default: () => never[];
        };
        UploadUrl: {
            type: StringConstructor;
            default: string;
        };
        UploadHeader: {
            type: ObjectConstructor;
            default: () => {};
        };
        Uploadmethod: {
            type: StringConstructor;
            default: string;
        };
        UploadData: {
            type: ObjectConstructor;
            default: () => {};
        };
        UploadDarg: {
            type: BooleanConstructor;
            default: boolean;
        };
        UploadMultiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        AutoUpload: {
            type: BooleanConstructor;
            default: boolean;
        };
        previewHeight: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
        onShow_pic?: ((...args: any[]) => any) | undefined;
        onUploadSuccess?: ((...args: any[]) => any) | undefined;
        onSelectedFile?: ((...args: any[]) => any) | undefined;
    }>>;
    uploadRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly type: string;
            readonly disabled: boolean;
            readonly name: string;
            readonly onChange: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            readonly drag: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly multiple: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly data: Record<string, any>;
            readonly onError: (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            readonly onProgress: (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            readonly action: string;
            readonly method: string;
            readonly showFileList: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly accept: string;
            readonly fileList: import("element-plus").UploadUserFile[];
            readonly autoUpload: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
            readonly httpRequest: import("element-plus").UploadRequestHandler;
            readonly withCredentials: boolean;
            readonly beforeUpload: (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
            readonly onRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            readonly onPreview: (uploadFile: UploadFile) => void;
            readonly onSuccess: (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            readonly onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly beforeRemove: {
                readonly type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onChange: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onPreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                (): (uploadFile: UploadFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                (): (uploadFile: UploadFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
            readonly headers: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
            readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
            readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly withCredentials: BooleanConstructor;
            readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
            readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
            readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
            readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
            readonly disabled: BooleanConstructor;
            readonly limit: NumberConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "fileList" | "beforeUpload" | "onRemove" | "onChange" | "onPreview" | "onSuccess" | "onProgress" | "onError" | "onExceed" | "action" | "method" | "data" | "multiple" | "name" | "drag" | "withCredentials" | "showFileList" | "accept" | "autoUpload" | "listType" | "httpRequest" | "disabled">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly beforeRemove: {
                readonly type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onChange: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onPreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                (): (uploadFile: UploadFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                (): (uploadFile: UploadFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
            readonly headers: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
            readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
            readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly withCredentials: BooleanConstructor;
            readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
            readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
            readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
            readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
            readonly disabled: BooleanConstructor;
            readonly limit: NumberConstructor;
        }>>, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly beforeRemove: {
                    readonly type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                    (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                    (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onChange: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                    (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                    (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onPreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                    (): (uploadFile: UploadFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                    (): (uploadFile: UploadFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                    (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                    (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                    (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                    (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                readonly headers: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly withCredentials: BooleanConstructor;
                readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                readonly disabled: BooleanConstructor;
                readonly limit: NumberConstructor;
            }>> & {
                [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            disabled: import("vue").ComputedRef<boolean>;
            uploadRef: import("vue").ShallowRef<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly type: string;
                    readonly disabled: boolean;
                    readonly name: string;
                    readonly drag: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly multiple: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly data: Record<string, any>;
                    readonly onError: (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    readonly onProgress: (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    readonly action: string;
                    readonly method: string;
                    readonly showFileList: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly accept: string;
                    readonly fileList: import("element-plus").UploadUserFile[];
                    readonly autoUpload: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
                    readonly httpRequest: import("element-plus").UploadRequestHandler;
                    readonly withCredentials: boolean;
                    readonly beforeUpload: (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    readonly onRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    readonly onSuccess: (response: any, rawFile: UploadRawFile) => unknown;
                    readonly onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    readonly onStart: (rawFile: UploadRawFile) => void;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                        (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                        (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                        (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                        (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                        (): (rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                        (): (rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                        (): (response: any, rawFile: UploadRawFile) => unknown;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                        (): (response: any, rawFile: UploadRawFile) => unknown;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                        (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                        (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                        (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                        (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                    readonly headers: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                    readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                    readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                    readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly withCredentials: BooleanConstructor;
                    readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                    readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                    readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                    readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                        (): import("element-plus").UploadRequestHandler;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                        (): import("element-plus").UploadRequestHandler;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                    readonly disabled: BooleanConstructor;
                    readonly limit: NumberConstructor;
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "fileList" | "beforeUpload" | "onRemove" | "onSuccess" | "onProgress" | "onError" | "onExceed" | "action" | "method" | "data" | "multiple" | "name" | "drag" | "withCredentials" | "showFileList" | "accept" | "autoUpload" | "listType" | "httpRequest" | "disabled" | "onStart">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                        (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                        (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                        (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                        (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                        (): (rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                        (): (rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                        (): (response: any, rawFile: UploadRawFile) => unknown;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                        (): (response: any, rawFile: UploadRawFile) => unknown;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                        (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                        (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                        (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                        (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                    readonly headers: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                    readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                    readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                    readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly withCredentials: BooleanConstructor;
                    readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                    readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                    readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                    readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                        (): import("element-plus").UploadRequestHandler;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                        (): import("element-plus").UploadRequestHandler;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                    readonly disabled: BooleanConstructor;
                    readonly limit: NumberConstructor;
                }>>, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                            (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                            new (): any;
                            readonly prototype: any;
                        } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                            (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                            new (): any;
                            readonly prototype: any;
                        })[], unknown, unknown, () => void, boolean>;
                        readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                            (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                            new (): any;
                            readonly prototype: any;
                        } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                            (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                            new (): any;
                            readonly prototype: any;
                        })[], unknown, unknown, () => void, boolean>;
                        readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                            (): (rawFile: UploadRawFile) => void;
                            new (): any;
                            readonly prototype: any;
                        } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                            (): (rawFile: UploadRawFile) => void;
                            new (): any;
                            readonly prototype: any;
                        })[], unknown, unknown, () => void, boolean>;
                        readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                            (): (response: any, rawFile: UploadRawFile) => unknown;
                            new (): any;
                            readonly prototype: any;
                        } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                            (): (response: any, rawFile: UploadRawFile) => unknown;
                            new (): any;
                            readonly prototype: any;
                        })[], unknown, unknown, () => void, boolean>;
                        readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                            (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                            new (): any;
                            readonly prototype: any;
                        } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                            (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                            new (): any;
                            readonly prototype: any;
                        })[], unknown, unknown, () => void, boolean>;
                        readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                            (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                            new (): any;
                            readonly prototype: any;
                        } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                            (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                            new (): any;
                            readonly prototype: any;
                        })[], unknown, unknown, () => void, boolean>;
                        readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                            (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                            new (): any;
                            readonly prototype: any;
                        } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                            (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                            new (): any;
                            readonly prototype: any;
                        })[], unknown, unknown, () => void, boolean>;
                        readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                        readonly headers: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                        readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                        readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                        readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly withCredentials: BooleanConstructor;
                        readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                        readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                        readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                        readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                            (): import("element-plus").UploadRequestHandler;
                            new (): any;
                            readonly prototype: any;
                        } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                            (): import("element-plus").UploadRequestHandler;
                            new (): any;
                            readonly prototype: any;
                        })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                        readonly disabled: BooleanConstructor;
                        readonly limit: NumberConstructor;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    disabled: import("vue").ComputedRef<boolean>;
                    requests: import("vue").ShallowRef<Record<string, XMLHttpRequest | Promise<unknown>>>;
                    inputRef: import("vue").ShallowRef<HTMLInputElement | undefined>;
                    uploadFiles: (files: File[]) => void;
                    upload: (rawFile: UploadRawFile) => Promise<void>;
                    doUpload: (rawFile: UploadRawFile) => void;
                    handleChange: (e: Event) => void;
                    handleClick: () => void;
                    handleKeydown: () => void;
                    abort: (file?: UploadFile | undefined) => void;
                    UploadDragger: import("vue").DefineComponent<{
                        readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    }, {
                        COMPONENT_NAME: string;
                        emit: (event: "file", file: File[]) => void;
                        uploaderContext: import("element-plus").UploadContext;
                        ns: {
                            namespace: import("vue").Ref<string>;
                            b: (blockSuffix?: string | undefined) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        dragover: import("vue").Ref<boolean>;
                        disabled: import("vue").ComputedRef<boolean>;
                        onDrop: (e: DragEvent) => void;
                        onDragover: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                        file: (file: File[]) => boolean;
                    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    }>> & {
                        onFile?: ((file: File[]) => any) | undefined;
                    }, {
                        readonly disabled: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly type: string;
                    readonly disabled: boolean;
                    readonly name: string;
                    readonly drag: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly multiple: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly data: Record<string, any>;
                    readonly onError: (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    readonly onProgress: (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    readonly action: string;
                    readonly method: string;
                    readonly showFileList: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly accept: string;
                    readonly fileList: import("element-plus").UploadUserFile[];
                    readonly autoUpload: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
                    readonly httpRequest: import("element-plus").UploadRequestHandler;
                    readonly withCredentials: boolean;
                    readonly beforeUpload: (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    readonly onRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    readonly onSuccess: (response: any, rawFile: UploadRawFile) => unknown;
                    readonly onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    readonly onStart: (rawFile: UploadRawFile) => void;
                }, {}, string> & {
                    beforeCreate?: (() => void) | (() => void)[] | undefined;
                    created?: (() => void) | (() => void)[] | undefined;
                    beforeMount?: (() => void) | (() => void)[] | undefined;
                    mounted?: (() => void) | (() => void)[] | undefined;
                    beforeUpdate?: (() => void) | (() => void)[] | undefined;
                    updated?: (() => void) | (() => void)[] | undefined;
                    activated?: (() => void) | (() => void)[] | undefined;
                    deactivated?: (() => void) | (() => void)[] | undefined;
                    beforeDestroy?: (() => void) | (() => void)[] | undefined;
                    beforeUnmount?: (() => void) | (() => void)[] | undefined;
                    destroyed?: (() => void) | (() => void)[] | undefined;
                    unmounted?: (() => void) | (() => void)[] | undefined;
                    renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                    errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[] | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                readonly headers: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly withCredentials: BooleanConstructor;
                readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                readonly disabled: BooleanConstructor;
                readonly limit: NumberConstructor;
            }>> & import("vue").ShallowUnwrapRef<{
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                        (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                        (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                        (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                        (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                        (): (rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                        (): (rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                        (): (response: any, rawFile: UploadRawFile) => unknown;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                        (): (response: any, rawFile: UploadRawFile) => unknown;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                        (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                        (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                        (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                        (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                    readonly headers: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                    readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                    readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                    readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly withCredentials: BooleanConstructor;
                    readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                    readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                    readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                    readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                        (): import("element-plus").UploadRequestHandler;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                        (): import("element-plus").UploadRequestHandler;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                    readonly disabled: BooleanConstructor;
                    readonly limit: NumberConstructor;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                disabled: import("vue").ComputedRef<boolean>;
                requests: import("vue").ShallowRef<Record<string, XMLHttpRequest | Promise<unknown>>>;
                inputRef: import("vue").ShallowRef<HTMLInputElement | undefined>;
                uploadFiles: (files: File[]) => void;
                upload: (rawFile: UploadRawFile) => Promise<void>;
                doUpload: (rawFile: UploadRawFile) => void;
                handleChange: (e: Event) => void;
                handleClick: () => void;
                handleKeydown: () => void;
                abort: (file?: UploadFile | undefined) => void;
                UploadDragger: import("vue").DefineComponent<{
                    readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                }, {
                    COMPONENT_NAME: string;
                    emit: (event: "file", file: File[]) => void;
                    uploaderContext: import("element-plus").UploadContext;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    dragover: import("vue").Ref<boolean>;
                    disabled: import("vue").ComputedRef<boolean>;
                    onDrop: (e: DragEvent) => void;
                    onDragover: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    file: (file: File[]) => boolean;
                }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                }>> & {
                    onFile?: ((file: File[]) => any) | undefined;
                }, {
                    readonly disabled: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }>;
            }> & import("vue").ComponentCustomProperties) | undefined>;
            abort: (file: UploadFile) => void;
            submit: () => void;
            clearFiles: (states?: import("element-plus").UploadStatus[] | undefined) => void;
            uploadFiles: import("vue").Ref<{
                name: string;
                percentage?: number | undefined;
                status: import("element-plus").UploadStatus;
                size?: number | undefined;
                response?: unknown;
                uid: number;
                url?: string | undefined;
                raw?: {
                    uid: number;
                    readonly lastModified: number;
                    readonly name: string;
                    readonly webkitRelativePath: string;
                    readonly size: number;
                    readonly type: string;
                    arrayBuffer: () => Promise<ArrayBuffer>;
                    slice: (start?: number | undefined, end?: number | undefined, contentType?: string | undefined) => Blob;
                    stream: () => ReadableStream<any>;
                    text: () => Promise<string>;
                } | undefined;
            }[]> | import("vue").WritableComputedRef<UploadFiles>;
            handleStart: (rawFile: UploadRawFile) => void;
            handleError: (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
            handleRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
            handleSuccess: (response: any, rawFile: UploadRawFile) => unknown;
            handleProgress: (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
            isPictureCard: import("vue").ComputedRef<boolean>;
            uploadContentProps: import("vue").ComputedRef<import("element-plus").UploadContentProps>;
            UploadList: import("vue").DefineComponent<{
                readonly files: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => UploadFiles) | (() => UploadFiles) | ((new (...args: any[]) => UploadFiles) | (() => UploadFiles))[], unknown, unknown, () => never[], boolean>;
                readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly handlePreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                    (): (uploadFile: UploadFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                    (): (uploadFile: UploadFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
            }, {
                emit: (event: "remove", file: UploadFile) => void;
                t: import("element-plus").Translator;
                nsUpload: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                nsIcon: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                nsList: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                disabled: import("vue").ComputedRef<boolean>;
                focusing: import("vue").Ref<boolean>;
                handleRemove: (file: UploadFile) => void;
                ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    style: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {}>> & Record<string, any>;
                Check: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                CircleCheck: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                Close: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                Delete: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                Document: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                ZoomIn: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                ElProgress: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "circle" | "line" | "dashboard", unknown, "line", boolean>;
                    readonly percentage: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly status: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "success" | "warning" | "exception", unknown, "", boolean>;
                    readonly indeterminate: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly duration: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
                    readonly strokeWidth: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
                    readonly strokeLinecap: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square") | ((new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square"))[], unknown, unknown, "round", boolean>;
                    readonly textInside: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly width: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
                    readonly showText: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly color: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | ((new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]))[], unknown, unknown, "", boolean>;
                    readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                        (): import("element-plus").ProgressFn;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                        (): import("element-plus").ProgressFn;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, (percentage: number) => string, boolean>;
                }, {
                    STATUS_COLOR_MAP: Record<string, string>;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "circle" | "line" | "dashboard", unknown, "line", boolean>;
                        readonly percentage: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                        readonly status: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "success" | "warning" | "exception", unknown, "", boolean>;
                        readonly indeterminate: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly duration: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
                        readonly strokeWidth: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
                        readonly strokeLinecap: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square") | ((new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square"))[], unknown, unknown, "round", boolean>;
                        readonly textInside: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                        readonly width: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
                        readonly showText: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly color: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | ((new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]))[], unknown, unknown, "", boolean>;
                        readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                            (): import("element-plus").ProgressFn;
                            new (): any;
                            readonly prototype: any;
                        } | ((new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                            (): import("element-plus").ProgressFn;
                            new (): any;
                            readonly prototype: any;
                        })[], unknown, unknown, (percentage: number) => string, boolean>;
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    barStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    relativeStrokeWidth: import("vue").ComputedRef<string>;
                    radius: import("vue").ComputedRef<number>;
                    trackPath: import("vue").ComputedRef<string>;
                    perimeter: import("vue").ComputedRef<number>;
                    rate: import("vue").ComputedRef<1 | 0.75>;
                    strokeDashoffset: import("vue").ComputedRef<string>;
                    trailPathStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    circlePathStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    stroke: import("vue").ComputedRef<string>;
                    statusIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
                    progressTextSize: import("vue").ComputedRef<number>;
                    content: import("vue").ComputedRef<string>;
                    getColors: (color: import("element-plus").ProgressColor[]) => import("element-plus").ProgressColor[];
                    getCurrentColor: (percentage: number) => string;
                    ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly size: {
                                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly color: {
                                readonly type: import("vue").PropType<string>;
                                readonly required: false;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                        }>> & {
                            [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        ns: {
                            namespace: import("vue").Ref<string>;
                            b: (blockSuffix?: string | undefined) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        style: import("vue").ComputedRef<import("vue").CSSProperties>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>>, {}>> & Record<string, any>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "circle" | "line" | "dashboard", unknown, "line", boolean>;
                    readonly percentage: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly status: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "success" | "warning" | "exception", unknown, "", boolean>;
                    readonly indeterminate: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly duration: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
                    readonly strokeWidth: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
                    readonly strokeLinecap: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square") | ((new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square"))[], unknown, unknown, "round", boolean>;
                    readonly textInside: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly width: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
                    readonly showText: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly color: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | ((new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]))[], unknown, unknown, "", boolean>;
                    readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                        (): import("element-plus").ProgressFn;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                        (): import("element-plus").ProgressFn;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, (percentage: number) => string, boolean>;
                }>>, {
                    readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "circle" | "line" | "dashboard", unknown>;
                    readonly color: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | ((new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]))[], unknown, unknown>;
                    readonly width: number;
                    readonly strokeLinecap: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square") | ((new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square"))[], unknown, unknown>;
                    readonly strokeWidth: number;
                    readonly indeterminate: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly format: import("element-plus").ProgressFn;
                    readonly percentage: number;
                    readonly status: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "exception", unknown>;
                    readonly duration: number;
                    readonly textInside: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    readonly showText: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }>> & Record<string, any>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                remove: (file: UploadFile) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly files: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => UploadFiles) | (() => UploadFiles) | ((new (...args: any[]) => UploadFiles) | (() => UploadFiles))[], unknown, unknown, () => never[], boolean>;
                readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly handlePreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                    (): (uploadFile: UploadFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                    (): (uploadFile: UploadFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
            }>> & {
                onRemove?: ((file: UploadFile) => any) | undefined;
            }, {
                readonly disabled: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
                readonly files: UploadFiles;
                readonly handlePreview: (uploadFile: UploadFile) => void;
            }>;
            UploadContent: import("vue").DefineComponent<{
                readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                readonly headers: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly withCredentials: BooleanConstructor;
                readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                readonly disabled: BooleanConstructor;
                readonly limit: NumberConstructor;
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                        (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                        (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                        (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                        (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                        (): (rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                        (): (rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                        (): (response: any, rawFile: UploadRawFile) => unknown;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                        (): (response: any, rawFile: UploadRawFile) => unknown;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                        (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                        (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                        (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                        (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                    readonly headers: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                    readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                    readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                    readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly withCredentials: BooleanConstructor;
                    readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                    readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                    readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                    readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                        (): import("element-plus").UploadRequestHandler;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                        (): import("element-plus").UploadRequestHandler;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                    readonly disabled: BooleanConstructor;
                    readonly limit: NumberConstructor;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                disabled: import("vue").ComputedRef<boolean>;
                requests: import("vue").ShallowRef<Record<string, XMLHttpRequest | Promise<unknown>>>;
                inputRef: import("vue").ShallowRef<HTMLInputElement | undefined>;
                uploadFiles: (files: File[]) => void;
                upload: (rawFile: UploadRawFile) => Promise<void>;
                doUpload: (rawFile: UploadRawFile) => void;
                handleChange: (e: Event) => void;
                handleClick: () => void;
                handleKeydown: () => void;
                abort: (file?: UploadFile | undefined) => void;
                UploadDragger: import("vue").DefineComponent<{
                    readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                }, {
                    COMPONENT_NAME: string;
                    emit: (event: "file", file: File[]) => void;
                    uploaderContext: import("element-plus").UploadContext;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    dragover: import("vue").Ref<boolean>;
                    disabled: import("vue").ComputedRef<boolean>;
                    onDrop: (e: DragEvent) => void;
                    onDragover: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    file: (file: File[]) => boolean;
                }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                }>> & {
                    onFile?: ((file: File[]) => any) | undefined;
                }, {
                    readonly disabled: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                readonly headers: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly withCredentials: BooleanConstructor;
                readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                readonly disabled: BooleanConstructor;
                readonly limit: NumberConstructor;
            }>>, {
                readonly type: string;
                readonly disabled: boolean;
                readonly name: string;
                readonly drag: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly multiple: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly data: Record<string, any>;
                readonly onError: (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                readonly onProgress: (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                readonly action: string;
                readonly method: string;
                readonly showFileList: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly accept: string;
                readonly fileList: import("element-plus").UploadUserFile[];
                readonly autoUpload: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
                readonly httpRequest: import("element-plus").UploadRequestHandler;
                readonly withCredentials: boolean;
                readonly beforeUpload: (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                readonly onRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                readonly onSuccess: (response: any, rawFile: UploadRawFile) => unknown;
                readonly onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                readonly onStart: (rawFile: UploadRawFile) => void;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            readonly type: string;
            readonly disabled: boolean;
            readonly name: string;
            readonly onChange: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            readonly drag: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly multiple: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly data: Record<string, any>;
            readonly onError: (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            readonly onProgress: (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            readonly action: string;
            readonly method: string;
            readonly showFileList: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly accept: string;
            readonly fileList: import("element-plus").UploadUserFile[];
            readonly autoUpload: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
            readonly httpRequest: import("element-plus").UploadRequestHandler;
            readonly withCredentials: boolean;
            readonly beforeUpload: (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
            readonly onRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            readonly onPreview: (uploadFile: UploadFile) => void;
            readonly onSuccess: (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            readonly onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
        }, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
            (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
            (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, () => void, boolean>;
        readonly beforeRemove: {
            readonly type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
            (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
            (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, () => void, boolean>;
        readonly onChange: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
            (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
            (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, () => void, boolean>;
        readonly onPreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
            (): (uploadFile: UploadFile) => void;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
            (): (uploadFile: UploadFile) => void;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, () => void, boolean>;
        readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
            (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
            (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, () => void, boolean>;
        readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
            (): (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
            (): (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, () => void, boolean>;
        readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
            (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
            (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, () => void, boolean>;
        readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
            (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
            (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, () => void, boolean>;
        readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
        readonly headers: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
        readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
        readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
        readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
        readonly withCredentials: BooleanConstructor;
        readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
        readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
        readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
        readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
        readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
            (): import("element-plus").UploadRequestHandler;
            new (): any;
            readonly prototype: any;
        } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
            (): import("element-plus").UploadRequestHandler;
            new (): any;
            readonly prototype: any;
        })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
        readonly disabled: BooleanConstructor;
        readonly limit: NumberConstructor;
    }>> & import("vue").ShallowUnwrapRef<{
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly beforeRemove: {
                readonly type: import("vue").PropType<(uploadFile: UploadFile, uploadFiles: UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onChange: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onPreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                (): (uploadFile: UploadFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                (): (uploadFile: UploadFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | (() => (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void) | {
                (): (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
            readonly headers: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
            readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
            readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly withCredentials: BooleanConstructor;
            readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
            readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
            readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
            readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
            readonly disabled: BooleanConstructor;
            readonly limit: NumberConstructor;
        }>> & {
            [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        disabled: import("vue").ComputedRef<boolean>;
        uploadRef: import("vue").ShallowRef<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly type: string;
                readonly disabled: boolean;
                readonly name: string;
                readonly drag: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly multiple: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly data: Record<string, any>;
                readonly onError: (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                readonly onProgress: (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                readonly action: string;
                readonly method: string;
                readonly showFileList: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly accept: string;
                readonly fileList: import("element-plus").UploadUserFile[];
                readonly autoUpload: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
                readonly httpRequest: import("element-plus").UploadRequestHandler;
                readonly withCredentials: boolean;
                readonly beforeUpload: (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                readonly onRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                readonly onSuccess: (response: any, rawFile: UploadRawFile) => unknown;
                readonly onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                readonly onStart: (rawFile: UploadRawFile) => void;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                readonly headers: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly withCredentials: BooleanConstructor;
                readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                readonly disabled: BooleanConstructor;
                readonly limit: NumberConstructor;
            }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "fileList" | "beforeUpload" | "onRemove" | "onSuccess" | "onProgress" | "onError" | "onExceed" | "action" | "method" | "data" | "multiple" | "name" | "drag" | "withCredentials" | "showFileList" | "accept" | "autoUpload" | "listType" | "httpRequest" | "disabled" | "onStart">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                readonly headers: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly withCredentials: BooleanConstructor;
                readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                readonly disabled: BooleanConstructor;
                readonly limit: NumberConstructor;
            }>>, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                        (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                        (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                        (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                        (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                        (): (rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                        (): (rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                        (): (response: any, rawFile: UploadRawFile) => unknown;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                        (): (response: any, rawFile: UploadRawFile) => unknown;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                        (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                        (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                        (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                        (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                        (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, () => void, boolean>;
                    readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                    readonly headers: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                    readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                    readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                    readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly withCredentials: BooleanConstructor;
                    readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                    readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                    readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                    readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                        (): import("element-plus").UploadRequestHandler;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                        (): import("element-plus").UploadRequestHandler;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                    readonly disabled: BooleanConstructor;
                    readonly limit: NumberConstructor;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                disabled: import("vue").ComputedRef<boolean>;
                requests: import("vue").ShallowRef<Record<string, XMLHttpRequest | Promise<unknown>>>;
                inputRef: import("vue").ShallowRef<HTMLInputElement | undefined>;
                uploadFiles: (files: File[]) => void;
                upload: (rawFile: UploadRawFile) => Promise<void>;
                doUpload: (rawFile: UploadRawFile) => void;
                handleChange: (e: Event) => void;
                handleClick: () => void;
                handleKeydown: () => void;
                abort: (file?: UploadFile | undefined) => void;
                UploadDragger: import("vue").DefineComponent<{
                    readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                }, {
                    COMPONENT_NAME: string;
                    emit: (event: "file", file: File[]) => void;
                    uploaderContext: import("element-plus").UploadContext;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    dragover: import("vue").Ref<boolean>;
                    disabled: import("vue").ComputedRef<boolean>;
                    onDrop: (e: DragEvent) => void;
                    onDragover: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                    file: (file: File[]) => boolean;
                }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                }>> & {
                    onFile?: ((file: File[]) => any) | undefined;
                }, {
                    readonly disabled: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                readonly type: string;
                readonly disabled: boolean;
                readonly name: string;
                readonly drag: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly multiple: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly data: Record<string, any>;
                readonly onError: (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                readonly onProgress: (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                readonly action: string;
                readonly method: string;
                readonly showFileList: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly accept: string;
                readonly fileList: import("element-plus").UploadUserFile[];
                readonly autoUpload: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
                readonly httpRequest: import("element-plus").UploadRequestHandler;
                readonly withCredentials: boolean;
                readonly beforeUpload: (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                readonly onRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                readonly onSuccess: (response: any, rawFile: UploadRawFile) => unknown;
                readonly onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                readonly onStart: (rawFile: UploadRawFile) => void;
            }, {}, string> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                (): (rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                (): (rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                (): (response: any, rawFile: UploadRawFile) => unknown;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                (): (response: any, rawFile: UploadRawFile) => unknown;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
            readonly headers: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
            readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
            readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly withCredentials: BooleanConstructor;
            readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
            readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
            readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
            readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
            readonly disabled: BooleanConstructor;
            readonly limit: NumberConstructor;
        }>> & import("vue").ShallowUnwrapRef<{
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                readonly headers: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly withCredentials: BooleanConstructor;
                readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                readonly disabled: BooleanConstructor;
                readonly limit: NumberConstructor;
            }>> & {
                [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").Ref<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            disabled: import("vue").ComputedRef<boolean>;
            requests: import("vue").ShallowRef<Record<string, XMLHttpRequest | Promise<unknown>>>;
            inputRef: import("vue").ShallowRef<HTMLInputElement | undefined>;
            uploadFiles: (files: File[]) => void;
            upload: (rawFile: UploadRawFile) => Promise<void>;
            doUpload: (rawFile: UploadRawFile) => void;
            handleChange: (e: Event) => void;
            handleClick: () => void;
            handleKeydown: () => void;
            abort: (file?: UploadFile | undefined) => void;
            UploadDragger: import("vue").DefineComponent<{
                readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            }, {
                COMPONENT_NAME: string;
                emit: (event: "file", file: File[]) => void;
                uploaderContext: import("element-plus").UploadContext;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                dragover: import("vue").Ref<boolean>;
                disabled: import("vue").ComputedRef<boolean>;
                onDrop: (e: DragEvent) => void;
                onDragover: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                file: (file: File[]) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            }>> & {
                onFile?: ((file: File[]) => any) | undefined;
            }, {
                readonly disabled: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }>;
        }> & import("vue").ComponentCustomProperties) | undefined>;
        abort: (file: UploadFile) => void;
        submit: () => void;
        clearFiles: (states?: import("element-plus").UploadStatus[] | undefined) => void;
        uploadFiles: import("vue").Ref<{
            name: string;
            percentage?: number | undefined;
            status: import("element-plus").UploadStatus;
            size?: number | undefined;
            response?: unknown;
            uid: number;
            url?: string | undefined;
            raw?: {
                uid: number;
                readonly lastModified: number;
                readonly name: string;
                readonly webkitRelativePath: string;
                readonly size: number;
                readonly type: string;
                arrayBuffer: () => Promise<ArrayBuffer>;
                slice: (start?: number | undefined, end?: number | undefined, contentType?: string | undefined) => Blob;
                stream: () => ReadableStream<any>;
                text: () => Promise<string>;
            } | undefined;
        }[]> | import("vue").WritableComputedRef<UploadFiles>;
        handleStart: (rawFile: UploadRawFile) => void;
        handleError: (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
        handleRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
        handleSuccess: (response: any, rawFile: UploadRawFile) => unknown;
        handleProgress: (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
        isPictureCard: import("vue").ComputedRef<boolean>;
        uploadContentProps: import("vue").ComputedRef<import("element-plus").UploadContentProps>;
        UploadList: import("vue").DefineComponent<{
            readonly files: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => UploadFiles) | (() => UploadFiles) | ((new (...args: any[]) => UploadFiles) | (() => UploadFiles))[], unknown, unknown, () => never[], boolean>;
            readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly handlePreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                (): (uploadFile: UploadFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                (): (uploadFile: UploadFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
        }, {
            emit: (event: "remove", file: UploadFile) => void;
            t: import("element-plus").Translator;
            nsUpload: {
                namespace: import("vue").Ref<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            nsIcon: {
                namespace: import("vue").Ref<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            nsList: {
                namespace: import("vue").Ref<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            disabled: import("vue").ComputedRef<boolean>;
            focusing: import("vue").Ref<boolean>;
            handleRemove: (file: UploadFile) => void;
            ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                style: import("vue").ComputedRef<import("vue").CSSProperties>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {}>> & Record<string, any>;
            Check: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            CircleCheck: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Close: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Delete: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Document: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            ZoomIn: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            ElProgress: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "circle" | "line" | "dashboard", unknown, "line", boolean>;
                readonly percentage: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly status: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "success" | "warning" | "exception", unknown, "", boolean>;
                readonly indeterminate: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly duration: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
                readonly strokeWidth: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
                readonly strokeLinecap: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square") | ((new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square"))[], unknown, unknown, "round", boolean>;
                readonly textInside: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly width: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
                readonly showText: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly color: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | ((new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]))[], unknown, unknown, "", boolean>;
                readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                    (): import("element-plus").ProgressFn;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                    (): import("element-plus").ProgressFn;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, (percentage: number) => string, boolean>;
            }, {
                STATUS_COLOR_MAP: Record<string, string>;
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "circle" | "line" | "dashboard", unknown, "line", boolean>;
                    readonly percentage: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                    readonly status: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "success" | "warning" | "exception", unknown, "", boolean>;
                    readonly indeterminate: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly duration: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
                    readonly strokeWidth: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
                    readonly strokeLinecap: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square") | ((new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square"))[], unknown, unknown, "round", boolean>;
                    readonly textInside: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly width: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
                    readonly showText: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly color: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | ((new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]))[], unknown, unknown, "", boolean>;
                    readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                        (): import("element-plus").ProgressFn;
                        new (): any;
                        readonly prototype: any;
                    } | ((new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                        (): import("element-plus").ProgressFn;
                        new (): any;
                        readonly prototype: any;
                    })[], unknown, unknown, (percentage: number) => string, boolean>;
                }>> & {
                    [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                barStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                relativeStrokeWidth: import("vue").ComputedRef<string>;
                radius: import("vue").ComputedRef<number>;
                trackPath: import("vue").ComputedRef<string>;
                perimeter: import("vue").ComputedRef<number>;
                rate: import("vue").ComputedRef<1 | 0.75>;
                strokeDashoffset: import("vue").ComputedRef<string>;
                trailPathStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                circlePathStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                stroke: import("vue").ComputedRef<string>;
                statusIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
                progressTextSize: import("vue").ComputedRef<number>;
                content: import("vue").ComputedRef<string>;
                getColors: (color: import("element-plus").ProgressColor[]) => import("element-plus").ProgressColor[];
                getCurrentColor: (percentage: number) => string;
                ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly size: {
                            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly color: {
                            readonly type: import("vue").PropType<string>;
                            readonly required: false;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    ns: {
                        namespace: import("vue").Ref<string>;
                        b: (blockSuffix?: string | undefined) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    style: import("vue").ComputedRef<import("vue").CSSProperties>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly size: {
                        readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly color: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {}>> & Record<string, any>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "circle" | "line" | "dashboard", unknown, "line", boolean>;
                readonly percentage: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
                readonly status: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "success" | "warning" | "exception", unknown, "", boolean>;
                readonly indeterminate: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly duration: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 3, boolean>;
                readonly strokeWidth: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 6, boolean>;
                readonly strokeLinecap: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square") | ((new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square"))[], unknown, unknown, "round", boolean>;
                readonly textInside: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly width: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 126, boolean>;
                readonly showText: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly color: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | ((new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]))[], unknown, unknown, "", boolean>;
                readonly format: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                    (): import("element-plus").ProgressFn;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => import("element-plus").ProgressFn) | (() => import("element-plus").ProgressFn) | {
                    (): import("element-plus").ProgressFn;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, (percentage: number) => string, boolean>;
            }>>, {
                readonly type: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "circle" | "line" | "dashboard", unknown>;
                readonly color: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | ((new (...args: any[]) => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]) | (() => string | import("element-plus").ProgressFn | import("element-plus").ProgressColor[]))[], unknown, unknown>;
                readonly width: number;
                readonly strokeLinecap: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square") | ((new (...args: any[]) => "round" | "inherit" | "butt" | "square") | (() => "round" | "inherit" | "butt" | "square"))[], unknown, unknown>;
                readonly strokeWidth: number;
                readonly indeterminate: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly format: import("element-plus").ProgressFn;
                readonly percentage: number;
                readonly status: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "success" | "warning" | "exception", unknown>;
                readonly duration: number;
                readonly textInside: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly showText: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }>> & Record<string, any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            remove: (file: UploadFile) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly files: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => UploadFiles) | (() => UploadFiles) | ((new (...args: any[]) => UploadFiles) | (() => UploadFiles))[], unknown, unknown, () => never[], boolean>;
            readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly handlePreview: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                (): (uploadFile: UploadFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (uploadFile: UploadFile) => void) | (() => (uploadFile: UploadFile) => void) | {
                (): (uploadFile: UploadFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
        }>> & {
            onRemove?: ((file: UploadFile) => any) | undefined;
        }, {
            readonly disabled: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
            readonly files: UploadFiles;
            readonly handlePreview: (uploadFile: UploadFile) => void;
        }>;
        UploadContent: import("vue").DefineComponent<{
            readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                (): (rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                (): (rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                (): (response: any, rawFile: UploadRawFile) => unknown;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                (): (response: any, rawFile: UploadRawFile) => unknown;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
            readonly headers: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
            readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
            readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly withCredentials: BooleanConstructor;
            readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
            readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
            readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
            readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
            readonly disabled: BooleanConstructor;
            readonly limit: NumberConstructor;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                    (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                    (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                    (): (rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                    (): (response: any, rawFile: UploadRawFile) => unknown;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                    (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                    (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                    (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, () => void, boolean>;
                readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
                readonly headers: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
                readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
                readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
                readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly withCredentials: BooleanConstructor;
                readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
                readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
                readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
                readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
                readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                    (): import("element-plus").UploadRequestHandler;
                    new (): any;
                    readonly prototype: any;
                })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
                readonly disabled: BooleanConstructor;
                readonly limit: NumberConstructor;
            }>> & {
                [x: `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").Ref<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            disabled: import("vue").ComputedRef<boolean>;
            requests: import("vue").ShallowRef<Record<string, XMLHttpRequest | Promise<unknown>>>;
            inputRef: import("vue").ShallowRef<HTMLInputElement | undefined>;
            uploadFiles: (files: File[]) => void;
            upload: (rawFile: UploadRawFile) => Promise<void>;
            doUpload: (rawFile: UploadRawFile) => void;
            handleChange: (e: Event) => void;
            handleClick: () => void;
            handleKeydown: () => void;
            abort: (file?: UploadFile | undefined) => void;
            UploadDragger: import("vue").DefineComponent<{
                readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            }, {
                COMPONENT_NAME: string;
                emit: (event: "file", file: File[]) => void;
                uploaderContext: import("element-plus").UploadContext;
                ns: {
                    namespace: import("vue").Ref<string>;
                    b: (blockSuffix?: string | undefined) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                dragover: import("vue").Ref<boolean>;
                disabled: import("vue").ComputedRef<boolean>;
                onDrop: (e: DragEvent) => void;
                onDragover: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                file: (file: File[]) => boolean;
            }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly disabled: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            }>> & {
                onFile?: ((file: File[]) => any) | undefined;
            }, {
                readonly disabled: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly beforeUpload: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | (() => (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>) | {
                (): (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onRemove: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | (() => (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void) | {
                (): (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onStart: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                (): (rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (rawFile: UploadRawFile) => void) | (() => (rawFile: UploadRawFile) => void) | {
                (): (rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onSuccess: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                (): (response: any, rawFile: UploadRawFile) => unknown;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (response: any, rawFile: UploadRawFile) => unknown) | (() => (response: any, rawFile: UploadRawFile) => unknown) | {
                (): (response: any, rawFile: UploadRawFile) => unknown;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onProgress: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | (() => (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void) | {
                (): (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onError: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | (() => (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void) | {
                (): (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly onExceed: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | (() => (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void) | {
                (): (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, () => void, boolean>;
            readonly action: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "#", boolean>;
            readonly headers: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers) | ((new (...args: any[]) => Record<string, any> | Headers) | (() => Record<string, any> | Headers))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly method: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "post", boolean>;
            readonly data: import("element-plus/es/utils").EpPropFinalized<ObjectConstructor, unknown, unknown, () => import("element-plus/es/utils").Mutable<{}>, boolean>;
            readonly multiple: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly name: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "file", boolean>;
            readonly drag: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly withCredentials: BooleanConstructor;
            readonly showFileList: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly accept: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
            readonly type: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "select", boolean>;
            readonly fileList: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]) | ((new (...args: any[]) => import("element-plus").UploadUserFile[]) | (() => import("element-plus").UploadUserFile[]))[], unknown, unknown, () => [], boolean>;
            readonly autoUpload: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly listType: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "text" | "picture" | "picture-card", unknown, "text", boolean>;
            readonly httpRequest: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            } | ((new (...args: any[]) => import("element-plus").UploadRequestHandler) | (() => import("element-plus").UploadRequestHandler) | {
                (): import("element-plus").UploadRequestHandler;
                new (): any;
                readonly prototype: any;
            })[], unknown, unknown, import("element-plus").UploadRequestHandler, boolean>;
            readonly disabled: BooleanConstructor;
            readonly limit: NumberConstructor;
        }>>, {
            readonly type: string;
            readonly disabled: boolean;
            readonly name: string;
            readonly drag: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly multiple: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly data: Record<string, any>;
            readonly onError: (err: import("element-plus/es/components/upload/src/ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
            readonly onProgress: (evt: import("element-plus").UploadProgressEvent, rawFile: UploadRawFile) => void;
            readonly action: string;
            readonly method: string;
            readonly showFileList: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly accept: string;
            readonly fileList: import("element-plus").UploadUserFile[];
            readonly autoUpload: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly listType: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
            readonly httpRequest: import("element-plus").UploadRequestHandler;
            readonly withCredentials: boolean;
            readonly beforeUpload: (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
            readonly onRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
            readonly onSuccess: (response: any, rawFile: UploadRawFile) => unknown;
            readonly onExceed: (files: File[], uploadFiles: import("element-plus").UploadUserFile[]) => void;
            readonly onStart: (rawFile: UploadRawFile) => void;
        }>;
    }> & {} & import("vue").ComponentCustomProperties & {}) | undefined>;
    handleChange: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    beforeAvatarUpload: (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
    uploadeDocError: (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    uploadeDocSuccess: (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    showFile: (val: any) => void;
    deleteFile: (index: number) => void;
    dialogImageVisible: import("vue").Ref<boolean>;
    isShowCropper: import("vue").Ref<boolean>;
    tempPic: import("vue").Ref<string>;
    closeDialog: () => void;
    aaa: (e: any) => void;
    readonly extend: typeof extend;
    readonly Plus: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    readonly UploadFilled: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    readonly CloseBold: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    readonly Close: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    readonly Document: import("vue").DefineComponent<{}, {}, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:fileList" | "show_pic" | "uploadSuccess" | "selectedFile")[], "update:fileList" | "show_pic" | "uploadSuccess" | "selectedFile", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    fileList: {
        type: ArrayConstructor;
        default: () => never[];
    };
    UploadUrl: {
        type: StringConstructor;
        default: string;
    };
    UploadHeader: {
        type: ObjectConstructor;
        default: () => {};
    };
    Uploadmethod: {
        type: StringConstructor;
        default: string;
    };
    UploadData: {
        type: ObjectConstructor;
        default: () => {};
    };
    UploadDarg: {
        type: BooleanConstructor;
        default: boolean;
    };
    UploadMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    AutoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewHeight: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
    onShow_pic?: ((...args: any[]) => any) | undefined;
    onUploadSuccess?: ((...args: any[]) => any) | undefined;
    onSelectedFile?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    fileList: unknown[];
    UploadUrl: string;
    UploadHeader: Record<string, any>;
    Uploadmethod: string;
    UploadData: Record<string, any>;
    UploadDarg: boolean;
    UploadMultiple: boolean;
    AutoUpload: boolean;
    previewHeight: string;
}>;
export default _default;
