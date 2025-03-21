import {removeClass} from "./removeClass.ts";

export function enableForm(form: HTMLFormElement): void {
    form.querySelectorAll("input, button, select, textarea").forEach(element => {
        if (element instanceof HTMLInputElement || element instanceof HTMLButtonElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) {
            element.disabled = false;
        }
    });

    removeClass(form, "disabled");
}