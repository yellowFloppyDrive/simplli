import {On} from "./On.ts";

export function listen(element: Element, on: On): void {
    for (const event in on) {
        // @ts-ignore
        element.addEventListener(event, on[event]);
    }
}