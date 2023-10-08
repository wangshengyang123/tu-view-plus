import { CSSProperties } from 'vue';
export declare const gap = 8;
export declare const getDiffRect: (node: HTMLElement, parentNode: HTMLElement) => {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
export declare const getTabListStyle: ({ direction, type, offset }: {
    direction: string;
    type: string;
    offset: number;
}) => CSSProperties;
