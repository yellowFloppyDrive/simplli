import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";

export function element<T extends keyof HTMLElementTagNameMap>(
    tagName: T, attr: Attributes, nodes: Children, on: On
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

    for (const event in on) {
        // @ts-ignore
        x.addEventListener(event, on[event]);
    }

    return x;
}
