import { fizzBuzz } from "./src/scripts/fizzbuzz.js";

document.getElementById("fizzbuzz-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const number = Number(document.getElementById("fizzbuzz-input").value);
    console.log(fizzBuzz(number));
})