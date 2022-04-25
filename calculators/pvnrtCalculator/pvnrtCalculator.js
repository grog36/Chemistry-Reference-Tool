//Gregory Ecklund
//March 2022

//VARS
let solutionVariable = "Pressure"

const UNITS = {
    "pressure": ["atm", "torr", "mmHg", "pasc", "kilopasc"],
    "volume": ["cm^3", "mL", "L", "m^3"],
    "moles": ["moles"],
    "temperature": ["Kelvin", "&#176Celsius", "&#176Fahrenheit"],
    "r": ["(L&timesatm)/(moles&timesKelvin)"]
}

const DATA = {
    "Pressure": 0,
    "PressureUnits": "",
    "Volume": 0,
    "VolumeUnits": "",
    "Moles": 0,
    "MolesUnits": "",
    "Temperature": 0,
    "TemperatureUnits": "",
    "R": 0,
    "RUnits": ""
}

function resetData() {
    DATA.Pressure = 0
    DATA.PressureUnits = ""
    DATA.Volume = 0
    DATA.VolumeUnits = ""
    DATA.Moles = 0
    DATA.MolesUnits = ""
    DATA.Temperature = 0
    DATA.TemperatureUnits = ""
    DATA.R = 0
    DATA.RUnits = ""
}


//CREATES A NEW OPTION
//var opt = document.createElement("option")  //Creates an <option> element in HTML
//opt.value = "test"  //Value given by <option>
//opt.innerHTML = "testHTML"  //HTML text given by <option>
//document.getElementById(id).appendChild(opt)   //Appends to <select>

//REMOVES AN OPTION
//document.getElementById(id).remove(0)


//Check for Solution Variable
function updateSolutionVariable() {
    
    removeOptions("answerUnitsSelect")
    removeOptions("units1Select")
    removeOptions("units2Select")
    removeOptions("units3Select")
    removeOptions("units4Select")
    solutionVariable = document.getElementById("solutionVariableSelect").value.split("Solve for ")[1]
    document.getElementById("answerVariable").innerHTML = solutionVariable
    for (let i in UNITS) {
        if (i == solutionVariable.toLowerCase()) {
            for (j of UNITS[i]) {
                let newOption = document.createElement("option")
                newOption.value = j
                newOption.innerHTML = j
                document.getElementById("answerUnitsSelect").appendChild(newOption)
            }
        }
    }
    updateTable()
}


function updateTable() {
    document.getElementById("value1Input").value = ""
    document.getElementById("value2Input").value = ""
    document.getElementById("value3Input").value = ""
    document.getElementById("value4Input").value = ""
    switch (solutionVariable) {
        case "Pressure":
            document.getElementById("variable1").innerHTML = "Volume"
            applySelectTags("volume", "units1Select")
            document.getElementById("variable2").innerHTML = "Moles"
            applySelectTags("moles", "units2Select")
            document.getElementById("variable3").innerHTML = "R Constant"
            applySelectTags("r", "units3Select")
            document.getElementById("variable4").innerHTML = "Temperature"
            applySelectTags("temperature", "units4Select")
            break
        case "Volume":
            document.getElementById("variable1").innerHTML = "Pressure"
            applySelectTags("pressure", "units1Select")
            document.getElementById("variable2").innerHTML = "Moles"
            applySelectTags("moles", "units2Select")
            document.getElementById("variable3").innerHTML = "R Constant"
            applySelectTags("r", "units3Select")
            document.getElementById("variable4").innerHTML = "Temperature"
            applySelectTags("temperature", "units4Select")
            break
        case "Moles":
            document.getElementById("variable1").innerHTML = "Pressure"
            applySelectTags("pressure", "units1Select")
            document.getElementById("variable2").innerHTML = "Volume"
            applySelectTags("volume", "units2Select")
            document.getElementById("variable3").innerHTML = "R Constant"
            applySelectTags("r", "units3Select")
            document.getElementById("variable4").innerHTML = "Temperature"
            applySelectTags("temperature", "units4Select")
            break
        case "R":
            document.getElementById("variable1").innerHTML = "Pressure"
            applySelectTags("pressure", "units1Select")
            document.getElementById("variable2").innerHTML = "Volume"
            applySelectTags("volume", "units2Select")
            document.getElementById("variable3").innerHTML = "Moles"
            applySelectTags("moles", "units3Select")
            document.getElementById("variable4").innerHTML = "Temperature"
            applySelectTags("temperature", "units4Select")
            break
        case "Temperature":
            document.getElementById("variable1").innerHTML = "Pressure"
            applySelectTags("pressure", "units1Select")
            document.getElementById("variable2").innerHTML = "Volume"
            applySelectTags("volume", "units2Select")
            document.getElementById("variable3").innerHTML = "Moles"
            applySelectTags("moles", "units3Select")
            document.getElementById("variable4").innerHTML = "R Constant"
            applySelectTags("r", "units4Select")
            break
    }
    calculate()
}

function applySelectTags(units, selectionId) {
    for (j of UNITS[units]) {
        let newOption = document.createElement("option")
        newOption.value = j
        newOption.innerHTML = j
        document.getElementById(selectionId).appendChild(newOption)
    }
}

function removeOptions(selectionId) {
    for (let i in document.getElementById(selectionId)) {
        document.getElementById(selectionId).remove(0)
    }
}



function calculate() {
    resetData()
    switch (solutionVariable) {
        case "Pressure":
            DATA.PressureUnits = document.getElementById("answerUnitsSelect").value
            DATA.Volume = parseFloat(document.getElementById("value1Input").value)
            DATA.VolumeUnits = document.getElementById("units1Select").value
            DATA.Moles = parseFloat(document.getElementById("value2Input").value)
            DATA.MolesUnits = document.getElementById("units2Select").value
            DATA.R = parseFloat(document.getElementById("value3Input").value)
            DATA.RUnits = document.getElementById("units3Select").value
            DATA.Temperature = parseFloat(document.getElementById("value4Input").value)
            DATA.TemperatureUnits = document.getElementById("units4Select").value
            break
        case "Volume":
            DATA.VolumeUnits = document.getElementById("answerUnitsSelect").value
            DATA.Pressure = parseFloat(document.getElementById("value1Input").value)
            DATA.PressureUnits = document.getElementById("units1Select").value
            DATA.Moles = parseFloat(document.getElementById("value2Input").value)
            DATA.MolesUnits = document.getElementById("units2Select").value
            DATA.R = parseFloat(document.getElementById("value3Input").value)
            DATA.RUnits = document.getElementById("units3Select").value
            DATA.Temperature = parseFloat(document.getElementById("value4Input").value)
            DATA.TemperatureUnits = document.getElementById("units4Select").value
            break
        case "Moles":
            DATA.MolesUnits = document.getElementById("answerUnitsSelect").value
            DATA.Pressure = parseFloat(document.getElementById("value1Input").value)
            DATA.PressureUnits = document.getElementById("units1Select").value
            DATA.Volume = parseFloat(document.getElementById("value2Input").value)
            DATA.VolumeUnits = document.getElementById("units2Select").value
            DATA.R = parseFloat(document.getElementById("value3Input").value)
            DATA.RUnits = document.getElementById("units3Value").value
            DATA.Temperature = parseFloat(document.getElementById("value4Input").value)
            DATA.TemperatureUnits = document.getElementById("units4Select").value
            break
        case "R":
            DATA.RUnits = document.getElementById("answerUnitsSelect").value
            DATA.Pressure = parseFloat(document.getElementById("value1Input").value)
            DATA.PressureUnits = document.getElementById("units1Select").value
            DATA.Volume = parseFloat(document.getElementById("value2Input").value)
            DATA.VolumeUnits = document.getElementById("units2Select").value
            DATA.Moles = parseFloat(document.getElementById("value3Input").value)
            DATA.MolesUnits = document.getElementById("units3Select").value
            DATA.Temperature = parseFloat(document.getElementById("value4Input").value)
            DATA.TemperatureUnits = document.getElementById("units4Select").value
            break
        case "Temperature":
            DATA.TemperatureUnits = document.getElementById("answerUnitsSelect").value
            DATA.Pressure = parseFloat(document.getElementById("value1Input").value)
            DATA.PressureUnits = document.getElementById("units1Select").value
            DATA.Volume = parseFloat(document.getElementById("value2Input").value)
            DATA.VolumeUnits = document.getElementById("units2Select").value
            DATA.Moles = parseFloat(document.getElementById("value3Input").value)
            DATA.MolesUnits = document.getElementById("units3Select").value
            DATA.R = parseFloat(document.getElementById("value4Input").value)
            DATA.RUnits = document.getElementById("units4Select").value
            break
    }
    console.log(DATA)
}

document.addEventListener("keydown", keyIsPressed)
function keyIsPressed(e) {
    switch (e.keyCode) {
        case 38:    //Up
            break
        case 40:    //Down
            break
        case 13:    //Enter
            break
    }
}





//On Startup
updateSolutionVariable()