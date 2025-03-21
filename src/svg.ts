import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";
import {elementSvg} from "./elementSvg.ts";

export function svg(attr: Attributes, children?: Children, on?: On): SVGSVGElement {
    return elementSvg("svg", attr, children, on);
}
