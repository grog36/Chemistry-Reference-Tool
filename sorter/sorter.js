//Gregory Ecklund
//August 2022

//CONSTANT & VAR ASSIGNMENT
let ELEMENTDATA = {};
setupElementData();
const elementList = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"]

const numberCategory = ["number", "mass", "group", "period", "meltingPointKelvin", "meltingPointFahrenheit", "meltingPointCelsius", "boilingPointKelvin", "boilingPointFahrenheit", "boilingPointCelsius", "triplePointTemperatureInKelvin", "triplePointPressureInKiloPascals", "criticalPointTemperatureInKelvin", "criticalPointPressureInMegaPascals", "heatOfFusion", "heatOfVaporization", "densityAtSTP", "molarHeatCapacity", "electronegativity"]

var newList = []
var tempList = []
var nameList = []

/**
 * Sorts the elements by a given category and order
 * @param {String} category The category to be sorted by
 * @param {Number} order Ascending/Descending
 */
function sortBy(category, order) {
    newList = []
    tempList = []
    nameList = []
    for (let i = 0; i < 118; i++) {
        let currentElement = ELEMENTDATA[elementList[i].toLowerCase()]
        if (currentElement[category] != "N/A") {
            newList.push(currentElement[category])
        }
        else {
            tempList.push("N/A")
        }
    }

    if (numberCategory.indexOf(category) != -1) {
        if (order == "ascending") {
            newList.sort(function(a, b) {
                return (a-b)
            })
        }
        else if (order == "descending") {
            newList.sort(function(a, b) {
                return (b-a)
            })
        }
    }
    else {
        newList.sort()
        if (order == "descending") {
            newList.reverse()
        }
    }

    for (let i = 0; i < tempList.length; i++) {
        newList.push(tempList[i])
    }

    for (let i = 0; i < 118; i++) {
        let isEqual = false
        for (let j = 0; j < 118; j++) {
            currentData = ELEMENTDATA[elementList[j].toLowerCase()][category]
            if (newList[i] == currentData && isEqual == false && nameList.indexOf(elementList[j]) == -1) {
                nameList.push(elementList[j])
                isEqual = true
            }
        }
    }
    
}

//Refresh Screen Function
function refreshScreen() {
    let order = document.getElementById("orderSelect").value.toLowerCase()
    let categoryInput = document.getElementById("categorySelect").value.toLowerCase()
    let category = ""

    //Grabs the category from the on-screen category input
    switch (categoryInput) {
        case "state at stp":
            category = "stateAtSTP"
            break
        case "electron configuration":
            category = "electronConfiguration"
            break
        case "melting point (kelvin)":
            category = "meltingPointKelvin"
            break
        case "melting point (celsius)":
            category = "meltingPointCelsius"
            break
        case "melting point (fahrenheit)":
            category = "meltingPointFahrenheit"
            break
        case "boiling point (kelvin)":
            category = "boilingPointKelvin"
            break
        case "boiling point (celsius)":
            category = "boilingPointCelsius"
            break
        case "boiling point (fahrenheit)":
            category = "boilingPointFahrenheit"
            break
        case "triple point temperature (kelvin)":
            category = "triplePointTemperatureInKelvin"
            break
        case "triple point pressure (kilopascals)":
            category = "triplePointPressureInKiloPascals"
            break
        case "critical point temperature (kelvin)":
            category = "criticalPointTemperatureInKelvin"
            break
        case "critical point pressure (megapascals)":
            category = "criticalPointPressureInMegaPascals"
            break
        case "heat of fusion":
            category = "heatOfFusion"
            break
        case "heat of vaporization":
            category = "heatOfVaporization"
            break
        case "element category":
            category = "elementCategory"
            break
        case "density at stp":
            category = "densityAtSTP"
            break
        case "molar heat capacity":
            category = "molarHeatCapacity"
            break
        default:
            category = categoryInput
            break
    }

    sortBy(category, order)

    for (let i = 1; i < 119; i++) {
        document.getElementById(`element${i}Name`).innerHTML = nameList[i-1]
        document.getElementById(`element${i}Info`).innerHTML = newList[i-1]
    }
}

/**
 * Grabs the element data from JSON file
 */
function setupElementData() {
    fetch("../elements.json")
        .then(response => response.json())
        .then(data => {
            ELEMENTDATA = data;
            refreshScreen();
        });
}