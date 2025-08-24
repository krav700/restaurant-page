import { clearPage } from "./pageClear.js";
import bbqImg from "./images/logo.png";
const content = document.querySelector("#content");

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