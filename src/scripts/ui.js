let resultArray = [];

export const showResult = (data) => {
    const output = document.getElementById("fizzbuzz-output");
    output.style.visibility = "visible";
    output.innerHTML = "<h2>Result</h2>";
    output.innerHTML += `
    <div class="flex-container">
    <p>Your input: <b>${data.data.number}</b></p> <p>Result: <span class="result">${data.data.result}</span></p>
    </div>
    `;
    if (data.data.result === "FizzBuzz") {
        document.querySelector(".result").classList.add("fizzbuzz");
    }
    if (data.data.result === "Buzz") {
        document.querySelector(".result").classList.add("buzz");
    }
    if (data.data.result === "Fizz") {
        document.querySelector(".result").classList.add("fizz");
    };
}

export const addToResult = (data) => {
    resultArray.push({ number: data.data.number, result: data.data.result })
    console.log(resultArray);
}

