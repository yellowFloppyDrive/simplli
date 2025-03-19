import {element} from "./element.ts";
import {Children} from "./Children.ts";
import {Attributes} from "./Attributes.ts";
import {On} from "./On.ts";

export function pre(attr: Attributes, nodes: Children, on: On): HTMLPreElement {
    return element("pre", attr, nodes, on);
}
