//Type Element Given Symbol
//Gregory Ecklund (Feb 2022)

//Variable Declarations
const timerList = [document.getElementById('minutesLabel'), document.getElementById('minutes'), document.getElementById('seconds'), document.getElementById('secondsLabel')]
var remainingSymbols = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"]
var remainingElements = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"]
var remainingPolyatomicFormulas = ['(NH4)+', '(BrO3)-', '(CN)-', '(C2H3O2)-', '(ClO4)-', '(ClO3)-', '(ClO2)-', '(ClO)-', '(IO3)-', '(MnO4)-', '(NO3)-', '(NO2)-', '(OH)-', '(HCO3)-', '(HSO4)-', '(SCN)-', '(CO3)-2', '(Cr2O7)-2', '(CrO4)-2', '(SO4)-2', '(SO3)-2', '(PO4)-3', '(PO3)-3']
var remainingPolyatomicNames = ['Ammonium', 'Bromate', 'Cyanide', 'Acetate', 'Perchlorate', 'Chlorate', 'Chlorite', 'Hypochlorate', 'Iodate', 'Permanganate', 'Nitrate', 'Nitrite', 'Hydroxide', 'Hydrogen Carbonate', 'Hydrogen Sulfate', 'Thiocyanate', 'Carbonate', 'Dichromate', 'Chromate', 'Sulfate', 'Sulfite', 'Phosphate', 'Phosphite']
var currentElement
var currentSymbol
var currentIndex
var score = 0
var mode = 'default'
var list = 'elements'

//Start Function (called by button)
function start() {
    document.getElementById('startButton').style.visibility = 'hidden'
    if (document.getElementById('gamemodeSwitch').checked == true) {
        mode = 'endless'
    }
    if (document.getElementById('polyatomicSwitch').checked == true) {
        list = 'polyatomic'
    }
    for (let i = 0; i < timerList.length; i++) {
        timerList[i].style.visibility = 'visible'
    }
    document.getElementById('questions').style.visibility = 'visible'
    timerContinue()
    nextQuestion()
    document.getElementById('input').style.visibility = 'visible'
    document.getElementById('input').focus()
    document.getElementById('gamemodeSwitch').style.visibility = 'hidden'
    document.getElementById('gamemodeLabel').style.visibility = 'hidden'
    document.getElementById('tips').style.visibility = 'visible'
    document.getElementById('polyatomicSwitch').style.visibility = 'hidden'
    document.getElementById('polyatomicLabel').style.visibility = 'hidden'
    
}

function nextQuestion() {
    if (list == 'polyatomic') {
        if (remainingPolyatomicNames.length == 0) {
            youWin()
        }
        else {
            currentIndex = randomNumber(0, (remainingPolyatomicNames.length - 1))
            currentPolyatomicName = remainingPolyatomicNames[currentIndex]
            currentPolyatomicFormula = remainingPolyatomicFormulas[currentIndex]
            if (mode == 'default') {
                remainingPolyatomicNames.splice(currentIndex, 1)
                remainingPolyatomicFormulas.splice(currentIndex, 1)
            }
            document.getElementById('questions').innerHTML = currentPolyatomicName
            document.getElementById('input').value = ''
        }
    }
    else if (list == 'elements') {
        if (remainingElements.length == 0) {
            youWin()
        }
        else {
            currentIndex = randomNumber(0, (remainingSymbols.length - 1))
            currentElement = remainingElements[currentIndex]
            currentSymbol = remainingSymbols[currentIndex]
            if (mode == 'default') {
                remainingElements.splice(currentIndex, 1)
                remainingSymbols.splice(currentIndex, 1)
            }
            document.getElementById('questions').innerHTML = currentSymbol
            document.getElementById('input').value = ''
        }
    }   
}


function checkAnswer() {
    if (list == 'polyatomic') {
        let input = document.getElementById('input').value
        if (input.toLowerCase() == currentPolyatomicFormula.toLowerCase()) {
            score++
            nextQuestion()
        }
        else if (input == 'END') {
            remainingPolyatomicNames = []
            remainingPolyatomicFormulas = []
            nextQuestion()
        }
    }
    else if (list == 'elements') {
        let input = document.getElementById('input').value
        if (input.toLowerCase() == currentElement.toLowerCase()) {
            score++
            nextQuestion()
        }
        else if (input == 'END') {  
            remainingSymbols = []
            remainingElements = []
            nextQuestion()
        }
    }
    
    
}

function youWin() {
    document.getElementById('input').style.visibility = 'hidden'
    document.getElementById('retryButton').style.visibility = 'visible'
    document.getElementById('tips').style.visibility = 'hidden'
    stopTimer()
    if (list == 'polyatomic') {
        if (score >= 23) {
            document.getElementById('questions').innerHTML = `YOU WIN! (${score} / 23)`
            document.body.style.background = 'green'
            document.getElementById('retryButton').style.backgroundColor = 'lightgreen'
        }
        else {
            document.getElementById('questions').innerHTML = `YOU LOSE! (${score} / 23)`
            document.body.style.background = 'red'
            document.getElementById('retryButton').style.backgroundColor = 'crimson'
        }
    }
    else if (list == 'elements') {
        if (score >= 118) {
            document.getElementById('questions').innerHTML = `YOU WIN! (${score} / 118)`
            document.body.style.background = 'green'
            document.getElementById('retryButton').style.backgroundColor = 'lightgreen'
        }
        else {
            document.getElementById('questions').innerHTML = `YOU LOSE! (${score} / 118)`
            document.body.style.background = 'red'
            document.getElementById('retryButton').style.backgroundColor = 'crimson'
        }
    }
}

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
    document.getElementById('minutes').innerHTML = minutes 
    document.getElementById('seconds').innerHTML = seconds
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