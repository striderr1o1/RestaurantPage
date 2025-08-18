import createHomePage from "./home.js";
import MenuPage from "./menu.js";
import { createHeader, createFooter } from "./home.js";
const homeButton = document.querySelector(".homebutton");
const menuButton = document.querySelector(".menubutton");
const aboutButton = document.querySelector(".aboutbutton");


//add Event listeners
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM loaded")
    // document.body.innerHTML = "";
    createHomePage();

})

homeButton.addEventListener("click", function(){
    let parent = document.querySelector('.ParentDiv');
    parent.innerHTML = "";
    document.body.removeChild(parent);
    createHomePage();
})

menuButton.addEventListener('click', function(){
    let parent = document.querySelector('.ParentDiv');
    parent.innerHTML = "";
    document.body.removeChild(parent);
    MenuPage();
})

aboutButton.addEventListener('click', function(){
    let parent = document.querySelector('.ParentDiv');
    parent.innerHTML = "";
    document.body.removeChild(parent);
    
})