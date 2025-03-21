import {Children} from "./Children.ts";

export function appendChildren(x: Element, children?: Children): void {
    if (Array.isArray(children)) {
        x.append(...children);
    } else if (children) {
        x.append(children);
    }
}