const content = document.querySelector("#content");

export function clearPage() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}