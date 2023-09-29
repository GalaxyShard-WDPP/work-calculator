

let mathBtns = document.getElementsByClassName("math-btn");
let numBtns = document.getElementsByClassName("num-btn");
let equalBtn = document.getElementsByClassName("equal-btn")[0];
let entry = document.getElementById("entry");


function handleNumber(symbol) {
    if (entry.textContent == "0" && symbol != ".") {
        entry.textContent = symbol;
        return;
    }
    entry.textContent += symbol;

}
for (let btn of numBtns) {
    handleNumber(btn.dataset.symbol);
}