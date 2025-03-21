import {removeClass} from "./removeClass.ts";
import {removeElement} from "./removeElement.ts";

export function disableErrorFor(element: Element): void {
    const id = element.id;

    const label = window.document.querySelector(`[for=${id}]`);
    if (label) {
        removeClass(label, "invalid");
    }

    removeClass(element, "invalid");

    window.document.querySelectorAll(`[data-errorfor="${id}"]`).forEach(error => {
        removeElement(error);
    });
}