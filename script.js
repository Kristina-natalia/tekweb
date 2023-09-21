document.addEventListener("DOMContentLoaded", function () {
    const appContainer = document.createElement("div");
    appContainer.className = "app-container";
    document.body.appendChild(appContainer);

    const header = document.createElement("h1");
    header.textContent = "Kalkulator Matematika";
    header.className = "judul";
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
    const volumeContainer = createContainer("Volume Bangun Ruang");
    appContainer.appendChild(volumeContainer);

    const shapeSelect = createSelect("shape-select");
    shapeSelect.innerHTML = `
        <option value="kubus">Kubus</option>
        <option value="balok">Balok</option>
        <option value="segitiga">Segitiga</option>
    `;
    volumeContainer.appendChild(shapeSelect);

    const shapeInputs = document.createElement("div");
    shapeInputs.id = "shape-inputs";
    volumeContainer.appendChild(shapeInputs);

    const rumusInput = createInput("rumus-input", "Masukkan rumus (cth: panjang * lebar * tinggi):");
    volumeContainer.appendChild(rumusInput);

    const volumeButton = createButton("volume-button", "Hitung");
    volumeContainer.appendChild(volumeButton);

    const volumeResult = createResult("volume-result");
    volumeContainer.appendChild(volumeResult);

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
        const rumus = document.getElementById(selectedShape + "-rumus").value;
        const rumusFunction = new Function('return ' + rumus);

        if (selectedShape === "kubus" || selectedShape === "balok" || selectedShape === "segitiga") {
            const volume = rumusFunction();
            volumeResult.textContent = "Hasil: " + volume;
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
        input.type = "text";
        input.id = id;
        return inputLabel;
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
