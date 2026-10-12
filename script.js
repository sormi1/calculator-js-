const CalcDisplay = document.querySelector("#display");


function calcFunc(paraOne) {
    CalcDisplay.value += paraOne;
}

function clearAll() {
    CalcDisplay.value = "";
}

function answerAll() {
    let ourValue = CalcDisplay.value;
    let calcValue = eval(ourValue);
    CalcDisplay.value = calcValue;
}