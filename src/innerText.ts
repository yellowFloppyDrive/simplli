export function innerText(element: HTMLElement, text?: string): string {
    if (text === undefined) {
        return element.innerText;
    }

    element.innerText = text;

    return text;
}