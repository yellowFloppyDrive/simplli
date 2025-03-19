import {element} from "./element.ts";
import {Children} from "./Children.ts";
import {Attributes} from "./Attributes.ts";
import {On} from "./On.ts";

export function h2(attr: Attributes, nodes: Children, on: On): HTMLHeadingElement {
    return element("h2", attr, nodes, on);
}