import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";
import {element} from "./element.ts";

export function p(attr?: Attributes, children?: Children, on?: On): HTMLParagraphElement {
    return element("p", attr, children, on);
}