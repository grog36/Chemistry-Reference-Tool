//Gregory Ecklund 
//August 2022

//VARIABLE DECLARATIONS
const ELEMENT_NAMES = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"]
let ELEMENTDATA = {};
setupElementData();
var answeredElements = []
var score = 0

//GUESS INPUT FUNCTION
function guess() {
    let input = document.getElementById("input").value.toLowerCase()
    if ((checkForRepeatInput(input) == false) && (checkAnswer(input) == true)) {
        document.getElementById(`${input}Square`).innerHTML = ELEMENTDATA[input]["symbol"]
        answeredElements.push(input)
        document.getElementById("input").value = ""
        if (answeredElements.length == 118) {
            youWin()
        }
        else {
            document.getElementById("text").innerHTML = `${answeredElements.length}/118`
        }
    }
    
}

//CHECKS IF THE ANSWER IS ALREADY RECORDED
function checkForRepeatInput(input) {
    let isRepeat = false
    for (let i = 0; i < answeredElements.length; i++) {
        if (input == answeredElements[i].toLowerCase()) {
            isRepeat = true
        }
    }
    return isRepeat
}

//CHECKS IF THE INPUT IS AN ANSWER
function checkAnswer(input) {
    let isCorrect = false
    for (let i = 0; i < ELEMENT_NAMES.length; i++) {
        if (input == ELEMENT_NAMES[i].toLowerCase()) {
            isCorrect = true
        }
    }
    return isCorrect
}

//STARTING FUNCTION
function start() {
    document.getElementById("input").style.visibility = "visible"
    document.getElementById("minutes").style.visibility = "visible"
    document.getElementById("seconds").style.visibility = "visible"
    document.getElementById("colon").style.visibility = "visible" 
    document.getElementById("start").style.visibility = "hidden"
    document.getElementById("text").style.visibility = "visible"
    TIME_LIMIT = 3
    timer()
    document.getElementById("input").focus()
    document.getElementById("text").innerHTML = "0/118"
}

//YOU LOSE FUNCTION
function youLose() {
    stopTimer()
    displayWrong()
    document.getElementById("text").innerHTML = `YOU LOSE! (${answeredElements.length}/118) {Refresh to play again}`
}

//DISPLAY MISSING ANSWERS
function displayWrong() {
    for (let i = 0; i < ELEMENT_NAMES.length; i++) {
        let currentElement = ELEMENT_NAMES[i].toLowerCase()
        if (!(answeredElements.includes(currentElement))) { 
            document.getElementById(`${currentElement}Square`).innerHTML = ELEMENTDATA[currentElement]["symbol"]
            document.getElementById(`${currentElement}Square`).style.color = "red"
        }
    }
    document.getElementById("input").style.visibility = "hidden"
}

//Display win screen
function youWin() {
    stopTimer()
    document.getElementById("text").innerHTML = "YOU WIN! (118/118) {Refresh to play again}"
    document.getElementById("input").style.visibility = "hidden"
}

/**
 * Grabs the element data from JSON file
 */
function setupElementData() {
    fetch("../../elements.json")
        .then(response => response.json())
        .then(data => {
            ELEMENTDATA = data;
        });
}



//TIMER
var t
var seconds = 0
var minutes = 0
var TIME_LIMIT = 3
function timer() {
    if (!((TIME_LIMIT == (minutes + 1)) && (seconds == 60))) {
        seconds++
        if (seconds >= 61) {
            minutes = minutes + 1
            seconds = seconds - 60
        }
        document.getElementById("minutes").innerHTML = (TIME_LIMIT - minutes - 1) 
        document.getElementById("seconds").innerHTML = (60 - seconds)
        timerContinue()
    }
    else {
        youLose()
    }
}
function timerContinue() {
   t = setTimeout(timer, 1000)
}
function stopTimer() {
    clearTimeout(t)
}