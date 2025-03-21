import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";
import {setAttributes} from "./setAttributes.ts";
import {appendChildren} from "./appendChildren.ts";
import {setEventListeners} from "./setEventListeners.ts";

export function elementSvg<T extends keyof SVGElementTagNameMap>(
    tagName: T, attr?: Attributes, children?: Children, on?: On
): SVGElementTagNameMap[T] {
    const x = window.document.createElementNS('http://www.w3.org/2000/svg', tagName)

    setAttributes(x, attr);

    appendChildren(x, children);

    setEventListeners(x, on);

    return x;
}