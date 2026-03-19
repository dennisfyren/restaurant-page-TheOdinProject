import headerImg from "./assets/header.jpg";
import "./menu.js";

import { showHome } from "./home.js";
import { showMenu } from "./menu.js";


const nav = document.querySelector("#nav");
const content = document.querySelector("#content");
const div = document.createElement("div");
const buttonLabels = ["Home", "Menu", "About"];

function createElements(){
    for (let i = 1; i < buttonLabels.length +1; i++){
        const button = document.createElement("button");
        let createdButton = nav.appendChild(button);
        createdButton.id = buttonLabels[i - 1].toLowerCase();
        createdButton.textContent = buttonLabels[i - 1];
    }
    const img = document.createElement("img");
    img.src = headerImg;
    document.body.appendChild(img);

    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    const contentDiv = content.appendChild(div);
    const title = contentDiv.appendChild(h1);
    title.textContent = "This restaurant is awesome!";
    const text = contentDiv.appendChild(p);
    text.textContent = "This restaurant is really that good, you should probably come in for a bite!";
};

createElements();
showHome();

function test(){
    console.log("Testing");
}

const home = document.querySelector("#home");
home.addEventListener("click", showHome);

const menu = document.querySelector("#menu");
menu.addEventListener("click", showMenu);

const about = document.querySelector("#about");
about.addEventListener("click", test);
console.log(about);
