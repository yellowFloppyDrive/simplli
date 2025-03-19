import {element} from "./element.ts";
import {Children} from "./Children.ts";
import {Attributes} from "./Attributes.ts";

export function h1<K extends keyof HTMLElementEventMap>(
    attr: Attributes, nodes: Children, ...on: [K, (ev: HTMLElementEventMap[K]) => any][]
): HTMLHeadingElement {
    return element("h1", attr, nodes, ...on);
}
