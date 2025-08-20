//Gregory Ecklund
//August 2022

//DEFINE DATA & VARS
let ELEMENTDATA = {};
setupElementData();

let previousElement = ""
let currentElement = ""
let currentElementHTML = ""
variableAssignment()

//ASSIGN VARS TO DOC-ELEMENTS
function variableAssignment() {
    elementInfo1 = document.getElementById("elementInfo1")
    elementInfo2 = document.getElementById("elementInfo2")
    elementInfo3 = document.getElementById("elementInfo3")
    elementInfo4 = document.getElementById("elementInfo4")
    elementInfo5 = document.getElementById("elementInfo5")
    elementInfo6 = document.getElementById("elementInfo6")
    elementInfo7 = document.getElementById("elementInfo7")
    elementInfo8 = document.getElementById("elementInfo8")
    elementInfo9 = document.getElementById("elementInfo9")
    elementInfo10 = document.getElementById("elementInfo10")
    elementInfo11 = document.getElementById("elementInfo11")
    elementInfo12 = document.getElementById("elementInfo12")
    elementInfo13 = document.getElementById("elementInfo13")
    elementInfo14 = document.getElementById("elementInfo14")
    elementInfo15 = document.getElementById("elementInfo15")
    elementInfo16 = document.getElementById("elementInfo16")
    elementInfo17 = document.getElementById("elementInfo17")
    elementInfo18 = document.getElementById("elementInfo18")
    elementInfo19 = document.getElementById("elementInfo19")
    elementInfo20 = document.getElementById("elementInfo20")
}

//DISPLAY INFORMATION OF CLICKED ELEMENT
function onElementClick(elementNumber) {
    if(previousElement != "") {
        temp = document.getElementById(`${previousElement}Square`)
        temp.style.borderColor = "black"
        temp.style.borderWidth = "1px"

        if(previousElement=="silicon"||previousElement=="arsenic"||previousElement=="tellurium"||previousElement=="astatine") {
            temp.style.borderLeftColor = "blue"
            temp.style.borderBottomColor = "blue"
            temp.style.borderLeftWidth = "2px"
            temp.style.borderBottomWidth = "2px"
        }
        else if(previousElement=="aluminium"||previousElement=="germanium"||previousElement=="antimony"||previousElement=="polonium") {
            temp.style.borderRightColor = "blue"
            temp.style.borderTopColor = "blue"
            temp.style.borderRightWidth = "2px"
            temp.style.borderTopWidth = "2px"
        }
        else if(previousElement == "boron") {
            temp.style.borderBottomColor = "blue"
            temp.style.borderBottomWidth = "2px"
        }
        else if(previousElement == "tennessine") {
            temp.style.borderTopColor = "blue"
            temp.style.borderTopWidth = "2px"
        }
        else if(previousElement == "lanthanum" || previousElement == "actinium") {
            temp.style.borderRightColor = "goldenrod"
            temp.style.borderRightWidth = "3px"
        }
        else if(previousElement == "hafnium" || previousElement == "rutherfordium") {
            temp.style.borderLeftColor = "goldenrod"
            temp.style.borderLeftWidth = "3px"
        }
        else if(previousElement == "cerium" || previousElement == "thorium") {
            temp.style.borderLeftColor = "goldenrod"
            temp.style.borderLeftWidth = "6px"
        }
    }

    document.getElementById("elementData").style.visibility = "visible"
    
    for (let i in ELEMENTDATA) {
        if(ELEMENTDATA[i].number == elementNumber) {
            currentElement = i
            currentElementHTML = document.getElementById(`${currentElement}Square`)
        }
    }
    
    elementInfo1.innerHTML = ELEMENTDATA[currentElement].name
    elementInfo2.innerHTML = ELEMENTDATA[currentElement].symbol
    elementInfo3.innerHTML = ELEMENTDATA[currentElement].number
    elementInfo4.innerHTML = ELEMENTDATA[currentElement].mass
    elementInfo5.innerHTML = ELEMENTDATA[currentElement].stateAtSTP
    elementInfo6.innerHTML = ELEMENTDATA[currentElement].block
    elementInfo7.innerHTML = ELEMENTDATA[currentElement].group
    elementInfo8.innerHTML = ELEMENTDATA[currentElement].period
    elementInfo17.innerHTML = ELEMENTDATA[currentElement].elementCategory
    elementInfo20.innerHTML = ELEMENTDATA[currentElement].electronegativity
    elementInfo21.innerHTML = ELEMENTDATA[currentElement].electronConfiguration

    if(ELEMENTDATA[currentElement].meltingPointKelvin == "N/A") {elementInfo9.innerHTML = "N/A"}
    else {elementInfo9.innerHTML = ELEMENTDATA[currentElement].meltingPointKelvin + " K"}

    if(ELEMENTDATA[currentElement].boilingPointKelvin == "N/A") {elementInfo10.innerHTML = "N/A"}
    else {elementInfo10.innerHTML = ELEMENTDATA[currentElement].boilingPointKelvin + " K"}

    if(ELEMENTDATA[currentElement].triplePointTemperatureInKelvin == "N/A") {elementInfo11.innerHTML = "N/A"}
    else {elementInfo11.innerHTML = ELEMENTDATA[currentElement].triplePointTemperatureInKelvin + " K"}

    if(ELEMENTDATA[currentElement].triplePointPressureInKiloPascals == "N/A") {elementInfo12.innerHTML = "N/A"}
    else {elementInfo12.innerHTML = ELEMENTDATA[currentElement].triplePointPressureInKiloPascals + " kPa"}

    if(ELEMENTDATA[currentElement].criticalPointTemperatureInKelvin == "N/A") {elementInfo13.innerHTML = "N/A"}
    else {elementInfo13.innerHTML = ELEMENTDATA[currentElement].criticalPointTemperatureInKelvin + " K"}

    if(ELEMENTDATA[currentElement].criticalPointPressureInMegaPascals == "N/A") {elementInfo14.innerHTML = "N/A"}
    else {elementInfo14.innerHTML = ELEMENTDATA[currentElement].criticalPointPressureInMegaPascals + " MPa"}

    if(ELEMENTDATA[currentElement].heatOfFusion == "N/A") {elementInfo15.innerHTML = "N/A"}
    else {elementInfo15.innerHTML = ELEMENTDATA[currentElement].heatOfFusion + " kJ/mol"}

    if(ELEMENTDATA[currentElement].heatOfVaporization == "N/A") {elementInfo16.innerHTML = "N/A"}
    else {elementInfo16.innerHTML = ELEMENTDATA[currentElement].heatOfVaporization + " kJ/mol"}

    if(ELEMENTDATA[currentElement].densityAtSTP == "N/A") {elementInfo18.innerHTML = "N/A"}
    else if (ELEMENTDATA[currentElement].stateAtSTP == "Gas") {
        elementInfo18.innerHTML = ELEMENTDATA[currentElement].densityAtSTP + " g/L"
    }
    else {elementInfo18.innerHTML = ELEMENTDATA[currentElement].densityAtSTP + " g/cm^3"}

    if(ELEMENTDATA[currentElement].molarHeatCapacity == "N/A") {elementInfo19.innerHTML = "N/A"}
    else {elementInfo19.innerHTML = ELEMENTDATA[currentElement].molarHeatCapacity + " J/(molK)"}


    currentElementHTML.style.borderColor = "black"
    currentElementHTML.style.borderWidth = "5px"
    
    previousElement = currentElement
}

/**
 * Grabs the element data from JSON file
 */
function setupElementData() {
    fetch("./elements.json")
        .then(response => response.json())
        .then(data => {
            ELEMENTDATA = data;
        });
}