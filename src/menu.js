import "./styles/menustyle.css"
import burger from "./assets/burger.jpg"
import pizza from "./assets/pizza.jpg"
import samosa from "./assets/samosa.jpg"
import coffee from "./assets/coffee.jpg"
import kabab from "./assets/kabab.jpg"
import { createFooter } from "./home.js"

let menuItemPics = [burger,pizza, kabab,samosa,  coffee,]
let menuNames = ["Big Brumble Burger", "Organic Pizza", "Finger Kababs", "Somuch Samosa", "Coffee"]
let prices = [700, 1100, 300, 200, 100];
let classNames = ["card burger", "card pizza", "card kabab", "card samosa", "card coffee"];
let imageClasses = ['img burger', 'img pizza', 'img samosa', 'img kabab','img coffee']
function createMenuDiv(parentdiv){
    let mainDiv = document.createElement('div');
    mainDiv.className = "mainDiv";
    parentdiv.appendChild(mainDiv);

    for(let i = 0; i < menuItemPics.length;i++){
        //create card
        let card = document.createElement('div');
        card.className = classNames[i];
        mainDiv.appendChild(card);
        //card image
        let image = document.createElement('img');
        image.src = menuItemPics[i];
        image.className = imageClasses[i];
        card.appendChild(image);
        //create item heading
        let itemName = document.createElement('h2');
        itemName.className = "itemname";
        itemName.textContent = menuNames[i];
        card.appendChild(itemName)
        //create Price
        let priceTag = document.createElement('p');
        priceTag.className = "price";
        priceTag.textContent = "Rs. "+prices[i];
        card.appendChild(priceTag);
    }

}

function MenuPage(){
    //components
    let parentDiv = document.createElement('div');
    document.body.appendChild(parentDiv);
    parentDiv.className = "ParentDiv";
    createMenuDiv(parentDiv);
    createFooter(parentDiv);
}

export default MenuPage