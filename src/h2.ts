import {element} from "./element.ts";
import {Component} from "./Component.ts";

export const h2: Component<HTMLHeadingElement> = (attr, nodes, on) => {
    return element("h2", attr, nodes, on);
}