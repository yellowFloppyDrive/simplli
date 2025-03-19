import {element} from "./element.ts";
import {Children} from "./Children.ts";
import {Attributes} from "./Attributes.ts";
import {On} from "./On.ts";

export function button(attr: Attributes, nodes: Children, on: On): HTMLButtonElement {
    return element("button", attr, nodes, on);
}
