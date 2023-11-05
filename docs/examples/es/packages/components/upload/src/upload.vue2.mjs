import { createElementVNode, toDisplayString, defineComponent, ref, watch, resolveComponent, resolveDirective, openBlock, createElementBlock, normalizeStyle, withDirectives, createVNode, createSlots, withCtx, unref, createCommentVNode, createBlock, vShow, Fragment, renderList, withModifiers, normalizeClass, isRef, createTextVNode } from 'vue';
import { getMIME, checkFileType } from './upload.mjs';
import { ElNotification } from 'element-plus';
import { UploadFilled as upload_filled_default, Plus as plus_default, CloseBold as close_bold_default, Close as close_default, Document as document_default } from '../../../../node_modules/.pnpm/@element-plus_icons-vue@2.1.0_vue@3.2.47/node_modules/@element-plus/icons-vue/dist/index.mjs';

const _hoisted_1 = { style: { "margin": "0 10px" } };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "mask" };
const _hoisted_4 = {
  key: 0,
  class: "mask faild"
};
const _hoisted_5 = { key: 0 };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "file-name" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = /* @__PURE__ */ createElementVNode(
  "div",
  { class: "no-content" },
  /* @__PURE__ */ toDisplayString("\u6CA1\u6709\u9644\u4EF6"),
  -1
  /* HOISTED */
);
const _hoisted_10 = [
  _hoisted_9
];
const _hoisted_11 = { class: "preview" };
const _hoisted_12 = ["src"];
const __default__ = defineComponent({
  name: "WmUpload"
});
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    fileList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    UploadUrl: {
      type: String,
      default: ""
    },
    UploadHeader: {
      type: Object,
      default: () => {
        return {};
      }
    },
    Uploadmethod: {
      type: String,
      default: "post"
    },
    UploadData: {
      type: Object,
      default: () => {
        return {};
      }
    },
    UploadDarg: {
      type: Boolean,
      default: false
    },
    UploadMultiple: {
      type: Boolean,
      default: false
    },
    AutoUpload: {
      type: Boolean,
      default: false
    },
    previewHeight: {
      type: String,
      default: "50vh"
    }
  },
  emits: ["update:fileList", "show_pic", "uploadSuccess", "selectedFile"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const FileList = ref([]);
    watch(() => props.fileList, (newVal) => {
      if (props.fileList.length > 0) {
        FileList.value = newVal;
      }
    });
    watch(FileList, (count, prevCount) => {
      emits("update:fileList", FileList.value);
    });
    const uploadRef = ref();
    const handleChange = (uploadFile, uploadFiles) => {
      if (!props.AutoUpload) {
        getMIME(uploadFile.url).then((res) => {
          FileList.value.unshift({ uid: uploadFile.uid, name: uploadFile.name, url: uploadFile.url, MIME: res });
          if (checkFileType(res) == "image") {
            dialogImageVisible.value = true;
            isShowCropper.value = true;
            tempPic.value = uploadFile.url;
          }
          console.log(FileList.value);
        });
      }
    };
    const beforeAvatarUpload = (rawFile) => {
      console.log(rawFile, 11);
    };
    const uploadeDocError = (error, uploadFile, uploadFiles) => {
      let a = FileList.value.filter((item) => {
        return item.uid == uploadFile.uid;
      });
      a[0].UploadFaild = true;
      a[0].Loading = false;
      ElNotification({
        title: "\u6587\u6863\u4E0A\u4F20",
        message: "\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"
      });
    };
    const uploadeDocSuccess = (response, uploadFile) => {
      console.log(response, uploadFile);
      ElNotification({
        title: "\u6587\u6863\u4E0A\u4F20",
        message: "\u4E0A\u4F20\u6210\u529F\uFF01"
      });
      emits("uploadSuccess", response);
    };
    const showFile = (val) => {
      if (checkFileType(val.MIME) == "image") {
        dialogImageVisible.value = true;
        tempPic.value = val.url;
        emits("show_pic", val);
      } else {
        window.open(val.name);
      }
    };
    const deleteFile = (index) => {
      FileList.value.splice(index, 1);
    };
    let dialogImageVisible = ref(false);
    let isShowCropper = ref(false);
    let tempPic = ref("");
    const closeDialog = () => {
      dialogImageVisible.value = false;
      isShowCropper.value = false;
    };
    const aaa = (e) => {
      emits("selectedFile", e);
      closeDialog();
    };
    return (_ctx, _cache) => {
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_image = resolveComponent("el-image");
      const _component_el_tooltip = resolveComponent("el-tooltip");
      const _component_el_card = resolveComponent("el-card");
      const _component_WmCropper = resolveComponent("WmCropper");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dialog = resolveComponent("el-dialog");
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock(
        "div",
        {
          class: "upload-box",
          style: normalizeStyle({ flexDirection: __props.UploadDarg ? "column" : "row" })
        },
        [
          withDirectives(createElementVNode(
            "div",
            _hoisted_1,
            [
              createVNode(_component_el_upload, {
                class: "avatar-uploader",
                ref_key: "uploadRef",
                ref: uploadRef,
                action: __props.UploadUrl,
                "show-file-list": false,
                "list-type": "picture",
                headers: __props.UploadHeader,
                method: __props.Uploadmethod,
                data: __props.UploadData,
                drag: __props.UploadDarg,
                multiple: __props.UploadMultiple,
                "auto-upload": __props.AutoUpload,
                "before-upload": beforeAvatarUpload,
                "on-success": uploadeDocSuccess,
                "on-error": uploadeDocError,
                "on-change": handleChange
              }, createSlots({
                default: withCtx(() => [
                  __props.UploadDarg ? (openBlock(), createElementBlock("div", _hoisted_2, [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(unref(upload_filled_default))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])) : createCommentVNode("v-if", true),
                  __props.AutoUpload && !__props.UploadDarg ? (openBlock(), createBlock(_component_el_icon, {
                    key: 1,
                    class: "avatar-uploader-icon"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(plus_default))
                    ]),
                    _: 1
                    /* STABLE */
                  })) : createCommentVNode("v-if", true)
                ]),
                _: 2
                /* DYNAMIC */
              }, [
                !__props.AutoUpload && !__props.UploadDarg ? {
                  name: "trigger",
                  fn: withCtx(() => [
                    createVNode(_component_el_icon, { class: "avatar-uploader-icon" }, {
                      default: withCtx(() => [
                        createVNode(unref(plus_default))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["action", "headers", "method", "data", "drag", "multiple", "auto-upload"])
            ],
            512
            /* NEED_PATCH */
          ), [
            [vShow, !__props.readonly]
          ]),
          createElementVNode(
            "div",
            {
              style: normalizeStyle({ marginTop: __props.UploadDarg ? "50px" : "0" }),
              class: "fileList-box"
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(FileList.value, (item, index) => {
                  return openBlock(), createBlock(
                    _component_el_card,
                    {
                      key: index,
                      class: "file-info",
                      "body-style": { padding: "0px" }
                    },
                    {
                      default: withCtx(() => [
                        withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [
                          item.UploadFaild ? (openBlock(), createElementBlock("div", _hoisted_4, [
                            createVNode(_component_el_icon, {
                              color: "red",
                              size: "30"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(close_bold_default))
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ])) : createCommentVNode("v-if", true)
                        ])), [
                          [_directive_loading, item.Loading]
                        ]),
                        !__props.readonly ? (openBlock(), createElementBlock("div", _hoisted_5, [
                          createVNode(_component_el_icon, {
                            class: "close",
                            color: item.UploadFaild ? "#fff" : "#000",
                            onClick: withModifiers(($event) => deleteFile(index), ["stop"])
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(close_default))
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["color", "onClick"])
                        ])) : createCommentVNode("v-if", true),
                        checkFileType(item.MIME) == "image" ? (openBlock(), createBlock(_component_el_image, {
                          key: 1,
                          class: "imgSize",
                          src: item.url,
                          fit: "fill",
                          onClick: ($event) => showFile(item)
                        }, null, 8, ["src", "onClick"])) : (openBlock(), createElementBlock("div", {
                          key: 2,
                          class: "other-type",
                          onClick: ($event) => showFile(item)
                        }, [
                          createElementVNode(
                            "i",
                            {
                              class: normalizeClass(item.icon),
                              style: { "font-size": "24px", "margin-bottom": "5px" }
                            },
                            [
                              createVNode(_component_el_icon, null, {
                                default: withCtx(() => [
                                  createVNode(unref(document_default))
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ],
                            2
                            /* CLASS */
                          ),
                          createVNode(_component_el_tooltip, {
                            content: item.name,
                            placement: "bottom",
                            effect: "dark"
                          }, {
                            default: withCtx(() => [
                              createElementVNode(
                                "p",
                                _hoisted_7,
                                toDisplayString(item.name),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["content"])
                        ], 8, _hoisted_6))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              __props.readonly && FileList.value.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_8, _hoisted_10)) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          ),
          createVNode(_component_el_dialog, {
            modelValue: unref(dialogImageVisible),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(dialogImageVisible) ? dialogImageVisible.value = $event : dialogImageVisible = $event),
            width: "80vw",
            title: "\u9884\u89C8",
            onClose: closeDialog
          }, {
            default: withCtx(() => [
              createElementVNode(
                "div",
                {
                  style: normalizeStyle({ height: __props.previewHeight })
                },
                [
                  withDirectives(createVNode(_component_WmCropper, {
                    pic: unref(tempPic),
                    onSavePic: aaa
                  }, null, 8, ["pic"]), [
                    [vShow, unref(isShowCropper)]
                  ]),
                  withDirectives(createElementVNode(
                    "div",
                    null,
                    [
                      !props.AutoUpload ? (openBlock(), createBlock(_component_el_button, {
                        key: 0,
                        type: "primary",
                        onClick: _cache[0] || (_cache[0] = ($event) => isRef(isShowCropper) ? isShowCropper.value = true : isShowCropper = true)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u88C1\u526A")
                        ]),
                        _: 1
                        /* STABLE */
                      })) : createCommentVNode("v-if", true),
                      createElementVNode("div", _hoisted_11, [
                        createElementVNode("img", {
                          src: unref(tempPic),
                          class: "preview-img"
                        }, null, 8, _hoisted_12)
                      ])
                    ],
                    512
                    /* NEED_PATCH */
                  ), [
                    [vShow, !unref(isShowCropper)]
                  ])
                ],
                4
                /* STYLE */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        4
        /* STYLE */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=upload.vue2.mjs.map
