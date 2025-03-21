import {element} from "./element.ts";
import {Attributes} from "./Attributes.ts";
import {On} from "./On.ts";

export function img(attr?: Attributes, on?: On): HTMLImageElement {
    return element("img", attr, [], on);
}
