import {Attributes} from "./Attributes.ts";
import {On} from "./On.ts";
import {element} from "./element.ts";

export function hr(attr?: Attributes, on?: On): HTMLHRElement {
    return element("hr", attr, [], on);
}