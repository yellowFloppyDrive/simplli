import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";
import {elementSvg} from "./elementSvg.ts";

export function path(attr?: Attributes, children?: Children, on?: On): SVGPathElement {
    return elementSvg("path", attr, children, on);
}
