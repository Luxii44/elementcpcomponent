export declare const WmCropper: import("wmcomponent/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    pic: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    boxStyle: {
        type: ObjectConstructor;
        default: () => {
            width: string;
            height: string;
            backgroundColor: string;
            margin: string;
        };
    };
    options: {
        type: ObjectConstructor;
        default: () => {
            viewMode: number;
            dragMode: string;
        };
    };
}, {
    emits: (event: "savePic", ...args: any[]) => void;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        pic: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        boxStyle: {
            type: ObjectConstructor;
            default: () => {
                width: string;
                height: string;
                backgroundColor: string;
                margin: string;
            };
        };
        options: {
            type: ObjectConstructor;
            default: () => {
                viewMode: number;
                dragMode: string;
            };
        };
    }>> & {
        onSavePic?: ((...args: any[]) => any) | undefined;
    }>>;
    Pic: import("vue").Ref<string>;
    TempPic: import("vue").Ref<string>;
    cropend: () => void;
    zoom: () => void;
    rotateLeft: () => void;
    rotateRight: () => void;
    zoomAdd: () => void;
    zoomSubtract: () => void;
    clear: () => void;
    reset: () => void;
    result: {
        dataURL: string;
        blobURL: string;
    };
    savePic: () => Promise<void>;
    readonly VuePictureCropper: import("vue").DefineComponent<{
        img: {
            type: StringConstructor;
            required: boolean;
            default: string;
        };
        boxStyle: {
            type: ObjectConstructor;
            required: boolean;
            default: () => {};
        };
        options: {
            type: ObjectConstructor;
            required: boolean;
            default: () => {};
        };
        presetMode: {
            type: import("vue").PropType<import("vue-picture-cropper").PresetModeOptions>;
            required: boolean;
            default: () => {};
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        img: {
            type: StringConstructor;
            required: boolean;
            default: string;
        };
        boxStyle: {
            type: ObjectConstructor;
            required: boolean;
            default: () => {};
        };
        options: {
            type: ObjectConstructor;
            required: boolean;
            default: () => {};
        };
        presetMode: {
            type: import("vue").PropType<import("vue-picture-cropper").PresetModeOptions>;
            required: boolean;
            default: () => {};
        };
    }>>, {
        img: string;
        boxStyle: Record<string, any>;
        options: Record<string, any>;
        presetMode: import("vue-picture-cropper").PresetModeOptions;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "savePic"[], "savePic", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    pic: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    boxStyle: {
        type: ObjectConstructor;
        default: () => {
            width: string;
            height: string;
            backgroundColor: string;
            margin: string;
        };
    };
    options: {
        type: ObjectConstructor;
        default: () => {
            viewMode: number;
            dragMode: string;
        };
    };
}>> & {
    onSavePic?: ((...args: any[]) => any) | undefined;
}, {
    pic: string;
    type: string;
    boxStyle: Record<string, any>;
    options: Record<string, any>;
}>> & Record<string, any>;
export default WmCropper;
export * from './src/cropper';
