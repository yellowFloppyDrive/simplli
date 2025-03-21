import {Attributes} from "./Attributes.ts";
import {element} from "./element.ts";

export function link(attr?: Attributes): HTMLLinkElement {
    return element("link", attr);
}