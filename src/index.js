import { createHeroSection } from "./home.js";

const homeButton = document.querySelector(".homebutton");
const menuButton = document.querySelector(".menubutton");
const aboutButton = document.querySelector(".aboutbutton");


//add Event listeners
document.addEventListener("DOMContentLoaded", function(){
    createHeroSection();
})

homeButton.addEventListener("click", function(){
    document.body.innerHTML = "";
    createHeroSection();
})