import {Children} from "./Children.ts";

export function appendToHead(children: Children): void {
    if (Array.isArray(children)) {
        window.document.head.append(...children);
    } else {
        window.document.head.append(children);
    }
}