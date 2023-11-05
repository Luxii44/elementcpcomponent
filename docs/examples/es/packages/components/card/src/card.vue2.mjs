import { createElementVNode, defineComponent, ref, resolveComponent, openBlock, createElementBlock, toDisplayString, unref, createVNode, withCtx, createTextVNode, Fragment, renderList } from 'vue';

const _hoisted_1 = { class: "card-header" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode(
  "span",
  null,
  "Card name",
  -1
  /* HOISTED */
);
const __default__ = defineComponent({
  name: "WmCard"
});
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    let title = ref("\u5361\u7247");
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_card = resolveComponent("el-card");
      return openBlock(), createElementBlock("div", null, [
        createElementVNode(
          "p",
          null,
          toDisplayString(unref(title)),
          1
          /* TEXT */
        ),
        createVNode(_component_el_card, { class: "box-card" }, {
          header: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
              _hoisted_2,
              createVNode(_component_el_button, {
                class: "button",
                text: ""
              }, {
                default: withCtx(() => [
                  createTextVNode("Operation button")
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          default: withCtx(() => [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(4, (o) => {
                return createElementVNode(
                  "div",
                  {
                    key: o,
                    class: "text item"
                  },
                  toDisplayString("List item " + o),
                  1
                  /* TEXT */
                );
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=card.vue2.mjs.map
