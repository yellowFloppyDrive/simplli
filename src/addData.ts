export function addData(element: HTMLOrSVGElement, name: string, data: string): void {
    element.dataset[name] = data;
}