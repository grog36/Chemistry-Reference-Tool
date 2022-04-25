//Multiple Choice Questions
//Gregory Ecklund (March 2022)

//DEFINE ATOMIC WEIGHTS
const atomicWeightsWithElementName = {
    "hydrogen": 1.00797,
    "helium": 4.00260,
    "lithium": 6.941,
    "beryllium": 9.01218,
    "boron": 10.81,
    "carbon": 12.011,
    "nitrogen": 14.0067,
    "oxygen": 15.9994,
    "fluorine": 18.998403,
    "neon": 20.179,
    "sodium": 22.98977,
    "magnesium": 24.305,
    "aluminium": 26.98154,
    "silicon": 28.0855,
    "phosphorus": 30.97376,
    "sulfur": 32.06,
    "chlorine": 35.453,
    "argon": 39.948,
    "potassium": 39.0983,
    "calcium": 40.08,
    "scandium": 44.9559,
    "titanium": 47.90,
    "vanadium": 50.9415,
    "chromium": 51.996,
    "manganese": 54.9380,
    "iron": 55.847,
    "cobalt": 58.9332,
    "nickel": 58.70,
    "copper": 63.546,
    "zinc": 65.38,
    "gallium": 69.72,
    "germanium": 72.59,
    "arsenic": 74.9216,
    "selenium": 78.96,
    "bromine": 79.904,
    "krypton": 83.80,
    "rubidium": 85.4678,
    "strontium": 87.62,
    "yttrium": 88.9059,
    "zirconium": 91.22,
    "niobium": 92.9064,
    "molybdenum": 95.94,
    "technetium": 98,
    "ruthenium": 101.07,
    "rhodium": 102.9055,
    "palladium": 106.4,
    "silver": 107.868,
    "cadmium": 112.41,
    "indium": 114.82,
    "tin": 118.69,
    "antimony": 121.75,
    "tellurium": 127.60,
    "iodine": 126.9045,
    "xenon": 131.30,
    "cesium": 132.9054,
    "barium": 137.33,
    "lanthanum": 138.9055,
    "cerium": 140.12,
    "praseodymium": 140.9077,
    "neodymium": 144.24,
    "promethium": 145,
    "samarium": 150.4,
    "europium": 151.96,
    "gadolinium": 157.25,
    "terbium": 158.9254,
    "dysprosium": 162.50,
    "holmium": 164.9304,
    "erbium": 167.26,
    "thulium": 168.9342,
    "ytterbium": 173.04,
    "lutetium": 174.967,
    "hafnium": 178.49,
    "tantalum": 180.9479,
    "tungsten": 183.85,
    "rhenium": 186.207,
    "osmium": 190.2,
    "iridium": 192.22,
    "platinum": 195.09,
    "gold": 196.9665,
    "mercury": 200.59,
    "thallium": 204.37,
    "lead": 207.2,
    "bismuth": 208.9804,
    "polonium": 209,
    "astatine": 210,
    "radon": 222,
    "francium": 223,
    "radium": 226.0254,
    "actinium": 227.0278,
    "thorium": 232.0381,
    "protactinium": 231.0359,
    "uranium": 238.029,
    "neptunium": 237.0482,
    "plutonium": 242,
    "americium": 243,
    "curium": 247,
    "berkelium": 247,
    "californium": 251,
    "einsteinium": 252,
    "fermium": 257,
    "mendelevium": 258,
    "nobelium": 250,
    "lawrencium": 260,
    "rutherfordium": 261,
    "dubnium": 262,
    "seaborgium": 263,
    "bohrium": 262,
    "hassium": 255,
    "meitnerium": 256,
    "darmstadtium": 281,
    "roentgenium": 282,
    "copernicium": 285,
    "nihonium": 286,
    "flerovium": 289,
    "moscovium": 290,
    "livermorium": 293,
    "tennessine": 294,
    "oganesson": 294
}
const atomicWeightsWithElementSymbol = {
    "h": 1.00797,
    "he": 4.00260,
    "li": 6.941,
    "be": 9.01218,
    "b": 10.81,
    "c": 12.011,
    "n": 14.0067,
    "o": 15.9994,
    "f": 18.998403,
    "ne": 20.179,
    "na": 22.98977,
    "mg": 24.305,
    "al": 26.98154,
    "si": 28.0855,
    "p": 30.97376,
    "s": 32.06,
    "cl": 35.453,
    "ar": 39.948,
    "k": 39.0983,
    "ca": 40.08,
    "sc": 44.9559,
    "ti": 47.90,
    "v": 50.9415,
    "cr": 51.996,
    "mn": 54.9380,
    "fe": 55.847,
    "co": 58.9332,
    "ni": 58.70,
    "cu": 63.546,
    "zn": 65.38,
    "ga": 69.72,
    "ge": 72.59,
    "as": 74.9216,
    "se": 78.96,
    "br": 79.904,
    "kr": 83.80,
    "rb": 85.4678,
    "sr": 87.62,
    "y": 88.9059,
    "zr": 91.22,
    "nb": 92.9064,
    "mo": 95.94,
    "tc": 98,
    "ru": 101.07,
    "rh": 102.9055,
    "pd": 106.4,
    "ag": 107.868,
    "cd": 112.41,
    "in": 114.82,
    "sn": 118.69,
    "sb": 121.75,
    "te": 127.60,
    "i": 126.9045,
    "xe": 131.30,
    "cs": 132.9054,
    "ba": 137.33,
    "la": 138.9055,
    "ce": 140.12,
    "pr": 140.9077,
    "nd": 144.24,
    "pm": 145,
    "sm": 150.4,
    "eu": 151.96,
    "gd": 157.25,
    "tb": 158.9254,
    "dy": 162.50,
    "ho": 164.9304,
    "er": 167.26,
    "tm": 168.9342,
    "yb": 173.04,
    "lu": 174.967,
    "hf": 178.49,
    "ta": 180.9479,
    "w": 183.85,
    "re": 186.207,
    "os": 190.2,
    "ir": 192.22,
    "pt": 195.09,
    "au": 196.9665,
    "hg": 200.59,
    "tl": 204.37,
    "pb": 207.2,
    "bi": 208.9804,
    "po": 209,
    "at": 210,
    "rn": 222,
    "fr": 223,
    "ra": 226.0254,
    "ac": 227.0278,
    "th": 232.0381,
    "pa": 231.0359,
    "u": 238.029,
    "np": 237.0482,
    "pu": 242,
    "am": 243,
    "cm": 247,
    "bk": 247,
    "cf": 251,
    "es": 252,
    "fm": 257,
    "md": 258,
    "no": 250,
    "lr": 260,
    "rf": 261,
    "db": 262,
    "sg": 263,
    "bh": 262,
    "hs": 255,
    "mt": 256,
    "ds": 281,
    "rg": 282,
    "cn": 285,
    "nh": 286,
    "fl": 289,
    "mc": 290,
    "lv": 293,
    "ts": 294,
    "og": 294
}

//CALCULATE FUNCTION
function calculate() {
    let massList1 = []
    let massList2 = []
    for (i = 1; i < 6; i++) {
        let currentElement1 = document.getElementById(`compound1Input${i}`).value.toLowerCase()
        let currentElement2 = document.getElementById(`compound2Input${i}`).value.toLowerCase()
        let currentCount1 = parseInt(document.getElementById(`compound1Count${i}`).value)
        let currentCount2 = parseInt(document.getElementById(`compound2Count${i}`).value)
        let inputList = [currentElement1, currentElement2]
        let countList = [currentCount1, currentCount2]
        for (let j in inputList) {
            if (j == 0) {
                if (atomicWeightsWithElementName[inputList[0]] != undefined) {
                    massList1.push(atomicWeightsWithElementName[inputList[0]] * countList[0])
                }
                else if (atomicWeightsWithElementSymbol[inputList[0]] != undefined) {
                    massList1.push(atomicWeightsWithElementSymbol[inputList[0]] * countList[0])
                }
                else if (inputList[0] != "") {
                    console.log("INVALID ELEMENT") //MAKE THIS READABLE TO USER SOMEHOW (<p>)
                }
            }
            else if (j == 1) {
                if (atomicWeightsWithElementName[inputList[1]] != undefined) {
                    massList2.push(atomicWeightsWithElementName[inputList[1]] * countList[1])
                }
                else if (atomicWeightsWithElementSymbol[inputList[1]] != undefined) {
                    massList2.push(atomicWeightsWithElementSymbol[inputList[1]] * countList[1])
                }
                else if (inputList[1] != "") {
                    console.log("INVALID ELEMENT") //MAKE THIS READABLE TO USER SOMEHOW (<p>)
                }
            }
        }
    }
    let compound1Mass = 0
    let compound2Mass = 0
    for (i of massList1) {
        compound1Mass += i
    }
    for (i of massList2) {
        compound2Mass += i
    }
    
    let compound1Grams = parseFloat(document.getElementById("compound1Grams").value)
    const MOLE_RATIO = (parseFloat(document.getElementById("compound2Moles").value) / parseFloat(document.getElementById("compound1Moles").value))
    let compound2Grams = (compound1Grams * compound2Mass * MOLE_RATIO / compound1Mass)
    document.getElementById("compound2Grams").innerHTML = compound2Grams
}

//KEY PRESSED
document.addEventListener("keydown", keyIsPressed)
function keyIsPressed(e) {
    switch (e.keyCode) {
        case 37:    //Left Key Press
            selectLeftElement(document.activeElement.id)
            break
        case 38:    //Up Key Press
            selectAboveElement(document.activeElement.id)
            break
        case 39:    //Right Key Press
            selectRightElement(document.activeElement.id)
            break
        case 40:    //Down Key Press
            selectBelowElement(document.activeElement.id)
            break
        case 13:    //Enter Key Press
            document.getElementById("calculateButton").focus()
            calculate()
            break
    }
}
function selectAboveElement(currentElementId) {
    if (currentElementId.includes("compound1Input")) {
        let number = parseInt(currentElementId.split("compound1Input")[1])
        if (number != 1) {
            let nextNumber = number - 1
            document.getElementById(`compound1Input${nextNumber}`).focus()
        }
    }
    else if (currentElementId.includes("compound1Count")) {
        let number = parseInt(currentElementId.split("compound1Count")[1])
        if (number != 1) {
            let nextNumber = number - 1
            document.getElementById(`compound1Count${nextNumber}`).focus()
        }
    }
    else if (currentElementId.includes("compound2Input")) {
        let number = parseInt(currentElementId.split("compound2Input")[1])
        if (number != 1) {
            let nextNumber = number - 1
            document.getElementById(`compound2Input${nextNumber}`).focus()
        }
    }
    else if (currentElementId.includes("compound2Count")) {
        let number = parseInt(currentElementId.split("compound2Count")[1])
        if (number != 1) {
            let nextNumber = number - 1
            document.getElementById(`compound2Count${nextNumber}`).focus()
        }
    }
    else if (currentElementId == "compound1Moles") {
        document.getElementById("compound1Count5").focus()
    }
    else if (currentElementId == "compound2Moles") {
        document.getElementById("compound2Count5").focus()
    }
    else if (currentElementId == "compound1Grams") {
        document.getElementById("compound1Moles").focus()
    }
}
function selectBelowElement(currentElementId) {
    if (currentElementId == "compound1Count5") {
        document.getElementById("compound1Moles").focus()
    }
    else if (currentElementId == "compound2Count5") {
        document.getElementById("compound2Moles").focus()
    }
    else if (currentElementId == "compound1Moles") {
        document.getElementById("compound1Grams").focus()
    }
    else if (currentElementId.includes("compound1Input")) {
        let number = parseInt(currentElementId.split("compound1Input")[1])
        if (number != 5) {
            let nextNumber = number + 1
            document.getElementById(`compound1Input${nextNumber}`).focus()
        }
    }
    else if (currentElementId.includes("compound1Count")) {
        let number = parseInt(currentElementId.split("compound1Count")[1])
        if (number != 5) {
            let nextNumber = number + 1
            document.getElementById(`compound1Count${nextNumber}`).focus()
        }
    }
    else if (currentElementId.includes("compound2Input")) {
        let number = parseInt(currentElementId.split("compound2Input")[1])
        if (number != 5) {
            let nextNumber = number + 1
            document.getElementById(`compound2Input${nextNumber}`).focus()
        }
    }
    else if (currentElementId.includes("compound2Count")) {
        let number = parseInt(currentElementId.split("compound2Count")[1])
        if (number != 5) {
            let nextNumber = number + 1
            document.getElementById(`compound2Count${nextNumber}`).focus()
        }
    }
}
function selectRightElement(currentElementId) {
    if (currentElementId.includes("compound1Input")) {
        let number = parseInt(currentElementId.split("compound1Input")[1])
        document.getElementById(`compound1Count${number}`).focus()
    }
    else if (currentElementId.includes("compound1Count")) {
        let number = parseInt(currentElementId.split("compound1Count")[1])
        document.getElementById(`compound2Input${number}`).focus()
    }
    else if (currentElementId.includes("compound2Input")) {
        let number = parseInt(currentElementId.split("compound2Input")[1])
        document.getElementById(`compound2Count${number}`).focus()
    }
    else if (currentElementId == "compound1Moles") {
        document.getElementById("compound2Moles").focus()
    }
}
function selectLeftElement(currentElementId) {
    if (currentElementId.includes("compound1Count")) {
        let number = parseInt(currentElementId.split("compound1Count")[1])
        document.getElementById(`compound1Input${number}`).focus()
    }
    else if (currentElementId.includes("compound2Input")) {
        let number = parseInt(currentElementId.split("compound2Input")[1])
        document.getElementById(`compound1Count${number}`).focus()
    }
    else if (currentElementId.includes("compound2Count")) {
        let number = parseInt(currentElementId.split("compound2Count")[1])
        document.getElementById(`compound2Input${number}`).focus()
    }
    else if (currentElementId == "compound2Moles") {
        document.getElementById("compound1Moles").focus()
    }
}
