import { nofix } from "./nofix";

export function throttle<T>(fn: T, timeout: number): T {
    if (typeof fn === "function") {
        let lastTimestamp = 0;
        let latestArgs: unknown[] = [];
        let timeoutId: undefined | number;

        const execute = () => fn(...latestArgs);

        // @ts-ignore
        return (...args: unknown[]) => {
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }

            latestArgs = args;
            const timestamp = Date.now();

            if (timestamp - lastTimestamp >= timeout) {
                lastTimestamp = timestamp;
                execute();
            }

            timeoutId = window.setTimeout(execute, timeout);
        };
    }

    throw nofix("throttle: fn must be a function");
}