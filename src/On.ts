export type On = {
    [key in (keyof HTMLElementEventMap)]: undefined | ((ev: HTMLElementEventMap[key]) => any)
};