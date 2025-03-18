import {element} from "./element.ts";
import {Children} from "./Children.ts";
import {Attributes} from "./Attributes.ts";

export function span<K extends keyof HTMLElementEventMap>(
    attr: Attributes, nodes: Children, ...on: [K, EventListenerOrEventListenerObject][]
): HTMLSpanElement {
    return element("span", attr, nodes, ...on);
}