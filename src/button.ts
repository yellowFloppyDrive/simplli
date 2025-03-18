import {element} from "./element.ts";
import {Children} from "./Children.ts";
import {Attributes} from "./Attributes.ts";

export function button<K extends keyof HTMLElementEventMap>(
    attr: Attributes, nodes: Children, ...on: [K, EventListenerOrEventListenerObject][]
): HTMLButtonElement {
    return element("button", attr, nodes, ...on);
}
