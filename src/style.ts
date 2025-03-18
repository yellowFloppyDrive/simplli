export function style(id: string, css: string): HTMLStyleElement {
    const style = window.document.createElement("style");
    style.innerText = css;
    style.id = id;
    return style;
}