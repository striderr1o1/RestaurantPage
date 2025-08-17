import "./style.css"
import me from "./assets/WhatsApp Image 2025-07-17 at 4.43.12 AM.jpeg"
//create home page functions
function createHeader(){
    let headerTag = document.createElement("header");
    headerTag.className="header-div";
    document.body.appendChild(headerTag);
    

    let navTag = document.createElement('nav');
    headerTag.appendChild(navTag);

    let classes = ["buttons homebutton", "buttons menubutton", "buttons aboutbutton"];
    let texts = ["Home", "Menu", "About"];
    for(let i = 0; i < classes.length; i++){
        let button = document.createElement('button');
        button.className = classes[i];
        button.textContent = texts[i];
        navTag.appendChild(button);
    }
}

function createHeroSection(){
    let heroDiv = document.createElement("div");
    heroDiv.className = "hero-div";
    document.body.appendChild(heroDiv);
    let heroText = document.createElement('p');
    heroText.className = "hero-text";
    heroText.innerHTML = "If Yoh ghot Money<br>Taste iz on Us";
    heroText.style.textAlign = "center";
    heroText.style.color ="white";
    heroText.style.fontSize= "5rem";
    heroDiv.style.display = "flex";
    heroDiv.style.flexDirection = "row";
    heroDiv.style.justifyContent="center";
    heroDiv.style.alignItems="center";
    heroDiv.appendChild(heroText);
    heroText.style.background = "transparent"
    
    
}

function createSection(){
    let section = document.createElement('section');
    section.className = "section2";
    document.body.appendChild(section);
    //creating div1
    let div1 = document.createElement('div');
    div1.className = "div1";
    div1.innerHTML = 
    "Meet Mr. Ranger,<br>a skilled programmer, with a passion for computer science.<br>He transforms simple ideas into reality using code.";
    div1.style.color = "white";
    div1.style.backgroundColor = "black";
    div1.style.lineHeight="1.5"
    section.appendChild(div1);
    //creating div2
    let div2 = document.createElement('div');
    div2.className="div2";
    div2.style.backgroundColor = "black";
    section.appendChild(div2);
    let image = document.createElement('img');
    image.src = me;
    image.className = "my-image";
    section.appendChild(div2);
    div2.appendChild(image);

    

}

export {createHeroSection, createHeader, createSection}