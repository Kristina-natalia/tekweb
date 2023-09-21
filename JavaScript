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
    const volumeButton = document.getElementById("volume-button");
    const volumeResult = document.getElementById("volume-result");

    shapeSelect.addEventListener("change", function () {
        const selectedShape = shapeSelect.value;
        shapeInputs.innerHTML = "";

        if (selectedShape === "kubus") {
            const kubusSisi = createInput("kubus-sisi", "Masukkan panjang sisi:");
            shapeInputs.appendChild(kubusSisi);
        } else if (selectedShape === "balok") {
            const balokPanjang = createInput("balok-panjang", "Masukkan panjang:");
            const balokLebar = createInput("balok-lebar", "Masukkan lebar:");
            const balokTinggi = createInput
