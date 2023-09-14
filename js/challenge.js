document.addEventListener("DOMContentLoaded", () => {
manualCounter();
});

function manualCounter() {
const countUp = document.getElementById("plus");
countUp.addEventListener("click", () => {
    const counter = document.getElementById("counter");
    counter.innerText++;
})

const countDown = document.getElementById("minus");
countDown.addEventListener("click", () => {
    const counter = document.getElementById("counter");
    counter.innerText--;
})
}