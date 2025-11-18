import { fizzBuzz } from "./src/scripts/fizzbuzz.js";
import { showResult } from "./src/scripts/ui.js";

document.getElementById("fizzbuzz-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const number = Number(document.getElementById("fizzbuzz-input").value);
    showResult(fizzBuzz(number));
})