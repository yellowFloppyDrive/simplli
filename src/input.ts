import {element} from "./element.ts";
import {Attributes} from "./Attributes.ts";
import {On} from "./On.ts";

export function input(attr: Attributes, on?: On): HTMLInputElement {
    return element("input", attr, undefined, on);
}
