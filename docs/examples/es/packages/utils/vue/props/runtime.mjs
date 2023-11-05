import { warn } from 'vue';
import '../../../../node_modules/.pnpm/lodash-unified@1.0.3_@types_lodash-es@4.17.6_lodash-es@4.17.21_lodash@4.17.21/node_modules/lodash-unified/import.mjs';
import '../../types.mjs';
import '../../objects.mjs';
import { isObject, hasOwn } from '@vue/shared';
import fromPairs from '../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/fromPairs.mjs';

const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(
        `Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(
          val
        )}.`
      );
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(
  Object.entries(props).map(([key, option]) => [
    key,
    buildProp(option, key)
  ])
);

export { buildProp, buildProps, definePropType, epPropKey, isEpProp };
//# sourceMappingURL=runtime.mjs.map
