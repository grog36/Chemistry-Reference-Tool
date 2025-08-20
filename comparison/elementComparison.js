//Gregory Ecklund
//August 2022

let ELEMENTDATA = {};
setupElementData();

//ASSIGN DOC-ELEMENTS TO CONSTANTS
const element1Info1 = document.getElementById("element1Info1")
const element1Info2 = document.getElementById("element1Info2")
const element1Info3 = document.getElementById("element1Info3")
const element1Info4 = document.getElementById("element1Info4")
const element1Info5 = document.getElementById("element1Info5")
const element1Info6 = document.getElementById("element1Info6")
const element1Info7 = document.getElementById("element1Info7")
const element1Info8 = document.getElementById("element1Info8")
const element1Info9 = document.getElementById("element1Info9")
const element1Info10 = document.getElementById("element1Info10")
const element1Info11 = document.getElementById("element1Info11")
const element1Info12 = document.getElementById("element1Info12")
const element1Info13 = document.getElementById("element1Info13")
const element1Info14 = document.getElementById("element1Info14")
const element1Info15 = document.getElementById("element1Info15")
const element1Info16 = document.getElementById("element1Info16")
const element1Info17 = document.getElementById("element1Info17")
const element1Info18 = document.getElementById("element1Info18")
const element1Info19 = document.getElementById("element1Info19")
const element1Info20 = document.getElementById("element1Info20")
const element2Info1 = document.getElementById("element2Info1")
const element2Info2 = document.getElementById("element2Info2")
const element2Info3 = document.getElementById("element2Info3")
const element2Info4 = document.getElementById("element2Info4")
const element2Info5 = document.getElementById("element2Info5")
const element2Info6 = document.getElementById("element2Info6")
const element2Info7 = document.getElementById("element2Info7")
const element2Info8 = document.getElementById("element2Info8")
const element2Info9 = document.getElementById("element2Info9")
const element2Info10 = document.getElementById("element2Info10")
const element2Info11 = document.getElementById("element2Info11")
const element2Info12 = document.getElementById("element2Info12")
const element2Info13 = document.getElementById("element2Info13")
const element2Info14 = document.getElementById("element2Info14")
const element2Info15 = document.getElementById("element2Info15")
const element2Info16 = document.getElementById("element2Info16")
const element2Info17 = document.getElementById("element2Info17")
const element2Info18 = document.getElementById("element2Info18")
const element2Info19 = document.getElementById("element2Info19")
const element2Info20 = document.getElementById("element2Info20")


//DISPLAY DATA FUNCTION
function displayData(element1, element2, temperature, pressure) {
    element1 = ELEMENTDATA[element1]
    element2 = ELEMENTDATA[element2]

    element1Info1.innerHTML = element1.name
    element1Info2.innerHTML = element1.symbol
    element1Info3.innerHTML = element1.number
    element1Info4.innerHTML = element1.mass
    element1Info5.innerHTML = element1.stateAtSTP
    element1Info6.innerHTML = element1.block
    element1Info7.innerHTML = element1.group
    element1Info8.innerHTML = element1.period
    element1Info17.innerHTML = element1.elementCategory
    element1Info20.innerHTML = element1.electronegativity
    element2Info1.innerHTML = element2.name
    element2Info2.innerHTML = element2.symbol
    element2Info3.innerHTML = element2.number
    element2Info4.innerHTML = element2.mass
    element2Info5.innerHTML = element2.stateAtSTP
    element2Info6.innerHTML = element2.block
    element2Info7.innerHTML = element2.group
    element2Info8.innerHTML = element2.period
    element2Info17.innerHTML = element2.elementCategory
    element2Info20.innerHTML = element2.electronegativity
  
    if(element1.meltingPointKelvin == "N/A") {element1Info9.innerHTML = "N/A"}
        else if(temperature == "kelvin") {element1Info9.innerHTML = element1.meltingPointKelvin + " K"}
        else if(temperature == "celsius") {element1Info9.innerHTML = element1.meltingPointCelsius + " C"}
        else if(temperature == "fahrenheit") {element1Info9.innerHTML = element1.meltingPointFahrenheit + " F"}
    if(element1.boilingPointKelvin == "N/A") {element1Info10.innerHTML = "N/A"}
        else if(temperature == "kelvin") {element1Info10.innerHTML = element1.boilingPointKelvin + " K"}
        else if(temperature == "celsius") {element1Info10.innerHTML = element1.boilingPointCelsius + " C"}
        else if(temperature == "fahrenheit") {element1Info10.innerHTML = element1.boilingPointFahrenheit + " F"}
    if(element1.triplePointTemperatureInKelvin == "N/A") {element1Info11.innerHTML = "N/A"}
        else if(temperature == "kelvin") {element1Info11.innerHTML = element1.triplePointTemperatureInKelvin + " K"}
        else if(temperature == "celsius") {element1Info11.innerHTML = calculateCelsiusFromKelvin(element1.triplePointTemperatureInKelvin) + " C"}
        else if(temperature == "fahrenheit") {element1Info11.innerHTML = calculateFahrenheitFromKelvin(element1.triplePointTemperatureInKelvin) + " F"}
    if(element1.triplePointPressureInKiloPascals == "N/A") {element1Info12.innerHTML = "N/A"}
        else if(pressure == "pascals") {element1Info12.innerHTML = element1.triplePointPressureInKiloPascals + " kPa"}
        else if(pressure == "atm") {element1Info12.innerHTML = calculateATMFromKiloPascals(element1.triplePointPressureInKiloPascals) + " atm"}
        else if(pressure == "mmhg") {element1Info12.innerHTML = calculateMMHGFromKiloPascals(element1.triplePointPressureInKiloPascals) + " mmHg"}
        else if(pressure == "torr") {element1Info12.innerHTML = calculateTORRFromKiloPascals(element1.triplePointPressureInKiloPascals) + " torr"}
    if(element1.criticalPointTemperatureInKelvin == "N/A") {element1Info13.innerHTML = "N/A"}
        else if(temperature == "kelvin") {element1Info13.innerHTML = element1.criticalPointTemperatureInKelvin + " K"}
        else if(temperature == "celsius") {element1Info13.innerHTML = calculateCelsiusFromKelvin(element1.criticalPointTemperatureInKelvin) + " C"}
        else if(temperature == "fahrenheit") {element1Info13.innerHTML = calculateFahrenheitFromKelvin(element1.criticalPointTemperatureInKelvin) + " F"}
    if(element1.criticalPointPressureInMegaPascals == "N/A") {element1Info14.innerHTML = "N/A"}
        else if(pressure == "pascals") {element1Info14.innerHTML = element1.criticalPointPressureInMegaPascals + " MPa"}
        else if(pressure == "atm") {element1Info14.innerHTML = calculateATMFromMegaPascals(element1.criticalPointPressureInMegaPascals) + " atm"}
        else if(pressure == "mmhg") {element1Info14.innerHTML = calculateMMHGFromMegaPascals(element1.criticalPointPressureInMegaPascals) + " mmHg"}
        else if(pressure == "torr") {element1Info14.innerHTML = calculateMMHGFromMegaPascals(element1.criticalPointPressureInMegaPascals) + " torr"}
    if(element1.heatOfFusion == "N/A") {element1Info15.innerHTML = "N/A"}
        else {element1Info15.innerHTML = element1.heatOfFusion + " kJ/mol"}
    if(element1.heatOfVaporization == "N/A") {element1Info16.innerHTML = "N/A"}
        else {element1Info16.innerHTML = element1.heatOfVaporization + " kJ/mol"}
    if(element1.stateAtSTP == "gas") {element1Info18.innerHTML = element1.densityAtSTP + " g/L"}
        else {element1Info18.innerHTML = element1.densityAtSTP + " g/cm^3"}
    if(element1.molarHeatCapacity == "N/A") {element1Info19.innerHTML = "N/A"}
        else {element1Info19.innerHTML = element1.molarHeatCapacity + " J/(molK)"}


    if(element2.meltingPointKelvin == "N/A") {element2Info9.innerHTML = "N/A"}
        else if(temperature == "kelvin") {element2Info9.innerHTML = element2.meltingPointKelvin + " K"}
        else if(temperature == "celsius") {element2Info9.innerHTML = element2.meltingPointCelsius + " C"}
        else if(temperature == "fahrenheit") {element2Info9.innerHTML = element2.meltingPointFahrenheit + " F"}
    if(element2.boilingPointKelvin == "N/A") {element2Info10.innerHTML = "N/A"}
        else if(temperature == "kelvin") {element2Info10.innerHTML = element2.boilingPointKelvin + " K"}
        else if(temperature == "celsius") {element2Info10.innerHTML = element2.boilingPointCelsius + " C"}
        else if(temperature == "fahrenheit") {element2Info10.innerHTML = element2.boilingPointFahrenheit + " F"}
    if(element2.triplePointTemperatureInKelvin == "N/A") {element2Info11.innerHTML = "N/A"}
        else if(temperature == "kelvin") {element2Info11.innerHTML = element2.triplePointTemperatureInKelvin + " K"}
        else if(temperature == "celsius") {element2Info11.innerHTML = calculateCelsiusFromKelvin(element2.triplePointTemperatureInKelvin) + " C"}
        else if(temperature == "fahrenheit") {element2Info11.innerHTML = calculateFahrenheitFromKelvin(element2.triplePointTemperatureInKelvin) + " F"}
    if(element2.triplePointPressureInKiloPascals == "N/A") {element2Info12.innerHTML = "N/A"}
        else if(pressure == "pascals") {element2Info12.innerHTML = element2.triplePointPressureInKiloPascals + " kPa"}
        else if(pressure == "atm") {element2Info12.innerHTML = calculateATMFromKiloPascals(element2.triplePointPressureInKiloPascals) + " atm"}
        else if(pressure == "mmhg") {element2Info12.innerHTML = calculateMMHGFromKiloPascals(element2.triplePointPressureInKiloPascals) + " mmHg"}
        else if(pressure == "torr") {element2Info12.innerHTML = calculateTORRFromKiloPascals(element2.triplePointPressureInKiloPascals) + " torr"} 
    if(element2.criticalPointTemperatureInKelvin == "N/A") {element2Info13.innerHTML = "N/A"}
        else if(temperature == "kelvin") {element2Info13.innerHTML = element2.criticalPointTemperatureInKelvin + " K"}
        else if(temperature == "celsius") {element2Info13.innerHTML = calculateCelsiusFromKelvin(element2.criticalPointTemperatureInKelvin) + " C"}
        else if(temperature == "fahrenheit") {element2Info13.innerHTML = calculateFahrenheitFromKelvin(element2.criticalPointTemperatureInKelvin) + " F"}
    if(element2.criticalPointPressureInMegaPascals == "N/A") {element2Info14.innerHTML = "N/A"}
        else if(pressure == "pascals") {element2Info14.innerHTML = element2.criticalPointPressureInMegaPascals + " MPa"}
        else if(pressure == "atm") {element2Info14.innerHTML = calculateATMFromMegaPascals(element2.criticalPointPressureInMegaPascals) + " atm"}
        else if(pressure == "mmhg") {element2Info14.innerHTML = calculateMMHGFromMegaPascals(element2.criticalPointPressureInMegaPascals) + " mmHg"}
        else if(pressure == "torr") {element2Info14.innerHTML = calculateMMHGFromMegaPascals(element2.criticalPointPressureInMegaPascals) + " torr"}
    if(element2.heatOfFusion == "N/A") {element2Info15.innerHTML = "N/A"}
        else {element2Info15.innerHTML = element2.heatOfFusion + " kJ/mol"}
    if(element2.heatOfVaporization == "N/A") {element2Info16.innerHTML = "N/A"}
        else {element2Info16.innerHTML = element2.heatOfVaporization + " kJ/mol"}   
    if(element2.stateAtSTP == "gas") {element2Info18.innerHTML = element2.densityAtSTP + " g/L"}
        else {element2Info18.innerHTML = element2.densityAtSTP + " g/cm^3"}
    if(element2.molarHeatCapacity == "N/A") {element2Info19.innerHTML = "N/A"}
        else {element2Info19.innerHTML = element2.molarHeatCapacity + " J/(molK)"}
}


//TEMPERATURE FUNCTIONS
function calculateCelsiusFromFahrenheit(fahrenheit) {
    return round(((parseFloat(fahrenheit) - 32) / 1.8), 3)
}
function calculateFahrenheitFromCelsius(celsius) {
    return round(((1.8 * parseFloat(celsius)) + 32), 3)
}
function calculateCelsiusFromKelvin(kelvin) {
    return round((parseFloat(kelvin) - 273.15), 3)
}
function calculateFahrenheitFromKelvin(kelvin) {
    return round((1.8 * (kelvin - 273.15) + 32), 3)
}

//PRESSURE FUNCTIONS
function calculateATMFromKiloPascals(kPa) {
    return round((kPa / 101.325), 3)
}
function calculateMMHGFromKiloPascals(kPa) {
    return round((760 * kPa / 101.325), 3)
}
function calculateTORRFromKiloPascals(kPa) {
    return round((760 * kPa / 101.325), 3)
}
function calculateATMFromMegaPascals(MPa) {
    return round((MPa * 1000 / 101.325), 3)
}
function calculateMMHGFromMegaPascals(MPa) {
    return round((760000 * MPa / 101.325), 3)
}
function calculateTORRFromMegaPascals(MPa) {
    return round((760000 * MPa / 101.325), 3)
}

//ROUNDING FUNCTION
function round(number, decimalPlaces) {
    return (Math.round(number * 10 ** decimalPlaces) / (10 ** decimalPlaces))
}

//STARTING FUNCTION
function startup() {
    displayData("hydrogen", "helium", "kelvin", "pascals")
}

//CHANGE FUNCTION
function refresh() {
    temperature = document.getElementById("temperatureSelect").value.toLowerCase()
    pressure = document.getElementById("pressureSelect").value.toLowerCase()
    elementInput1 = document.getElementById("inputElement1").value
    elementInput2 = document.getElementById("inputElement2").value
    for (let i in ELEMENTDATA) {
        if(ELEMENTDATA[i].symbol.toLowerCase() == elementInput1.toLowerCase()) {
            firstElement = i
        }
        if(ELEMENTDATA[i].symbol.toLowerCase() == elementInput2.toLowerCase()) {
            secondElement = i
        }
        if(ELEMENTDATA[i].name.toLowerCase() == elementInput1.toLowerCase()) {
            firstElement = i
        }
        if(ELEMENTDATA[i].name.toLowerCase() == elementInput2.toLowerCase()) {
            secondElement = i
        }
        if(ELEMENTDATA[i].number == parseInt(elementInput1)) {
            firstElement = i
        }
        if(ELEMENTDATA[i].number == parseInt(elementInput2)) {
            secondElement = i
        }
    }
    displayData(firstElement, secondElement, temperature, pressure)
}

/**
 * Grabs the element data from JSON file
 */
function setupElementData() {
    fetch("../elements.json")
        .then(response => response.json())
        .then(data => {
            ELEMENTDATA = data;
            startup();
        });
}