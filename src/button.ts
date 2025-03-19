import {element} from "./element.ts";
import {Component} from "./Component.ts";

export const button: Component<HTMLButtonElement> = (attr, nodes, on) => {
    return element("button", attr, nodes, on);
}
