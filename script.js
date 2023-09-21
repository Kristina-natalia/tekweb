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
shapeSelect.addEventListener("change", function () {
        const selectedShape = shapeSelect.value;
        shapeInputs.innerHTML = "";

        if (selectedShape === "kubus") {
            const kubusRumus = createInput("kubus-rumus", "Masukkan rumus (cth: sisi * sisi * sisi):");
            shapeInputs.appendChild(kubusRumus);
        } else if (selectedShape === "balok") {
            const balokRumus = createInput("balok-rumus", "Masukkan rumus (cth: panjang * lebar * tinggi):");
            shapeInputs.appendChild(balokRumus);
        } else if (selectedShape === "segitiga") {
            const segitigaRumus = createInput("segitiga-rumus", "Masukkan rumus (cth: 0.5 * alas * tinggi):");
            shapeInputs.appendChild(segitigaRumus);
        }
    });

    volumeButton.addEventListener("click", function () {
        const selectedShape = shapeSelect.value;
        const rumusInput = document.getElementById(selectedShape + "-rumus").value;
        const rumusFunction = new Function('return ' + rumusInput);
        
        if (selectedShape === "kubus" || selectedShape === "balok" || selectedShape === "segitiga") {
            const volume = rumusFunction();
            volumeResult.textContent = "Hasil: " + volume;
        }
    });

    // Helper Functions
    function createInput(id, label) {
        const inputLabel = document.createElement("label");
        inputLabel.htmlFor = id;
        inputLabel.textContent = label;
        const input = document.createElement("input");
        input.type = "number";
        input.id = id;
        return inputLabel;
    }

    function calculateFibonacci(n) {
        if (n <= 0) return 0;
        if (n === 1) return 1;

        let prev = 0;
        let current = 1;

        for (let i = 2; i <= n; i++) {
            const next = prev + current;
            prev = current;
            current = next;
        }

        return current;
    }
});
