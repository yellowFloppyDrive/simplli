import {element} from "./element.ts";
import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";

export function div(attr: Attributes, nodes?: Children, on?: On): HTMLDivElement {
    return element("div", attr, nodes, on);
}