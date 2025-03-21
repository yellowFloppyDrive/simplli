import {element} from "./element.ts";
import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";

export function label(attr: Attributes, nodes?: Children, on?: On): HTMLLabelElement {
    return element("label", attr, nodes, on);
}
