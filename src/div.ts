import {element} from "./element.ts";
import {Component} from "./Component.ts";

export const div: Component<HTMLHeadingElement> = (attr, nodes, on) => {
    return element("div", attr, nodes, on);
}