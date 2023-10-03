

let mathBtns = document.getElementsByClassName("math-btn");
let numBtns = document.getElementsByClassName("num-btn");
let equalBtn = document.getElementsByClassName("equal-btn")[0];
let entry = document.getElementById("entry");

let mem = null;
let savedNum = null;
let operator = null;
let clearOnNext = false;
function handleNumber(symbol) {
    if (clearOnNext) {
        entry.value = "0";
        clearOnNext = false;
    }
    let decimalPlaced = entry.value.indexOf(".") != -1;
    if (decimalPlaced) {
        if (symbol === ".") {
            return;
        }
    }
    if (entry.value === "0" && symbol !== ".") {
        entry.value = symbol;
        return;
    }
    entry.value += symbol;

}
function handleOperator(symbol) {
    if (symbol === "AC") {
        clearOnNext = false;
        savedNum = null;
        entry.value = "0";
        operator = null;
        return;
    }
    if (symbol === "MC") {
        mem = entry.value;
        return;
    }
    if (symbol === "MP") {
        if (mem !== null) {
            entry.value = mem;
        }
        return;
    }
    if (savedNum !== null) {
        handleEvaluate();
    }
    savedNum = parseFloat(entry.value);
    operator = symbol;
    clearOnNext = true;
}
function handleEvaluate() {
    if (savedNum === null) {
        return;
    }
    let num = parseFloat(entry.value);

    if (operator === "+") {
        entry.value = savedNum + num;
    } else if (operator === "-") {
        entry.value = savedNum - num;
    } else if (operator === "*") {
        entry.value = savedNum * num;
    } else if (operator === "/") {
        entry.value = savedNum / num;
    } else {
        console.error(`Error: operator '${operator}' does not exist`);
        return;
    }
    operator = null;
    savedNum = null;
}
for (let btn of numBtns) {
    btn.addEventListener("click", () => { handleNumber(btn.dataset.symbol); });

}
for (let btn of mathBtns) {
    btn.addEventListener("click", () => { handleOperator(btn.dataset.symbol); });
}

equalBtn.addEventListener("click", handleEvaluate);