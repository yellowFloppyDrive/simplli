import {On} from "./On.ts";
import {listen} from "./listen.ts";

export function listenChild(root: Element, selector: string, on: On): void {
    root.querySelectorAll(selector).forEach(child => {
        listen(child, on);
    })
}