import { clearPage } from "./pageClear.js";
import bbqImg from "./images/logo.png";
import steakImg from "./images/steak.jpg";
import kebabImg from "./images/kebab.jpg";
import friesImg from "./images/fries.jpg";
const content = document.querySelector("#content");


export const menuBuilder = function() {

    clearPage();
    
    const logoImage = document.createElement("img");
    logoImage.src = bbqImg;
    content.appendChild(logoImage);

    const headline = document.createElement("h1");
    headline.textContent = "Menu"
    content.appendChild(headline);

    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");
    content.appendChild(menuItems);

    const steakItem = document.createElement("div");
    steakItem.classList.add("menu-item");
    menuItems.appendChild(steakItem);

    const steakImage = document.createElement("img");
    steakImage.src = steakImg;
    steakItem.appendChild(steakImage);

    const steakTitle = document.createElement("h1");
    steakTitle.textContent = "Steak";
    steakItem.appendChild(steakTitle);

    const steakDescription = document.createElement("p");
    steakDescription.textContent = "Juicy steak from Italian cows made on the finest of grills with marinated in the most delicious of flavors ready to be devoured.";
    steakItem.appendChild(steakDescription);

    const kebabItem = document.createElement("div");
    kebabItem.classList.add("menu-item");
    menuItems.appendChild(kebabItem);

    const kebabImage = document.createElement("img");
    kebabImage.src = kebabImg;
    kebabItem.appendChild(kebabImage);

    const kebabTitle = document.createElement("h1");
    kebabTitle.textContent = "Kebab";
    kebabItem.appendChild(kebabTitle);

    const kebabDescription = document.createElement("p");
    kebabDescription.textContent = "Tasty Kebab from Happy Chickens made made with much love and cooked to exalancy.";
    kebabItem.appendChild(kebabDescription);

    const friesItem = document.createElement("div");
    friesItem.classList.add("menu-item");
    menuItems.appendChild(friesItem);

    const friesImage = document.createElement("img");
    friesImage.src = friesImg;
    friesItem.appendChild(friesImage);

    const friesTitle = document.createElement("h1");
    friesTitle.textContent = "French Fries";
    friesItem.appendChild(friesTitle);

    const friesDescription = document.createElement("p");
    friesDescription.textContent = "A classic in the genre. French Fries seasoned with sea salt and dill.";
    friesItem.appendChild(friesDescription);
    
};