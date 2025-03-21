export function removeData(element: HTMLOrSVGElement, name: string): void {
    delete element.dataset[name];
}