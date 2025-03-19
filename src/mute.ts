export function mute<K extends keyof ElementEventMap>(node: Node, type: K, listener: (ev: ElementEventMap[K]) => any): void {
    node.removeEventListener(type, listener);
}