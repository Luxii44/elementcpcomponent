// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    WmUpload: typeof import('@luxii/wmcomponent')
    WmButton: typeof import('@luxii/wmcomponent')
    WmCard: typeof import('@luxii/wmcomponent')
    WmCropper: typeof import('@luxii/wmcomponent')
  }
}

export {}
