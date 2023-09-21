document.addEventListener("DOMContentLoaded", function () {
    const appContainer = document.createElement("div");
    appContainer.className = "app-container";
    document.body.appendChild(appContainer);

    const header = document.createElement("h1");
    header.textContent = "Aplikasi Matematika";
    appContainer.appendChild(header);

    // Bagian Deret Fibonacci
    const fibonacciContainer = createContainer("Deret Fibonacci");
    appContainer.appendChild(fibonacciContainer);

    const fibonacciInput = createInput("fibonacci-input", "Masukkan angka ke-n:");
    fibonacciContainer.appendChild(fibonacciInput);

    const fibonacciButton = createButton("fibonacci-button", "Hitung");
    fibonacciContainer.appendChild(fibonacciButton);

    const fibonacciResult = createResult("fibonacci-result");
    fibonacciContainer.appendChild(fibonacciResult);

    fibonacciButton.addEventListener("click", function () {
        const n = parseInt(fibonacciInput.value);
        if (!isNaN(n)) {
            const result = calculateFibonacci(n);
            fibonacciResult.textContent = "Hasil: " + result;
        }
    });

    // Bagian Volume Bangun Ruang
    const volumeContainer = createContainer("Perhitungan Volume Bangun Ruang");
    appContainer.appendChild(volumeContainer);

    const shapeSelect = createSelect("shape-select");
    shapeSelect.innerHTML = `
        <option value="kubus">Kubus</option>
        <option value="balok">Balok</option>
    `;
    volumeContainer.appendChild(shapeSelect);

    const shapeInputs = document.createElement("div");
    shapeInputs.id = "shape-inputs";
    volumeContainer.appendChild(shapeInputs);

    const volumeButton = createButton("volume-button", "Hitung");
    volumeContainer.appendChild(volumeButton);

    const volumeResult = createResult("volume-result");
    volumeContainer.appendChild(volumeResult);

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
        }
    });

    volumeButton.addEventListener("click", function () {
        const selectedShape = shapeSelect.value;
        const shapeInputsArray = Array.from(shapeInputs.getElementsByTagName("input"));
        const validInputs = shapeInputsArray.every(input => !isNaN(parseFloat(input.value)));

        if (validInputs) {
            if (selectedShape === "kubus") {
                const sisi = parseFloat(document.getElementById("kubus-sisi").value);
                const volume = sisi ** 3;
                volumeResult.textContent = "Hasil: " + volume;
            } else if (selectedShape === "balok") {
                const panjang = parseFloat(document.getElementById("balok-panjang").value);
                const lebar = parseFloat(document.getElementById("balok-lebar").value);
                const tinggi = parseFloat(document.getElementById("balok-tinggi").value);
                const volume = panjang * lebar * tinggi;
                volumeResult.textContent = "Hasil: " + volume;
            }
        }
    });

    // Helper Functions
    function createContainer(title) {
        const container = document.createElement("div");
        container.className = "container";
        const heading = document.createElement("h2");
        heading.textContent = title;
        container.appendChild(heading);
        return container;
    }

    function createInput(id, label) {
        const inputLabel = document.createElement("label");
        inputLabel.htmlFor = id;
        inputLabel.textContent = label;
        const input = document.createElement("input");
        input.type = "number";
        input.id = id;
        return input;
    }

    function createSelect(id) {
        const select = document.createElement("select");
        select.id = id;
        return select;
    }

    function createButton(id, label) {
        const button = document.createElement("button");
        button.id = id;
        button.textContent = label;
        return button;
    }

    function createResult(id) {
        const result = document.createElement("p");
        result.id = id;
        return result;
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
