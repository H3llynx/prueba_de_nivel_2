import { fizzBuzz } from "./src/scripts/fizzbuzz.js";
import { addToResult, applyTheme, showHistory, showResult } from "./src/scripts/ui.js";

let theme = localStorage.getItem("fizzbuzz-theme") || "pepe";
applyTheme(theme);

document.getElementById("fizzbuzz-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const number = Number(document.getElementById("fizzbuzz-input").value);
    const result = fizzBuzz(number)
    showResult(result);
    addToResult(result);
    showHistory();
});

const pepeThemeBtn = document.getElementById("pepe-theme");
const pacoThemeBtn = document.getElementById("paco-theme");
pepeThemeBtn.addEventListener("click", () => {
    applyTheme("pepe");
    pepeThemeBtn.setAttribute("disabled", true);
    pacoThemeBtn.removeAttribute("disabled");
})
pacoThemeBtn.addEventListener("click", () => {
    applyTheme("paco");
    pacoThemeBtn.setAttribute("disabled", true);
    pepeThemeBtn.removeAttribute("disabled");
})