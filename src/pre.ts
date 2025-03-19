import {element} from "./element.ts";
import {Children} from "./Children.ts";
import {Attributes} from "./Attributes.ts";

export function pre<K extends keyof HTMLElementEventMap>(
    attr: Attributes, nodes: Children, ...on: [K, (ev: HTMLElementEventMap[K]) => any][]
): HTMLPreElement {
    return element("pre", attr, nodes, ...on);
}
