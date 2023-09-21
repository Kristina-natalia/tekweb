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
            const balokTinggi = createInput("balok-tinggi", "Masukkan tinggi:");

            shapeInputs.appendChild(balokPanjang);
            shapeInputs.appendChild(balokLebar);
            shapeInputs.appendChild(balokTinggi);
        } else if (selectedShape === "segitiga") {
            const segitigaAlas = createInput("segitiga-alas", "Masukkan alas:");
            const segitigaTinggi = createInput("segitiga-tinggi", "Masukkan tinggi:");

            shapeInputs.appendChild(segitigaAlas);
            shapeInputs.appendChild(segitigaTinggi);
        } else if (selectedShape === "tabung") {
            const tabungJari = createInput("tabung-jari", "Masukkan jari-jari:");
            const tabungTinggi = createInput("tabung-tinggi", "Masukkan tinggi:");

            shapeInputs.appendChild(tabungJari);
            shapeInputs.appendChild(tabungTinggi);
        }
    });

    volumeButton.addEventListener("click", function () {
        const selectedShape = shapeSelect.value;
        const shapeInputsArray = Array.from(shapeInputs.getElementsByTagName("input"));
        const validInputs = shapeInputsArray.every(input => !isNaN(parseFloat(input.value)));

        if (validInputs) {
            let result = 0;

            if (selectedShape === "kubus") {
                const sisi = parseFloat(document.getElementById("kubus-sisi").value);
                result = sisi ** 3;
            } else if (selectedShape === "balok") {
                const panjang = parseFloat(document.getElementById("balok-panjang").value);
                const lebar = parseFloat(document.getElementById("balok-lebar").value);
                const tinggi = parseFloat(document.getElementById("balok-tinggi").value);
                result = panjang * lebar * tinggi;
            } else if (selectedShape === "segitiga") {
                const alas = parseFloat(document.getElementById("segitiga-alas").value);
                const tinggi = parseFloat(document.getElementById("segitiga-tinggi").value);
                result = 0.5 * alas * tinggi;
            } else if (selectedShape === "tabung") {
                const jari = parseFloat(document.getElementById("tabung-jari").value);
                const tinggi = parseFloat(document.getElementById("tabung-tinggi").value);
                result = Math.PI * jari ** 2 * tinggi;
            }

            volumeResult.textContent = "Hasil: " + result.toFixed(2);
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
