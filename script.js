function charaCterLength(input){
    input.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${input.value}%, #18171F ${input.value}%, #18171F 100%)`
}

let passwordResult = document.querySelector("#passwordResult");


let slider = document.querySelector("#slider");
let slidersNumber = document.querySelector(".characterLengthSide div h3");

let uppercaseInput = document.querySelector("#upperCase")
let lowercaseInput = document.querySelector("#lowerCase")
let numbersInput = document.querySelector("#numbers")
let symbolsInput = document.querySelector("#symbols")

let passwordRate = document.querySelector("#passwordRate");


let generateBtn = document.querySelector("button")

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()-_+={}[]|\\:;\"',.<>/?";






let passwordLength;
function sliderValue(){
    passwordLength = Math.round((slider.value)/5);
    slidersNumber.textContent = passwordLength
    if (passwordLength > 0) {
        generateBtn.style.background = "#24232C";
        generateBtn.style.color = "#A4FFAF";
    }else{
        generateBtn.style.background = "";
        generateBtn.style.color = "";
    }
}
slider.addEventListener("input", sliderValue);


function generatePassword(){
    let charsForPassword = "";

    if (uppercaseInput.checked) {
        charsForPassword += upperCase;
    }
    if (lowercaseInput.checked) {
        charsForPassword += lowerCase;
    }
    if (numbersInput.checked) {
        charsForPassword += numbers;
    }
    if (symbolsInput.checked) {
        charsForPassword += symbols;
    }

    let password = "";
    for(let i = 0; i < passwordLength; i++){
        let randomNum = Math.floor(Math.random() * charsForPassword.length);
        password += charsForPassword[randomNum]
    }

    passwordResult.value = password
    passwordCopiedOrNot.style.display = "";
    if (charsForPassword.length === 0) {
        alert("empty inputs")
    }
}


let allIncludes = document.querySelectorAll(".container input");
let boxesParent = document.querySelectorAll(".boxesParent div");

allIncludes.forEach(function(passwordStrength){
    passwordStrength.addEventListener("input", function(){
        checkedCheckboxes = document.querySelectorAll(".container input:checked");
        if (checkedCheckboxes.length === 0) {
            passwordRate.textContent = "";
            boxesParent[0].style.background = "";
            boxesParent[0].style.borderColor = "";
            boxesParent[1].style.background = "";
            boxesParent[1].style.borderColor = "";
            boxesParent[2].style.background = "";
            boxesParent[2].style.borderColor = "";
            boxesParent[3].style.background = "";
            boxesParent[3].style.borderColor = "";
            passwordCopiedOrNot.style.display = "";
            generateBtn.style.background = ""
            generateBtn.style.color = ""
        }else if (checkedCheckboxes.length === 1) {
            passwordRate.textContent = "too weak!";
            boxesParent[0].style.background = "#F64A4A";
            boxesParent[0].style.borderColor = "#F64A4A";
            boxesParent[1].style.background = "";
            boxesParent[1].style.borderColor = "";
            boxesParent[2].style.background = "";
            boxesParent[2].style.borderColor = "";
            boxesParent[3].style.background = "";
            boxesParent[3].style.borderColor = "";
            passwordCopiedOrNot.style.display = "";
            generateBtn.style.background = "#24232C";
            generateBtn.style.color = "#A4FFAF";;
            generateBtn.style.color = "#A4FFAF";
        }else if(checkedCheckboxes.length === 2){
            passwordRate.textContent = "weak" ;
            boxesParent[0].style.background = "#FB7C58";
            boxesParent[0].style.borderColor = "#FB7C58";
            boxesParent[1].style.background = "#FB7C58";
            boxesParent[1].style.borderColor = "#FB7C58";
            boxesParent[2].style.background = "";
            boxesParent[2].style.borderColor = "";
            boxesParent[3].style.background = "";
            boxesParent[3].style.borderColor = "";
            passwordCopiedOrNot.style.display = "";
            generateBtn.style.background = "#24232C";
            generateBtn.style.color = "#A4FFAF";
        }else if(checkedCheckboxes.length === 3){
            passwordRate.textContent = "medium";
            boxesParent[0].style.background = "#F8CD65";
            boxesParent[0].style.borderColor = "#F8CD65";
            boxesParent[1].style.background = "#F8CD65";
            boxesParent[1].style.borderColor = "#F8CD65";
            boxesParent[2].style.background = "#F8CD65";
            boxesParent[2].style.borderColor = "#F8CD65";
            boxesParent[3].style.background = "";
            boxesParent[3].style.borderColor = "";
            passwordCopiedOrNot.style.display = "";
            generateBtn.style.background = "#24232C";
            generateBtn.style.color = "#A4FFAF";
        }else if(checkedCheckboxes.length === 4){
            passwordRate.textContent = "strong";
            boxesParent[0].style.background = "#A4FFAF";
            boxesParent[0].style.borderColor = "#A4FFAF";
            boxesParent[1].style.background = "#A4FFAF";
            boxesParent[1].style.borderColor = "#A4FFAF";
            boxesParent[2].style.background = "#A4FFAF";
            boxesParent[2].style.borderColor = "#A4FFAF";
            boxesParent[3].style.background = "#A4FFAF";
            boxesParent[3].style.borderColor = "#A4FFAF";
            passwordCopiedOrNot.style.display = "";
            generateBtn.style.background = "#24232C";
            generateBtn.style.color = "#A4FFAF";
        }
    })
})



let passwordCopySymbol = document.querySelector(".resultSide div label");
let passwordCopiedOrNot = document.querySelector(".resultSide div h6");



function copyText(){
    let copyElement = document.getElementById("passwordResult");
    let tempInput = document.createElement("input");
    tempInput.value = copyElement.value;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    passwordCopiedOrNot.style.display = "block";
}   