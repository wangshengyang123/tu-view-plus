import type { ExtractPropTypes } from 'vue';
import type Badge from './badge.vue';
export declare const badgeTypes: readonly ["default", "primary", "success", "warning", "info", "danger"];
export declare const badgeProps: {
    value: import("@tu-view-plus/utils").EpPropFinalized<(StringConstructor | NumberConstructor)[], unknown, unknown, string, boolean>;
    max: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    isDot: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    hidden: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "default" | "primary" | "success" | "warning" | "info" | "danger", unknown, string, boolean>;
    color: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    text: {
        readonly type: import("vue").PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    numberStyle: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export declare type BadgeProps = ExtractPropTypes<typeof badgeProps>;
export declare type BadgeInstance = InstanceType<typeof Badge>;
