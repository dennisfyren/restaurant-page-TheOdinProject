export const showHome = function showHome(){
    const box = document.querySelector("#box");
    const p = document.createElement("p");
    while (box.hasChildNodes()) {
        box.removeChild(box.firstChild);
    }

    for (let i = 0; i < 3; i++){
        const div = document.createElement("div");
        const p = document.createElement("p");
        const item = box.appendChild(div);
        // const itemText = item.appendChild(p);
        item.id = "text-" + i;
    }
    const ul = document.createElement("ul");

    const text0 = document.querySelector("#text-0");
    const header = text0.appendChild(p);
    header.textContent = "Classic Dishes; Classic Prices!";

    const text1 = document.querySelector("#text-1");
    let openTimes = text1.appendChild(ul);
    
    function setOpenHours(){
        const p = document.createElement("p");
        const openHours = openTimes.appendChild(p);
        openHours.textContent = "Open Hours"
    }
    setOpenHours();

    for (let i = 1; i < 8; i++){
        const li = document.createElement("li");
        let days = openTimes.appendChild(li);
        days.id = "day-" + i;
    }

    const monday = document.querySelector("#day-1");
    const tuesday = document.querySelector("#day-2");
    const wednesday = document.querySelector("#day-3");
    const thursday = document.querySelector("#day-4");
    const friday = document.querySelector("#day-5");
    const saturday = document.querySelector("#day-6");
    const sunday = document.querySelector("#day-7");
    
    monday.textContent = "Monday: 13.00 - 21.00";
    tuesday.textContent = "Tuesday: 15.00 - 21.00";
    wednesday.textContent = "Wednesday: 13.00 - 21.00";
    thursday.textContent = "Thursday: 11.00 - 19.00";
    friday.textContent = "Friday: 15.00 - 01.00";
    saturday.textContent = "Saturday: 16.00 - 02.00";
    sunday.textContent = "Sunday: 11.00 - 16.00";

    function text2(){
        const p = document.createElement("p");
        const text = document.querySelector("#text-2");
        let content = text.appendChild(p);
        content.textContent = "012 345 67 89";
        content.style = "font-weight: 500; margin-top: 0;"
    }
    text2();
}