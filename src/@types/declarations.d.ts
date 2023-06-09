declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare const IS_PROD: boolean;
declare const IS_DEV: boolean;
declare const IS_DEV_SERVER: boolean;
