import {Children} from "./Children.ts";

export function replaceChildren(element: Element, newChildren: Children): void {
    if (Array.isArray(newChildren)) {
        element.replaceChildren(...newChildren);
    } else {
        element.replaceChildren(newChildren);
    }
}