// Class implementation of the calculator
let preVal = "";
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
            newVal = num;
            console.log(newVal);
        }
    }
    document.getElementById("entry").value = newVal;
}

function mathBtnPress(operator) {

}

function equalBtnPress() {

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
    btn.addEventListener("click", () => { mathBtnPress(btn.dataset.symbol); });
}

equalBtn.addEventListener("click", equalBtnPress);