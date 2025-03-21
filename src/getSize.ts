import {appendToBody} from "./appendToBody.ts";
import {appendToElement} from "./appendToElement.ts";
import {isElementInDom} from "./isElementInDom.ts";

export function getSize(element: Element): [number, number] {
    const parentNode = element.parentElement;

    if (!isElementInDom(element)) {
        appendToBody(element);
    }

    const rect = element.getBoundingClientRect();
    const size: [number, number] = [rect.width, rect.height];

    if (parentNode) {
        appendToElement(parentNode, element);
    }

    return size;
}

