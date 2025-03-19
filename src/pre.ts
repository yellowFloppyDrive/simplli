import {element} from "./element.ts";
import {Component} from "./Component.ts";

export const pre: Component<HTMLPreElement> = (attr, nodes, on) => {
    return element("pre", attr, nodes, on);
}
