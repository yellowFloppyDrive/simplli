export function setStyle<T extends keyof CSSStyleDeclaration>(element: HTMLElement|SVGSVGElement, name: T, value: CSSStyleDeclaration[T]): void {
    element.style[name] = value;
}