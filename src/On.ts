export type On = {
    [key in (keyof HTMLElementEventMap)]?: ((ev: HTMLElementEventMap[key]) => any)
};