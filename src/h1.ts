import {element} from "./element.ts";
import {Component} from "./Component.ts";

export const h1: Component<HTMLHeadingElement> = (attr, nodes, on) => {
    return element("h1", attr, nodes, on);
}
