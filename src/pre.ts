import {element} from "./element.ts";
import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";

export function pre(attr: Attributes, children?: Children, on?: On): HTMLPreElement {
    return element("pre", attr, children, on);
}
