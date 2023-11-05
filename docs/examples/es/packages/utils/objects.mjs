import '../../node_modules/.pnpm/lodash-unified@1.0.3_@types_lodash-es@4.17.6_lodash-es@4.17.21_lodash@4.17.21/node_modules/lodash-unified/import.mjs';
export { hasOwn } from '@vue/shared';
import get from '../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get.mjs';
import set from '../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set.mjs';

const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val) {
      set(obj, path, val);
    }
  };
};

export { getProp };
//# sourceMappingURL=objects.mjs.map
