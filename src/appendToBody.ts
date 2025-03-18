import {Children} from "./Children.ts";

export function appendToBody(children: Children): void {
    if (!Array.isArray(children)) {
        children = [children];
    }

    window.document.body.append(...children);
}