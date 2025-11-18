import { fizzBuzz } from "./src/scripts/fizzbuzz.js";
import { addToResult, showResult } from "./src/scripts/ui.js";

document.getElementById("fizzbuzz-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const number = Number(document.getElementById("fizzbuzz-input").value);
    const result = fizzBuzz(number)
    showResult(result);
    addToResult(result);
});