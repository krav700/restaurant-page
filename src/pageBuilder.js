import bbqImg from "./images/logo.png";
import steakImg from "./images/steak.jpg";
import kebabImg from "./images/kebab.jpg";
import friesImg from "./images/fries.jpg";
const content = document.querySelector("#content");

export const homeBuilder = function() {

    clearPage();

    const logoImage = document.createElement("img");
    logoImage.src = bbqImg;
    content.appendChild(logoImage);

    const headline = document.createElement("h1");
    headline.textContent = "Barbecue Smoke And Grill!"
    content.appendChild(headline);

    const description = document.createElement("p");
    description.textContent = "Welcome to Barbecue Smoke and Grill where we have the best barbecue in all of Europe! certified by professionals and custommers alike.";
    content.appendChild(description);

};

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

export const aboutBuilder = function() {

    clearPage();

    const logoImage = document.createElement("img");
    logoImage.src = bbqImg;
    content.appendChild(logoImage);

    const headline = document.createElement("h1");
    headline.textContent = "Barbecue Smoke And Grill About Section"
    content.appendChild(headline);

    const description = document.createElement("p");
    description.textContent = "At Barbecue Smoke & Grill, we believe great barbecue is more than just food – it’s an experience. From the first crackle of wood in the smoker to the last bite of tender, smoky perfection, every dish we serve is crafted with passion, patience, and fire. Founded by true grill enthusiasts, our mission is simple: bring people together over the unmistakable flavor of slow-smoked meats and flame-grilled favorites. Whether you’re here for our juicy ribs, mouthwatering brisket, or classic grilled sides, you’ll taste the tradition and care in every plate. We’re not just about barbecue – we’re about community. Pull up a chair, grab a plate, and enjoy the warm, welcoming atmosphere that makes Smoke & Grill more than just a restaurant. It’s where friends become family, and every meal feels like a backyard cookout.";
    content.appendChild(description);

};

function clearPage() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}