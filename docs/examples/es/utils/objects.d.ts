import type { Arrayable } from '.';
export { hasOwn } from '@vue/shared';
export declare const getProp: <T = any>(obj: Record<string, any>, path: Arrayable<string>, defaultValue?: any) => {
    value: T;
};
