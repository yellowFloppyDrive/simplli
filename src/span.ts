import {element} from "./element.ts";
import {Component} from "./Component.ts";

export const span: Component<HTMLSpanElement> = (attr, nodes, on) => {
    return element("span", attr, nodes, on);
}