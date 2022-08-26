//Gregory Ecklund
//August 2022

//Variable Declarations
const timerList = [document.getElementById("minutesLabel"), document.getElementById("minutes"), document.getElementById("seconds"), document.getElementById("secondsLabel")]
var remainingElements = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"]
var remainingNumbers = []
for (let i = 0; i < 118; i++) {
    remainingNumbers[i] = (i+1)
}  
var currentElement
var currentNumber
var score = 0

//Startup function
function start() {
    document.getElementById("startButton").style.visibility = "hidden"
    for (let i in timerList) {
        timerList[i].style.visibility = "visible"
    }
    document.getElementById("questions").style.visibility = "visible"
    timerContinue()
    nextQuestion()
    document.getElementById("input").style.visibility = "visible"
    document.getElementById("input").focus()
    document.getElementById("tips").style.visibility = "visible"
}

//Sets Up the Next Question
function nextQuestion() {
    if (remainingElements.length == 0) {
        youWin()
    }
    else {
        currentIndex = randomNumber(0, (remainingElements.length - 1))
        currentNumber = remainingNumbers[currentIndex]
        currentElement = remainingElements[currentIndex]
        remainingElements.splice(currentIndex, 1)
        remainingNumbers.splice(currentIndex, 1)
        document.getElementById("questions").innerHTML = currentNumber
        document.getElementById("input").value = ""
    }
}

//Checks the Input for the Answer
function checkAnswer() {
    let input = document.getElementById("input").value
    if (input.toLowerCase() == currentElement.toLowerCase()) {
        score++
        nextQuestion()
    }
    else if (input == "END") {
        remainingElements = []
        remainingNumbers = []
        nextQuestion()
    }
}

//Displays Win Screen
function youWin() {
    document.getElementById("input").style.visibility = "hidden"
    document.getElementById("retryButton").style.visibility = "visible"
    document.getElementById("tips").style.visibility = "hidden"
    stopTimer()
    if (score == 118) {
        document.getElementById("questions").innerHTML = `YOU WIN! (${score} / 118)`
        document.body.style.background = "green"
        document.getElementById("retryButton").style.backgroundColor = "lightgreen"
    }
    else {
        document.getElementById("questions").innerHTML = `YOU LOSE! (${score} / 118)`
        document.body.style.background = "red"
        document.getElementById("retryButton").style.backgroundColor = "crimson"
    }
}

//Retry Function
function retry() {
    location.reload()
}

//TIMER
var t
var seconds = 0
var minutes = 0
function timer() {
    seconds = seconds + 1
    if(seconds >= 60) {
        minutes = minutes + 1
        seconds = seconds - 60
    }
    document.getElementById("minutes").innerHTML = minutes 
    document.getElementById("seconds").innerHTML = seconds
    timerContinue()
}
function timerContinue() {
   t = setTimeout(timer, 1000)
}
function stopTimer() {
    clearTimeout(t)
}

//Random Number Function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}