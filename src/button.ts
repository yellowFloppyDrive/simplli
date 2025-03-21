import {element} from "./element.ts";
import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";

export function button(attr: Attributes, children?: Children, on?: On): HTMLButtonElement {
    return element("button", attr, children, on);
}
