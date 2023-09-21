document.addEventListener("DOMContentLoaded", function () {
    const appContainer = document.querySelector(".app-container");

    // Bagian Deret Fibonacci
    const fibonacciInput = document.getElementById("fibonacci-input");
    const fibonacciButton = document.getElementById("fibonacci-button");
    const fibonacciResult = document.getElementById("fibonacci-result");

    fibonacciButton.addEventListener("click", function () {
        const n = parseInt(fibonacciInput.value);
        if (!isNaN(n)) {
            const result = calculateFibonacci(n);
            fibonacciResult.textContent = "Hasil: " + result;
        }
    });

    // Bagian Volume Bangun Ruang
    const shapeSelect = document.getElementById("shape-select");
    const shapeInputs = document.getElementById("shape-inputs");
    const volumeButton = document.getElementById("volume-button
