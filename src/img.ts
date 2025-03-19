import {element} from "./element.ts";
import {Component} from "./Component.ts";

export const img: Component<HTMLImageElement> = (attr, nodes, on) => {
    return element("img", attr, nodes, on);
}
