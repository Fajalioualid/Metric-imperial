/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let Inp = document.getElementById("inp")
let Gr1 = document.getElementById("gr1")
let Gr2 = document.getElementById("gr2")
let Gr3 = document.getElementById("gr3")
function get(){
    let meter = Number(Inp.value) *3.281  
    let feet = Number(Inp.value)/3.281
    Gr1.textContent = `${meter.toFixed(2)} fett  || ${feet.toFixed(2)} meters`
}
function getL(){
    let Litters = Number(Inp.value) *0.264  
    let Gallons = Number(Inp.value) /0.264
    Gr2.textContent = `${Litters.toFixed(2)} Litters  || ${Gallons.toFixed(2)} Gallons`
}
function getK(){
    let Kilograms = Number(Inp.value) *2.204  
    let Pounds = Number(Inp.value) /2.204
    Gr3.textContent = `${Kilograms.toFixed(2)} Kilograms  || ${Pounds.toFixed(2)} Pounds`
}