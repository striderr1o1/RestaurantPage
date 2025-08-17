import { createHeroSection, createHeader, createSection } from "./home.js";

const homeButton = document.querySelector(".homebutton");
const menuButton = document.querySelector(".menubutton");
const aboutButton = document.querySelector(".aboutbutton");


//add Event listeners
document.addEventListener("DOMContentLoaded", function(){
    createHeader();
    createHeroSection();
    createSection();
})

homeButton.addEventListener("click", function(){
    document.body.innerHTML = "";
    createHeader();
    createHeroSection();
    createSection();
})
//comment