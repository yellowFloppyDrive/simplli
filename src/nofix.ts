export function nofix(message: string): Error {
    alert(message);
    return new Error(message);
}