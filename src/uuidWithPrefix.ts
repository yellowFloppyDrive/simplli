import {uuid} from "./uuid.ts";

export function uuidWithPrefix(prefix: string): string {
    return prefix + uuid();
}