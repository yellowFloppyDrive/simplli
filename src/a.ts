import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";
import {element} from "./element.ts";

export function a(attr?: Attributes, children?: Children, on?: On): HTMLAnchorElement {
    return element("a", attr, children, on);
}