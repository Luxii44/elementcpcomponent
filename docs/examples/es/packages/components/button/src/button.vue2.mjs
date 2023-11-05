import { defineComponent, ref, openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';

const __default__ = defineComponent({
  name: "WmButton"
});
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props, { expose }) {
    const _ref = ref();
    expose({
      ref: _ref
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "button",
        {
          ref_key: "_ref",
          ref: _ref,
          class: normalizeClass(["wmbutton", "wmbutton--"]),
          type: "button"
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        512
        /* NEED_PATCH */
      );
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=button.vue2.mjs.map
