import {Attributes} from "./Attributes.ts";

export function setAttributes(x: Element, attr?: Attributes): void {
    for (const a in attr) {
        x.setAttribute(a, attr[a]);
    }
}