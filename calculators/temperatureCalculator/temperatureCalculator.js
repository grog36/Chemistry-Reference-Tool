//Multiple Choice Questions
//Gregory Ecklund (March 2022)

//DEFINE CONSTANTS & VARS
const INFO = document.getElementById("info")
const INPUT = document.getElementById("input")
const OUTPUT1 = document.getElementById("output1")
const OUTPUT2 = document.getElementById("output2")
const LABEL = document.getElementById("label")
var currentCalc = -1

//CALCULATION FUNCTIONS
function calculateCelsiusFromFahrenheit(fahrenheit) {
    return ((parseFloat(fahrenheit) - 32) / 1.8)
}
function calculateKelvinFromCelsius(celsius) {
    return (parseFloat(celsius) + 273.15)
}
function calculateFahrenheitFromCelsius(celsius) {
    return ((1.8 * parseFloat(celsius)) + 32)
}
function calculateCelsiusFromKelvin(kelvin) {
    return (parseFloat(kelvin) - 273.15)
}
function calculateFahrenheitFromKelvin(kelvin) {
    return calculateFahrenheitFromCelsius(calculateCelsiusFromKelvin(kelvin))
}
function calculateKelvinFromFahrenheit(fahrenheit) {
    return calculateKelvinFromCelsius(calculateCelsiusFromFahrenheit(fahrenheit))
}

//CHANGE THE SCREEN
function change() {
    OUTPUT1.style.visibility = "hidden"
    OUTPUT2.style.visibility = "hidden"

    if (currentCalc != 2) {currentCalc += 1}
    else {currentCalc = 0}

    if (currentCalc == 0) {
        INFO.innerHTML = "Fahrenheit to Celsius/Kelvin"
        LABEL.innerHTML = "Fahrenheit: "
    }
    else if (currentCalc == 1) {
        INFO.innerHTML = "Celsius to Fahrenheit/Kelvin"
        LABEL.innerHTML = "Celsius: "
    }
    else {
        INFO.innerHTML = "Kelvin to Fahrenheit/Celsius"
        LABEL.innerHTML = "Kelvin: "
    }
}

//CALCULATE USING HELPER FUNCTIONS ABOVE 
function calculate() {
    if (currentCalc == 0) {
        let fahrenheit = INPUT.value
        let celsius = calculateCelsiusFromFahrenheit(fahrenheit)
        let kelvin = calculateKelvinFromFahrenheit(fahrenheit)
        OUTPUT1.innerHTML = `Celsius: ${celsius}`
        OUTPUT2.innerHTML = `Kelvin: ${kelvin}`
    }
    else if (currentCalc == 1) {
        let celsius = INPUT.value
        let fahrenheit = calculateFahrenheitFromCelsius(celsius)
        let kelvin = calculateKelvinFromCelsius(celsius)
        OUTPUT1.innerHTML = `Fahrenheit: ${fahrenheit}`
        OUTPUT2.innerHTML = `Kelvin: ${kelvin}`
    }
    else {
        let kelvin = INPUT.value
        let fahrenheit = calculateFahrenheitFromKelvin(kelvin)
        let celsius = calculateCelsiusFromKelvin(kelvin)
        OUTPUT1.innerHTML = `Fahrenheit: ${fahrenheit}`
        OUTPUT2.innerHTML = `Celsius: ${celsius}`
    }

    OUTPUT1.style.visibility = "visible"
    OUTPUT2.style.visibility = "visible"
}

//CHANGES SCREEN ON STARTUP
change()

//KEY PRESSES
document.addEventListener("keypress", keyIsPressed)
function keyIsPressed(e) {
    if (e.keyCode == 13) {  //Enter Is Pressed
        calculate()
    }
}