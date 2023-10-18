import { InjectionKey } from 'vue';
import type { Slots } from 'vue';
export declare const tabsPosition: readonly ["left", "right", "top", "bottom"];
export declare type TabsPosition = (typeof tabsPosition)[number];
export declare const tabsType: readonly ["line", "card-down", "card-up", "slider", "text", "button", "button-round"];
export declare type TabsType = (typeof tabsType)[number];
export declare const tabDirection: readonly ["horizontal", "vertical"];
export declare type TabDirection = (typeof tabDirection)[number];
export declare const tabTriggerEvent: readonly ["click", "hover"];
export declare type TabTriggerEvent = (typeof tabTriggerEvent)[number];
export interface TabData {
    key: string | number;
    title?: string;
    disabled?: boolean;
    closable?: boolean;
    slots: Slots;
}
export interface TabsContext {
    lazyLoad: boolean;
    destroyOnHide: boolean;
    activeKey: string | number;
    addItem: (id: number, data: TabData) => void;
    removeItem: (id: number) => void;
    trigger: TabTriggerEvent;
}
export declare const tabsInjectionKey: InjectionKey<TabsContext>;
