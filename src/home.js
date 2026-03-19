export const showHome = function showHome(){
    const box = document.querySelector("#box");
    while (box.hasChildNodes()) {
        box.removeChild(box.firstChild);
    }
    const div = document.createElement("div");
    const p = document.createElement("p");
    const item = box.appendChild(div);
    const itemText = item.appendChild(p);
    itemText.textContent = "Some filler text to get something here";
}