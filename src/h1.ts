import {element} from "./element.ts";
import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";

export function h1(attr?: Attributes, children?: Children, on?: On): HTMLHeadingElement {
    return element("h1", attr, children, on);
}
