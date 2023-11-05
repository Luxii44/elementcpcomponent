import { isArray, isObject, isString } from '@vue/shared';
export { isArray, isDate, isFunction, isObject, isPromise, isString, isSymbol } from '@vue/shared';
import '../../node_modules/.pnpm/lodash-unified@1.0.3_@types_lodash-es@4.17.6_lodash-es@4.17.21_lodash@4.17.21/node_modules/lodash-unified/import.mjs';
export { isVNode } from 'vue';
import isNil from '../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.mjs';

const isUndefined = (val) => val === void 0;
const isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject(val) && !Object.keys(val).length;
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isPropAbsent = (prop) => {
  return isNil(prop);
};
const isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};

export { isElement, isEmpty, isPropAbsent, isStringNumber, isUndefined };
//# sourceMappingURL=types.mjs.map
