import {element} from "./element.ts";
import {Children} from "./Children.ts";
import {Attributes} from "./Attributes.ts";
import {On} from "./On.ts";

export function span(attr: Attributes, nodes: Children, on: On): HTMLSpanElement {
    return element("span", attr, nodes, on);
}