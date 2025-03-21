import {nofix} from "./nofix.js";

export function debounce<T>(fn: T, timeout: number): T {
    if (typeof fn === "function") {
        let timeoutId: undefined | number;

        // @ts-ignore
        return (...args: unknown[]) => {
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }

            timeoutId = window.setTimeout(() => fn(...args), timeout);
        };
    }

    throw nofix("debounce: fn must be a function");
}