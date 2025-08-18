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
    console.log("home")
    let parent = document.querySelector('.ParentDiv');
    parent.innerHTML = "";
    document.body.removeChild(parent);
    console.log("home")
    createHomePage();
})

menuButton.addEventListener('click', function(){
    console.log("menu")
    let parent = document.querySelector('.ParentDiv');
    parent.innerHTML = "";
    document.body.removeChild(parent);
    console.log("parent erased")
    MenuPage();
})
// need to implement menuButton logic