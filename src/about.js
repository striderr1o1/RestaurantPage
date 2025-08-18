import "./styles/aboutpage.css"
import pic from "./assets/WhatsApp Image 2025-08-18 at 9.26.57 PM.jpeg"
import { createFooter } from "./home.js";

//create about main function
function createAboutDiv(parentdiv){
    let AboutDiv = document.createElement('div');
    AboutDiv.className = "aboutDiv";
    parentdiv.appendChild(AboutDiv);
    //child1
    let child1 = document.createElement('div');
    child1.className = "aboutC1 childs";
    AboutDiv.appendChild(child1);
    //child2
    let child2 = document.createElement('div');
    child2.className = "aboutC2 childs";
    AboutDiv.appendChild(child2);
    //child 1 text
    let child1Text = document.createElement('p');
    child1Text.className = "text";
    child1Text.innerHTML = `
    <strong>Mustafa</strong> is a Computer Science undergraduate who introduces himself as “ranger,” even though it often feels cringe. With a love for technology that borders on obsession, he does not like debugging too much, but ok, and considers late-night compiler errors a natural part of the learning process.<br><br>
    
    His academic focus revolves around software engineering fundamentals and !algorithms, because in his words, “i dont want AI to get my future job” He dreams of building software that people won’t hate using, and he occasionally convinces himself that learning new frameworks counts as a personality trait.<br><br>
    
    Ranger speaks Python, JavaScript, and C++ with varying levels of confidence, and relies heavily on Git, Linux, chatgpt, and VS Code to survive. These days, he’s diving into Web Development and Generative Ai to make himself feel like he's making progress.
    `;
    child1.append(child1Text);
    //child2 image
    let image = document.createElement('img');
    image.className = "img2";
    image.src = pic;
    child2.appendChild(image);

}

function aboutPage(){
    let parentDiv = document.createElement('div');
    document.body.appendChild(parentDiv);
    parentDiv.className = "ParentDiv";
    //components
    createAboutDiv(parentDiv);
    createFooter(parentDiv);
}

export default aboutPage