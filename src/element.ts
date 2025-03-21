import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";
import {setAttributes} from "./setAttributes.ts";
import {appendChildren} from "./appendChildren.ts";
import {setEventListeners} from "./setEventListeners.ts";

export function element<T extends keyof HTMLElementTagNameMap>(
    tagName: T, attr?: Attributes, children?: Children, on?: On
): HTMLElementTagNameMap[T] {
    const x = document.createElement(tagName);

    setAttributes(x, attr);

    appendChildren(x, children);

    setEventListeners(x, on);

    return x;
}
