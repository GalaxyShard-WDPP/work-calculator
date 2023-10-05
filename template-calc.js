// Class implementation of the calculator
let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";

let decimalClicked = false;

let valMemStored = "";


function numBtnPress(num) {
    if (resultVal) {
        newVal = num;
        resultVal = "";
    } else {
        if (num === ".") {
            if (!decimalClicked) {
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
    document.getElementById("entry").value = newVal;
}

function mathBtnPress(operator) {
    if (!resultVal) {
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    document.getElementById("entry").value = "";
}

function equalBtnPress() {
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch (mathOperator) {
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        default:
            resultVal = newVal;
            break;
    }
    prevVal = newVal;

    document.getElementById("entry").value = resultVal;

}

function clearBtnPress() {
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";
}

function copyBtnPress() {
    valMemStored = document.getElementById("entry").value;
}
function pasteBtnPress() {
    document.getElementById("entry").value = valMemStored;
}


// add event listeners
let mathBtns = document.getElementsByClassName("math-btn");
let numBtns = document.getElementsByClassName("num-btn");
let equalBtn = document.getElementsByClassName("equal-btn")[0];
let entry = document.getElementById("entry");
for (let btn of numBtns) {
    btn.addEventListener("click", () => { numBtnPress(btn.dataset.symbol); });

}
for (let btn of mathBtns) {
    if (btn.dataset.symbol === "AC") {
        btn.addEventListener("click", () => { clearBtnPress(); });
    } else if (btn.dataset.symbol === "MC") {
        btn.addEventListener("click", () => { copyBtnPress(); });
    } else if (btn.dataset.symbol === "MP") {
        btn.addEventListener("click", () => { pasteBtnPress(); });
    } else {
        btn.addEventListener("click", () => { mathBtnPress(btn.dataset.symbol); });
    }
}

equalBtn.addEventListener("click", equalBtnPress);