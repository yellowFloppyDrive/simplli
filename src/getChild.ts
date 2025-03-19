import {nofix} from "./nofix.ts";

export function getChild<T extends Element>(element: Element, selector: string, errorMessage: string): T {
    const child = element.querySelector(selector);

    if (child) {
        return child as T;
    }

    throw nofix(errorMessage);
}
