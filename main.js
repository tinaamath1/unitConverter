/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let meterToFeet = 3.281
let literToGallon = .264 
let kilogramToPound = 2.204

let convertBtn = document.getElementById('conversion-btn')
let inputEl = document.getElementById('conversion-input')
let lengthOutputEl = document.getElementById('length-output')
let volumeOutputEl = document.getElementById('volume-output')
let massOutputEl = document.getElementById('mass-output')

convertBtn.addEventListener("click", function () {
    let inputValue = inputEl.value

    lengthOutputEl.innerHTML = `${inputValue} meters  = ${(inputValue * meterToFeet).toFixed(2)} feet | ${inputValue} feet = ${(inputValue/meterToFeet).toFixed(2)} meters`
    volumeOutputEl.innerHTML = `${inputValue} liters  = ${(inputValue * literToGallon).toFixed(2)} gallons | ${inputValue} gallons = ${(inputValue/literToGallon).toFixed(2)} liters`
    massOutputEl.innerHTML = `${inputValue} kilos = ${(inputValue * kilogramToPound).toFixed(2)} pounds | ${inputValue} pounds = ${(inputValue/kilogramToPound).toFixed(2)} kilos`

})