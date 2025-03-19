import {element} from "./element.ts";
import {Children} from "./Children.ts";
import {Attributes} from "./Attributes.ts";
import {On} from "./On.ts";

export function div(attr: Attributes, nodes: Children, on: On): HTMLHeadingElement {
    return element("div", attr, nodes, on);
}