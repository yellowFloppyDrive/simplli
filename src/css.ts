import {appendToHead} from "./appendToHead.ts";
import {style} from "./style.ts";

export function css(id: string, css: string): void {
    if (document.getElementById(id)) {
        return;
    }

    appendToHead(style(id, css));
}