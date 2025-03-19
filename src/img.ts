import {element} from "./element.ts";
import {Attributes} from "./Attributes.ts";

export function img<K extends keyof HTMLElementEventMap>(
    attr: Attributes, ...on: [K, (ev: HTMLElementEventMap[K]) => any][]
): HTMLHeadingElement {
    return element("img", attr, [], ...on);
}
