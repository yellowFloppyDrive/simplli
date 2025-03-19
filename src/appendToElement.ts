import {Children} from "./Children.ts";

export function appendToElement(element: Element, children: Children): void {
    if (Array.isArray(children)) {
        element.append(...children);
    } else {
        element.append(children);
    }
}