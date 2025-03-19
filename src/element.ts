import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";

export function element<T extends keyof HTMLElementTagNameMap, K extends keyof HTMLElementEventMap>(
    tagName: T, attr: Attributes, nodes: Children, ...on: [K, (ev: HTMLElementEventMap[K]) => any][]
): HTMLElementTagNameMap[T] {
    const x = document.createElement(tagName);

    for (const a in attr) {
        x.setAttribute(a, attr[a]);
    }

    if (Array.isArray(nodes)) {
        x.append(...nodes);
    } else {
        x.append(nodes);
    }

    for (const [event, listener] of on) {
        x.addEventListener(event, listener as EventListenerOrEventListenerObject);
    }

    return x;
}
