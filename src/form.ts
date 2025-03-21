import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";
import {element} from "./element.ts";

export function form(attr?: Attributes, children?: Children, on?: On): HTMLFormElement {
    return element("form", attr, children, on);
}