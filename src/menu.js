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

let lasagna = new menuItem("Lasagna", "Classic Dish from Italy", "135");
let hamburger = new menuItem("Hamburger", "It doesn't get much easier", "110");




lasagna.addItem(lasagna);
hamburger.addItem(hamburger);

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