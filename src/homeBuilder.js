import bbqImg from "./images/logo.png";
import { clearPage } from "./pageClear.js";
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