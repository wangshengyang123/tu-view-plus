declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activeKey: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly defaultActiveKey: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown, "top", boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | (() => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | ((new (...args: any[]) => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | (() => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round"))[], unknown, unknown, "line", boolean>;
    readonly direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, "horizontal", boolean>;
    readonly editable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showAddButton: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly destroyOnHide: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly lazyLoad: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly justify: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly animation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly headerPadding: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly autoSwitch: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly hideContent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown, "click", boolean>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (key: string | number) => boolean;
    'update:activeKey': (key: string | number) => boolean;
    change: (key: string | number) => boolean;
    tabClick: (key: string | number, ev: Event) => boolean;
    add: (ev: Event) => boolean;
    delete: (key: string | number, ev: Event) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activeKey: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly defaultActiveKey: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown, "top", boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | (() => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | ((new (...args: any[]) => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | (() => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round"))[], unknown, unknown, "line", boolean>;
    readonly direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, "horizontal", boolean>;
    readonly editable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showAddButton: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly destroyOnHide: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly lazyLoad: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly justify: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly animation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly headerPadding: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly autoSwitch: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly hideContent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown, "click", boolean>;
}>> & {
    onChange?: ((key: string | number) => any) | undefined;
    "onUpdate:modelValue"?: ((key: string | number) => any) | undefined;
    onDelete?: ((key: string | number, ev: Event) => any) | undefined;
    onAdd?: ((ev: Event) => any) | undefined;
    "onUpdate:activeKey"?: ((key: string | number) => any) | undefined;
    onTabClick?: ((key: string | number, ev: Event) => any) | undefined;
}, {
    readonly direction: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
    readonly position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown>;
    readonly animation: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly justify: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | (() => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | ((new (...args: any[]) => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round") | (() => "button" | "line" | "text" | "card-down" | "card-up" | "slider-down" | "slider-up" | "button-round"))[], unknown, unknown>;
    readonly trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown>;
    readonly destroyOnHide: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly lazyLoad: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly activeKey: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly showAddButton: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly editable: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly headerPadding: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly defaultActiveKey: import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    readonly autoSwitch: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly hideContent: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}, {}>;
export default _default;
