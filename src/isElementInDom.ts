export function isElementInDom(element: Element, parent?: HTMLElement | SVGSVGElement): boolean {
    if (parent) {
        return parent.contains(element);
    }

    return window.document.contains(element);
}