import {element} from "./element.ts";
import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";

export function span(attr?: Attributes, children?: Children, on?: On): HTMLSpanElement {
    return element("span", attr, children, on);
}