import {On} from "./On.ts";

export function mute(node: Node, on: On): void {
    for (const event in on) {
        // @ts-ignore
        node.removeEventListener(event, on[event]);
    }
}