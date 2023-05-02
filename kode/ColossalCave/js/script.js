// variabler
const inputField = document.querySelector("#userInput");
const main = document.querySelector("main");
const gameplayBox = document.querySelector(".gameplay-box");
let userInput = []; 

// blink
const square = document.querySelector(".fa-square");
setInterval(function() {
    square.classList.toggle("blink");
}, 600);

// Insert text
const addText = (text, container = main) => {
    if (container === gameplayBox) {
        let paragraph = document.createElement("p");
        paragraph.innerText = text;
        container.appendChild(paragraph);
        container.lastChild.scrollIntoView();
    }
}

const backpack = {
    tools: ["Rope", "Grappling Hook"],
    berryCount: 6,
    seeBackpack: function() {
        this.pokemon.forEach(item => {
            addText(item) 
        });
        addText(`Berries: ${this.berryCount}`);
    }
}

const whatToDo = (userInput) => {
    addText(userInput, gameplayBox);
    switch(userInput) {
        case "help":
            addText("Direct me with commands 1 or 2 words.", gameplayBox);
            break;
        case "backpack": 
            backpack.seeBackpack();
            break;
        case "info":
            addText("....", gameplayBox);
            break;
        case "yes":
            addText("Somewhere nearby is a Colossal Cave, where others have found fortunes in treasure and gold, though it is rumonred that some who enter is never seen again! I will be your eyes and hands! Direct me with commands 1 or 2 words. Should you get stuck, type “help” or “info” for some general hints. ", gameplayBox);
            break;
        default: 
            addText("Sorry, I didn't understand that", gameplayBox);
    }
}

document.addEventListener("keydown", (e) => {
    switch(true) {
        case e.code.startsWith("Key"):
        case e.code === "Space":
            userInput.push(e.key);
            inputField.innerHTML = userInput.join('');
        break;
        case e.code === "Backspace":
            userInput.pop();
            inputField.innerHTML = userInput.join('');
        break;
        case e.code === "Enter": 
            addText(userInput.join(""));
            whatToDo(userInput.join("").toLowerCase());
            userInput = [];
            inputField.innerHTML = "";
        break;
        default:
    }
})