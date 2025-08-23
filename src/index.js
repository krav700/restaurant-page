import "./styles.css";
import { homeBuilder, menuBuilder, aboutBuilder } from "./pageBuilder.js";

homeBuilder();

function properties() {
    const homeButton = document.querySelector("#homeButton");
    const menuButton = document.querySelector("#menuButton");
    const aboutButton = document.querySelector("#aboutButton");

    return {homeButton, menuButton, aboutButton};
};

function builders() {
    const propertiesFunk = properties();

    propertiesFunk.homeButton.addEventListener("click", homeBuilder);
    propertiesFunk.menuButton.addEventListener("click", menuBuilder);
    propertiesFunk.aboutButton.addEventListener("click", aboutBuilder);
};

builders();