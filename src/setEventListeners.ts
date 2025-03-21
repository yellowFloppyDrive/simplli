import {On} from "./On.ts";

export function setEventListeners(x: Element, on?: On): void {
    for (const event in on) {
        // @ts-ignore
        x.addEventListener(event, on[event]);
    }
}