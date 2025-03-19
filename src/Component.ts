import {Attributes} from "./Attributes.ts";
import {Children} from "./Children.ts";
import {On} from "./On.ts";

export type Component<T> = (attr: Attributes, nodes: Children, on?: On) => T;