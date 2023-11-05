import { defineComponent, ref, reactive, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createTextVNode, unref } from 'vue';
import Sa, { cropper as S } from '../../../../node_modules/.pnpm/vue-picture-cropper@0.6.1_vue@3.2.47/node_modules/vue-picture-cropper/lib/index.mjs';

const _hoisted_1 = { class: "cropper-box" };
const _hoisted_2 = { class: "button-box" };
const _hoisted_3 = { class: "col" };
const _hoisted_4 = { class: "border" };
const _hoisted_5 = ["src"];
const __default__ = defineComponent({
  name: "WmCropper"
});
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    pic: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary"
    },
    boxStyle: {
      type: Object,
      default: () => {
        return {
          width: "100%",
          height: "100%",
          backgroundColor: "#f8f8f8",
          margin: "auto"
        };
      }
    },
    options: {
      type: Object,
      default: () => {
        return {
          viewMode: 1,
          dragMode: "crop"
        };
      }
    }
  },
  emits: ["savePic"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let Pic = ref(props.pic);
    let TempPic = ref(props.pic);
    const cropend = () => {
      TempPic.value = S.getDataURL();
    };
    const zoom = () => {
      TempPic.value = S.getDataURL();
    };
    const rotateLeft = () => {
      S.rotate(-90);
    };
    const rotateRight = () => {
      S.rotate(90);
    };
    const zoomAdd = () => {
      S.zoom(0.1);
    };
    const zoomSubtract = () => {
      S.zoom(-0.1);
    };
    const clear = () => {
      S.clear();
    };
    const reset = () => {
      S.reset();
    };
    let result = reactive({
      dataURL: "",
      blobURL: ""
    });
    const savePic = async () => {
      const base64 = S.getDataURL();
      const blob = await S.getBlob();
      const file = await S.getFile({
        fileName: "cropper"
      });
      console.log({ base64, blob, file });
      result.dataURL = base64;
      try {
        if (blob != null) {
          result.blobURL = URL.createObjectURL(blob);
        }
      } catch (e) {
        result.blobURL = "";
      }
      console.log(result);
      emits("savePic", result);
    };
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_col = resolveComponent("el-col");
      const _component_el_row = resolveComponent("el-row");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(_component_el_button, {
            type: props.type,
            onClick: rotateLeft
          }, {
            default: withCtx(() => [
              createTextVNode("\u9006\u65F6\u948890")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type"]),
          createVNode(_component_el_button, {
            type: props.type,
            onClick: rotateRight
          }, {
            default: withCtx(() => [
              createTextVNode("\u987A\u65F6\u948890")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type"]),
          createVNode(_component_el_button, {
            type: props.type,
            onClick: zoomAdd
          }, {
            default: withCtx(() => [
              createTextVNode("+")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type"]),
          createVNode(_component_el_button, {
            type: props.type,
            onClick: zoomSubtract
          }, {
            default: withCtx(() => [
              createTextVNode("-")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type"]),
          createVNode(_component_el_button, {
            type: props.type,
            onClick: clear
          }, {
            default: withCtx(() => [
              createTextVNode("\u6E05\u9664")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type"]),
          createVNode(_component_el_button, {
            type: props.type,
            onClick: reset
          }, {
            default: withCtx(() => [
              createTextVNode("\u91CD\u7F6E")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type"]),
          createVNode(_component_el_button, {
            type: props.type,
            onClick: savePic
          }, {
            default: withCtx(() => [
              createTextVNode("\u4FDD\u5B58")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type"])
        ]),
        createVNode(_component_el_row, {
          gutter: "20",
          class: "main"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_col, { span: 12 }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_3, [
                  createVNode(unref(Sa), {
                    boxStyle: props.boxStyle,
                    img: unref(Pic),
                    options: props.options,
                    onCropend: cropend,
                    onZoom: zoom
                  }, null, 8, ["boxStyle", "img", "options"])
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_el_col, {
              span: 12,
              class: "col"
            }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_4, [
                  createElementVNode("img", {
                    src: unref(TempPic),
                    class: "preview"
                  }, null, 8, _hoisted_5)
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=cropper.vue2.mjs.map
