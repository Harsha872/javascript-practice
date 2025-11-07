let backgroundColor=document.getElementById("colorPickerContainer");
let changeHexcode=document.getElementById("selectedColorHexCode");

function changeBgToGrey(){
    backgroundColor.style.backgroundColor="#e0e0e0";
    changeHexcode.textContent="#e0e0e0";
    changeHexcode.style.color="#49a6e9";
}
function changeBgToGreen(){
    backgroundColor.style.backgroundColor="#6fcf97";
    changeHexcode.textContent="#6fcf97";
    changeHexcode.style.color="#49a6e9";
}
function changeBgToBlue(){
    backgroundColor.style.backgroundColor="#56ccf2";
    changeHexcode.textContent="#56ccf2";
    changeHexcode.style.color="#49a6e9";
}
function changeBgToViolet(){
    backgroundColor.style.backgroundColor="#bb6bd9";
    changeHexcode.textContent="#bb6bd9";
    changeHexcode.style.color="#49a6e9";
}