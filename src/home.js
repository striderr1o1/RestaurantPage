import "./style.css"

//create home page functions


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

export {createHeroSection}