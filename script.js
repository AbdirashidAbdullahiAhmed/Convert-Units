/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//** VARIABLES **//
const kilo = 2.204;
const meter = 3.281;
const liter = 0.264;
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")
const lengthEL = document.getElementById("length")
const volumeEL= document.getElementById("volume")
const massEL = document.getElementById("mass")

convertBtn.addEventListener('click', function(){
    if (isNaN(inputEl.value)){
        alert("We can't convert text, enter a number")
    }else if (inputEl.value === ""){
        alert ("please enter a number")
    }else{
        let feet = (inputEl.value * 3.281).toFixed(3)
        let meters =(inputEl.value /3.281).toFixed(3)
        lengthEL.innerHTML= "<h4>Length (Meter/Feet)</h4>" + `<p>${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meters} meters </p>`

        let gallons = (inputEl.value * 0.264).toFixed(3)
        let liters = (inputEl.value / 0.264).toFixed(3)

        volumeEL.innerHTML= "<h4><h4>Volume (Liters/Gallons)</h4></h4>" +  `<p>${inputEl.value} liters = ${gallons} gallons | ${inputEl.value} gallons = ${liters} liters  </p>`

        let kilograms = (inputEl.value * 2.204).toFixed(3)
        let  pounds = (inputEl.value / 2.204).toFixed(3)
        
        massEL.innerHTML = "<h4>Mass (Kilograms/Pounds)</h4>" + `<p>${inputEl.value} kilos = ${pounds} pounds | ${inputEl.value} pounds = ${kilograms} kilos</p>`
    }
    inputEl.value= ""
})


resetBtn.addEventListener('click', function() {
    inputEl.value = "";
    lengthEL.innerHTML = ""
    volumeEL.innerHTML = ""
    massEL.innerHTML = ""

 })

