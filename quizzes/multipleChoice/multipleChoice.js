//Gregory Ecklund
//August 2022

//VARIABLE DECLARATIONS
let ELEMENTDATA = {};
setupElementData();
const elementNames = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"]

let answerLocationNumber = 0
let answerChoice1
let answerChoice2
let answerChoice3
let answerChoice4
let temporaryQuestionList = []
let temporaryAnswerList = []

var questionList = []
var answerList = []
var score = 0



//STARTING FUNCTION
function start() {
    document.getElementById("answerButton1").style.visibility = "visible"
    document.getElementById("answerButton2").style.visibility = "visible"
    document.getElementById("answerButton3").style.visibility = "visible"
    document.getElementById("answerButton4").style.visibility = "visible"
    document.getElementById("seconds").style.visibility = "visible"
    document.getElementById("minutes").style.visibility = "visible"
    document.getElementById("minutesLabel").style.visibility = "visible"
    document.getElementById("secondsLabel").style.visibility = "visible"
    document.getElementById("startButton").style.visibility = "hidden"
    document.getElementById("questions").style.visibility = "visible"
    document.getElementById("giveUpButton").style.visibility = "visible"
    let input = document.getElementById("gamemode").value.replace(/\s/g, "").split("Select")[1].split("Given")
    document.getElementById("gamemode").style.visibility = "hidden"
    variableAssignment(input[1], input[0])
    nextQuestion()
    timerContinue()
}


//YOU WIN FUNCTION
function youWin() {
    document.getElementById("retryButton").style.visibility = "visible"
    document.getElementById("retryButton").innerHTML = "New Game?"
    document.getElementById("answerButton1").style.visibility = "hidden"
    document.getElementById("answerButton2").style.visibility = "hidden"
    document.getElementById("answerButton3").style.visibility = "hidden"
    document.getElementById("answerButton4").style.visibility = "hidden"
    document.getElementById("giveUpButton").style.visibility = "hidden"
    document.getElementById("questions").innerHTML = `You Win! Score: (${score}/118)`
    document.body.style.background = "green"
    document.getElementById("questions").style.color = "black"
    stopTimer()
}


//RETRY FUNCTION
function retry() {
    location.reload()
}


//VARIABLE ASSIGNMENT FUNCTION
function variableAssignment(questionType, answerType) {
    let tempList1 = []
    let tempList2 = []
    switch (questionType) {
        case "Name":
            for (let i = 0; i < 118; i++) {
                tempList1[i] = ELEMENTDATA[elementNames[i].toLowerCase()]["name"]
            }
            break
        case "Symbol":
            for (let i = 0; i < 118; i++) {
                tempList1[i] = ELEMENTDATA[elementNames[i].toLowerCase()]["symbol"]
            }
            break
        case "Mass":
            for (let i = 0; i < 118; i++) {
                tempList1[i] = ELEMENTDATA[elementNames[i].toLowerCase()]["mass"]
            }
            break
        case "Number":
            for (let i = 0; i < 118; i++) {
                tempList1[i] = ELEMENTDATA[elementNames[i].toLowerCase()]["number"]
            }
            break
        case "ElectronConfig":
            for (let i = 0; i < 118; i++) {
                tempList1[i] = ELEMENTDATA[elementNames[i].toLowerCase()]["electronConfiguration"]
            }
            break
    }

    switch (answerType) {
        case "Name":
            for (let i = 0; i < 118; i++) {
                tempList2[i] = ELEMENTDATA[elementNames[i].toLowerCase()]["name"]
            }
            document.getElementById("answerButton1").style.fontSize = "18px";
            document.getElementById("answerButton2").style.fontSize = "18px";
            document.getElementById("answerButton3").style.fontSize = "18px";
            document.getElementById("answerButton4").style.fontSize = "18px";
            break
        case "Symbol":
            for (let i = 0; i < 118; i++) {
                tempList2[i] = ELEMENTDATA[elementNames[i].toLowerCase()]["symbol"]
            }
            break
        case "Mass":
            for (let i = 0; i < 118; i++) {
                tempList2[i] = ELEMENTDATA[elementNames[i].toLowerCase()]["mass"]
            }
            document.getElementById("answerButton1").style.fontSize = "20px";
            document.getElementById("answerButton2").style.fontSize = "20px";
            document.getElementById("answerButton3").style.fontSize = "20px";
            document.getElementById("answerButton4").style.fontSize = "20px";
            break
        case "Number":
            for (let i = 0; i < 118; i++) {
                tempList2[i] = ELEMENTDATA[elementNames[i].toLowerCase()]["number"]
            }
            break
    }

    temporaryQuestionList = [...tempList1]
    temporaryAnswerList = [...tempList2]
    questionList = [...tempList1]
    answerList = [...tempList2]
}


//NEXT QUESTION FUNCTION
function nextQuestion() {
    if (temporaryQuestionList.length == 0) {
        youWin()
    }
    else {
        let index = randomNumber(0, (temporaryQuestionList.length - 1))
        let question = temporaryQuestionList[index]
        let answer = temporaryAnswerList[index]
        answerLocationNumber = randomNumber(1, 4)
        temporaryAnswerList.splice(index, 1)
        temporaryQuestionList.splice(index, 1)
        document.getElementById("questions").innerHTML = question

        if (answerLocationNumber == 1) {
            answerChoice1 = answer
        }
        else {
            answerChoice1 = answerList[randomNumber(0, 117)]
            while (answerChoice1 == answer) {
                answerChoice1 = answerList[randomNumber(0, 117)]
            }
        }

        if (answerLocationNumber == 2) {
            answerChoice2 = answer
        }
        else {
            answerChoice2 = answerList[randomNumber(0, 117)]
            while (answerChoice2 == answer || answerChoice2 == answerChoice1) {
                answerChoice2 = answerList[randomNumber(0, 117)]
            }
        }

        if (answerLocationNumber == 3) {
            answerChoice3 = answer
        }
        else {
            answerChoice3 = answerList[randomNumber(0, 117)]
            while (answerChoice3 == answer || answerChoice3 == answerChoice2 || answerChoice3 == answerChoice1) {
                answerChoice3 = answerList[randomNumber(0, 117)]
            }
        }

        if (answerLocationNumber == 4) {
            answerChoice4 = answer
        }
        else {
            answerChoice4 = answerList[randomNumber(0, 117)]
            while (answerChoice4 == answer || answerChoice4 == answerChoice1 || answerChoice4 == answerChoice2 || answerChoice4 == answerChoice3) {
                answerChoice4 = answerList[randomNumber(0, 117)]
            }
        }

        document.getElementById("answerButton1").innerHTML = answerChoice1
        document.getElementById("answerButton2").innerHTML = answerChoice2
        document.getElementById("answerButton3").innerHTML = answerChoice3
        document.getElementById("answerButton4").innerHTML = answerChoice4
    }
}


//YOU LOSE FUNCTION
function youLose() {
    document.getElementById("retryButton").style.visibility = "visible"
    document.getElementById("answerButton1").style.visibility = "hidden"
    document.getElementById("answerButton2").style.visibility = "hidden"
    document.getElementById("answerButton3").style.visibility = "hidden"
    document.getElementById("answerButton4").style.visibility = "hidden"
    document.getElementById("giveUpButton").style.visibility = "hidden"
    document.getElementById("questions").innerHTML = `You Lose! Score: (${score}/118)`
    document.body.style.background = "red"
    document.getElementById("questions").style.color = "black"
    stopTimer()
}


//CHECK A BUTTON (1-4)
function guessAnswer1() {
    if (answerLocationNumber == 1) {
        score++
        nextQuestion()
    }
    else {youLose()}
}
function guessAnswer2() {
    if (answerLocationNumber == 2) {
        score++
        nextQuestion()
    }
    else {youLose()}
}
function guessAnswer3() {
    if (answerLocationNumber == 3) {
        score++
        nextQuestion()
    }
    else {youLose()}
}
function guessAnswer4() {
    if (answerLocationNumber == 4) {
        score++
        nextQuestion()
    }
    else {youLose()}
}


//RANDOM NUMBER FUNCTION
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
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