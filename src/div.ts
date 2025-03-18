import {element} from "./element.ts";
import {Children} from "./Children.ts";
import {Attributes} from "./Attributes.ts";

export function div<K extends keyof HTMLElementEventMap>(
    attr: Attributes, nodes: Children, ...on: [K, EventListenerOrEventListenerObject][]
): HTMLHeadingElement {
    return element("div", attr, nodes, ...on);
}