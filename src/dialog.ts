import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";
import {element} from "./element.ts";

export function dialog(attr?: Attributes, children?: Children, on?: On): HTMLDialogElement {
    return element("dialog", attr, children, on);
}