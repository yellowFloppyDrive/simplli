import {appendToBody} from "./appendToBody.ts";
import {appendToElement} from "./appendToElement.ts";
import {isElementInDom} from "./isElementInDom.ts";
import {removeElement} from "./removeElement.ts";

export function getSize(element: Element): [number, number] {
    const parentNode = element.parentElement;

    let needsRemoval = false;

    if (!isElementInDom(element)) {
        appendToBody(element);
        needsRemoval = true;
    }

    const rect = element.getBoundingClientRect();
    const size: [number, number] = [rect.width, rect.height];

    if (needsRemoval) {
        if (parentNode) {
            appendToElement(parentNode, element);
        } else {
            removeElement(element);
        }
    }

    return size;
}

