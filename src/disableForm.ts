export function disableForm(form: HTMLFormElement): void {
    form.querySelectorAll("input, button, select, textarea").forEach(element => {
        if (element instanceof HTMLInputElement || element instanceof HTMLButtonElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) {
            element.disabled = true;
        }
    });
}