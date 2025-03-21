export function clearStyle<T extends keyof CSSStyleDeclaration>(element: HTMLElement|SVGSVGElement, name: T): void {
    // @ts-ignore
    element.style[name] = "";
}