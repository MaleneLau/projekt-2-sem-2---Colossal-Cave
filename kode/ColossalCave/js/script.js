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
        case "Help":
            addText("Direct me with commands 1 or 2 words.", gameplayBox);
            break;
        case "Backpack": 
            backpack.seeBackpack();
            break;
        case "ready":
            addText("You are an adventurer, seeking fame and fortune in a vast and treacherous world. Your latest quest has brought you to the entrance of a mysterious cave, said to be filled with untold riches and ancient artifacts. But be warned: many brave souls have entered this cave before you, and few have returned. Are you brave enough to face the dangers within? Will you find the treasure you seek, or will the cave claim yet another victim? The choice is yours, adventurer. Enter the cave, if you dare. ", gameplayBox);
            break;
        case "enter":
            addText("Without hesitation, you step forward, plunging into the cave's depths. The ground beneath your feet grows rough and uneven as you make your way deeper into the earth, your footsteps echoing off the cavern walls. After what feels like hours of walking, you come upon a massive bridge that stretches out before you like a spiderweb spun by some enormous arachnid.", gameplayBox);
            addText("As you begin to cross the bridge, your heart begins to race. You can feel the weight of the world bearing down on your shoulders, and the hairs on the back of your neck stand on end. Suddenly, you catch sight of a hulking figure standing at the far end of the bridge, its eyes fixed on you like a predator eyeing its prey. It is a troll, massive and menacing, with bulging muscles and a face twisted into a grotesque grin. It seems intent on blocking your path, and you can feel its malevolent gaze boring into your soul.", gameplayBox);
            break;
// Troll
        case "fight":
            addText("", gameplayBox);
            break;

        case "talk":
            addText("", gameplayBox);
            break;

        case "that":
            addText("You step carefully over the rickety bridge, your heart pounding in your chest. As you reach the other side, you find yourself faced with a fork in the path, two directions stretching out before you like the outstretched arms of fate.", gameplayBox);
            addText("To the east, the path leads into a dense thicket of trees, their branches twisted and gnarled like the fingers of an old crone. The air around you is thick with the scent of moss and rot, and you can hear the distant murmur of water rushing over rocks. To the west, the path leads across an open plain, the grassy fields stretching out before you like a green carpet. In the distance, you can see the silhouette of a distant mountain range, their peaks shrouded in mist.", gameplayBox);
            addText("You know that your decision could mean the difference between life and death, and you take a deep breath, weighing your options carefully. Will you choose the dark, foreboding path to the east, or the open, sunlit path to the west? The choice is yours, but choose wisely, for there may be no turning back once you have set foot on your chosen path.", gameplayBox);
            break;
// East side
        case "east":
            addText("As you venture down the path to the east, the cave walls narrow and twist, until you find yourself in a dark and winding maze of tunnels and passages. The air is thick with the acrid stench of mold and decay, and the sound of skittering rats echoes off the walls. You look around, trying to get your bearings, and see several possible paths ahead of you:", gameplayBox);
            addText("Straight ahead, left or right?", gameplayBox);
            break;
// Maze
        case "straight":
            addText("The path appears to continue in a straight line, but something about it feels off, and you sense that it may lead to a dead end.", gameplayBox);
            break;

        case "left":
            addText("The path veers sharply to the left, disappearing around a bend in the rock. You can't see what lies beyond, but you sense that it may be a junction or crossroads of some sort.", gameplayBox);
            addText("You come to a junction in the tunnels, with three possible paths leading off in different directions. Left, straight or right?", gameplayBox);
            break;

        case "right":
            addText("The path curves gently to the right, leading deeper into the maze. You can hear the faint sound of dripping water coming from that direction, and you wonder if it might lead to a source of fresh water or a hidden underground lake.", gameplayBox);
            addText("You come to a junction in the tunnels, with three possible paths leading off in different directions. You must choose your path carefully, weighing the risks and rewards of each possible direction. Which way will you go? Left path, straight ahead or right path?", gameplayBox);
            break;

        case "straight ahead":
            addText("The path stretches out before you, illuminated by the dim light of your torch. You sense that it may lead to the exit, but you can't be certain.", gameplayBox);
            break;

        case "right path":
            addText("The path curves to the right, leading deeper into the twisting maze of tunnels. You can't see where it leads, but you sense that it may lead to a dead end.", gameplayBox);
            break;
        
        case "left path":
            addText("The path curves sharply to the left, disappearing into darkness. You can hear the sound of skittering rats coming from that direction, and wonder if it may lead to the heart of the rat's nest.", gameplayBox);
            break;
// Rat Nest 



// dragon 
        case "continue":
            addText("As you continue through the cave, you enter a vast chamber, filled with a glittering hoard of treasure. Gold and silver coins, sparkling jewels, and other valuable items are piled high, and you can't help but feel a sense of wonder at the sight before you. But your joy is short-lived, as you see the guardian of the treasure: a massive red dragon, its scales glinting in the dim light. You must decide quickly what to do.", gameplayBox);
            break;

        case "look":
            addText("You take a quick look around the room, and spot a narrow path that leads out of the chamber, winding its way through the piles of treasure. You realize that this may be your only chance to escape the dragon's wrath, and make a dash for the exit.", gameplayBox);
            addText("You continue through the cave, eventually coming upon a hidden forest. You take some time to rest and recover before continuing on your journey, scanning the area for any signs of danger. As you explore the forest, you stumble upon a secret passageway. Your heart races with excitement and anticipation as you consider what treasures may lie beyond. Will you venture forth into the unknown? The choice is yours.", gameplayBox);
            break;
        
        case "fight it":
            addText("You draw your sword and prepare to do battle with the fearsome dragon, but as you step forward to engage it, you realize that it is far too powerful for you to defeat alone. You sheathe your sword and make a quick retreat, hoping to find another way to reach the treasure.", gameplayBox);
            addText("You continue through the cave, eventually coming upon a hidden forest. You take some time to rest and recover before continuing on your journey, scanning the area for any signs of danger. As you explore the forest, you stumble upon a secret passageway. Your heart races with excitement and anticipation as you consider what treasures may lie beyond. Will you venture forth into the unknown? The choice is yours.", gameplayBox);
            break;

// secret passageway.
        case "secret passageway":
            addText("As you venture forth into the unknown, you sense that it's the treasures you have found", gameplayBox);
            addText("As you grab the treasure, you hear a low rumble coming from deep within the cave. Suddenly, the walls begin to shake and rocks start falling from the ceiling. You realize that the cave is collapsing and you need to get out quickly.", gameplayBox);
            break;

// West side
        case "west":
            addText("As you venture west, you stumble upon a treacherous pitfall. You realize that you must find a way to disarm or avoid it in order to proceed.", gameplayBox);
            break;
        
        case "routes":
            addText("You scan the surroundings, hoping to find a detour. In the distance, you spot a narrow ledge that runs precariously along the edge of the gaping pit. ", gameplayBox);
            break;
        
        case "ledge":
            addText("", gameplayBox);
            break;
        
        case "rope":
            addText("You rummage through your backpack, searching for a solution to your predicament. You retrieve the sturdy rope from your backpack and endeavor to swing it across the gaping pit.", gameplayBox);
            addText("You feel a sense of trumph as the rope secures itself to a massive stone on the other side of the pit. ", gameplayBox);
            addText("You manage to defert the pit ", gameplayBox); //snak med Emma
            break;

        case "grappling hook":
            addText("You also notice a grappling hook in your backpack and decide to use it to swing across the pit. You deftly toss the grappling hook towards the opposite side of the pit, and to your relief, it hooks onto the wall with a resounding clank", gameplayBox);
            break;

        case "jump":
            addText("You contemplate your options and ultimately decide to attempt to jump over the pit. You take a deep breath and give it your all, but the gap proves too wide and you fall into the depths below.", gameplayBox);
            break;
// enden
        case "run":
            addText("You run as fast as you can, dodging falling debris and trying to find your way back to the entrance. Just as you see the light at the end of the tunnel, a massive boulder crashes down in front of you, blocking your path. You are trapped.", gameplayBox);
            addText("As the cave continues to crumble around you, you realize that this might be the end. But then you hear a voice calling out to you, and a hand reaches through the dust and rubble to pull you to safety.", gameplayBox);
            break;

        case "take it":
            addText("It turns out that the person who saved you was the same adventurer who inspired you to go on this journey in the first place. Together, you make your way out of the cave and emerge into the sunlight, richer in experience and wisdom than you ever could have imagined. And so, your adventure comes to an end, but the memories and lessons you've learned will stay with you forever.", gameplayBox);
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