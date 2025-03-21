import {addClass} from "./addClass.ts";
import {div} from "./div.ts";

export function enableErrorFor(element: Element, errorMessage?: string): void {
    const id = element.id;

    const label = window.document.querySelector(`[for=${id}]`);
    if (label) {
        addClass(label, "invalid");
    }

    addClass(element, "invalid");

    if (errorMessage) {
        const error = div({"data-errorfor": id}, errorMessage);
        element.after(error);
    }
}