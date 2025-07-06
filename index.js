let convertBtn = document.getElementById("convert-btn")
let boxEl = document.getElementById("box-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281 
const litreToGallon = 0.264
const kiloToPound = 2.204 

convertBtn.addEventListener("click", function() {
    let baseValue = boxEl.value 

    lengthEl.textContent = `${baseValue} meter = ${parseFloat((baseValue * meterToFeet).toFixed(3))} feet`
    volumeEl.textContent = `${baseValue} litre = ${parseFloat((baseValue * litreToGallon).toFixed(3))} gallon`
    massEl.textContent = `${baseValue} kilo = ${parseFloat((baseValue * kiloToPound).toFixed(3))} pound`
})