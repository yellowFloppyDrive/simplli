import {On} from "./On.ts";

export function listenWindow(on: On): void {
    for (const event in on) {
        // @ts-ignore
        window.addEventListener(event, on[event]);
    }
}