import {On} from "./On.ts";

export function muteWindow(on: On): void {
    for (const event in on) {
        // @ts-ignore
        window.removeEventListener(event, on[event]);
    }
}