import { TagData } from './interface';
import type { ExtractPropTypes, PropType } from 'vue';
import type InputTag from './input-tag.vue';
export declare const inputTagProps: {
    readonly modelValue: {
        readonly type: PropType<(string | number | TagData)[]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly defaultValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => (string | number | TagData)[]) | (() => (string | number | TagData)[]) | ((new (...args: any[]) => (string | number | TagData)[]) | (() => (string | number | TagData)[]))[], unknown, unknown, () => never[], boolean>;
    readonly inputValue: StringConstructor;
    readonly defaultInputValue: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly placeholder: StringConstructor;
    readonly disabled: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly error: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly readonly: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly allowClear: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly maxTagCount: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 0, boolean>;
    readonly retainInputValue: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | ((new (...args: any[]) => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }) | (() => boolean | {
        create?: boolean | undefined;
        blur?: boolean | undefined;
    }))[], unknown, unknown, false, boolean>;
    readonly formatTag: {
        readonly type: PropType<(data: TagData) => string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly uniqueValue: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly fieldNames: {
        readonly type: PropType<import("@tu-view-plus/utils").FieldString<TagData>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly baseCls: StringConstructor;
    readonly focused: BooleanConstructor;
    readonly disabledInput: BooleanConstructor;
    readonly uninjectFormItemContext: BooleanConstructor;
};
export declare const inputTagEmits: {
    'update:modelValue': (value: (string | number | TagData)[]) => boolean;
    'update:inputValue': (inputValue: string) => boolean;
    change: (value: (string | number | TagData)[], ev: Event) => boolean;
    inputValueChange: (inputValue: string, ev: Event) => boolean;
    pressEnter: (inputValue: string, ev: KeyboardEvent) => boolean;
    remove: (removed: string | number, ev: Event) => boolean;
    clear: (ev: MouseEvent) => boolean;
    focus: (ev: FocusEvent) => boolean;
    blur: (ev: FocusEvent) => boolean;
};
export type InputTagProps = ExtractPropTypes<typeof inputTagProps>;
export type InputTagInstance = InstanceType<typeof InputTag>;
export type InputTagEmits = typeof inputTagEmits;
