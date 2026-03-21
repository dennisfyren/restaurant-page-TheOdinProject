export const menuList = [];

class menuItem{
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
    addItem(item){
        menuList.push(item);
    }
}

let lasagna = new menuItem("Lasagna", "Classic Dish from Italy", "135 :-");
let hamburger = new menuItem("Hamburger", "It doesn't get much easier", "110 :-");
let schnitzel = new menuItem("Schnitzel", "German classic", "125 :-");
let pastabolognese = new menuItem("Pasta Bolognese", "Like carbonara, but better", "108 :-");
let pastacarbonara = new menuItem("Pasta Carbonara", "Like Bolognese, but better", "108 :-");




lasagna.addItem(lasagna);
hamburger.addItem(hamburger);
schnitzel.addItem(schnitzel);
pastabolognese.addItem(pastabolognese);
pastacarbonara.addItem(pastacarbonara);

export const showMenu = function showMenu(){
    const box = document.querySelector("#box");
    while (box.hasChildNodes()) {
        box.removeChild(box.firstChild);
    }
    menuList.forEach((dish) => {
        
        const div = document.createElement("div");
        const menuBox = box.appendChild(div);

        for (const [key, value] of Object.entries(dish)){
            const p = document.createElement("p");
            const dishName = menuBox.appendChild(p);
            dishName.textContent = value;
        }
    });
}