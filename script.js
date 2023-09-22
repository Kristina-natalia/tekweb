document.addEventListener("DOMContentLoaded", function () {
    const fibonacciInput = document.getElementById("fibonacciInput");
    const calculateFibonacciButton = document.getElementById("calculateFibonacci");
    const fibonacciResult = document.getElementById("fibonacciResult");

    calculateFibonacciButton.addEventListener("click", function () {
        const n = parseInt(fibonacciInput.value);
        if (!isNaN(n)) {
            const result = calculateFibonacci(n);
            fibonacciResult.textContent = `Deret Fibonacci ke-${n}: ${result}`;
        }
    });

    const shapeSelect = document.getElementById("shapeSelect");
    const shapeInputs = document.getElementById("shapeInputs");
    const shapeInput1 = document.getElementById("shapeInput1");
    const shapeInput2 = document.getElementById("shapeInput2");
    const shapeInput3 = document.getElementById("shapeInput3");
    const shapeInput3Label = document.getElementById("shapeInput3Label");
    const calculateVolumeButton = document.getElementById("calculateVolume");
    const volumeResult = document.getElementById("volumeResult");

    shapeSelect.addEventListener("change", function () {
        const selectedShape = shapeSelect.value;
        if (selectedShape === "none") {
            shapeInputs.classList.add("hidden");
            shapeInput3Label.classList.add("hidden");
            shapeInput3.classList.add("hidden");
        } else {
            shapeInputs.classList.remove("hidden");
            if (selectedShape === "triangle") {
                shapeInput3Label.classList.remove("hidden");
                shapeInput3.classList.remove("hidden");
            } else {
                shapeInput3Label.classList.add("hidden");
                shapeInput3.classList.add("hidden");
            }
        }
    });

    calculateVolumeButton.addEventListener("click", function () {
        const selectedShape = shapeSelect.value;
        let volume;

        const value1 = parseFloat(shapeInput1.value);
        const value2 = parseFloat(shapeInput2.value);
        const value3 = parseFloat(shapeInput3.value);

        if (selectedShape === "cube") {
            volume = calculateVolumeCube(value1);
        } else if (selectedShape === "rectangularPrism") {
            volume = calculateVolumeRectangularPrism(value1, value2, value3);
        } else if (selectedShape === "cylinder") {
            volume = calculateVolumeCylinder(value1, value2);
        } else if (selectedShape === "triangle") {
            volume = calculateVolumeTriangle(value1, value2, value3);
        }

        if (!isNaN(volume)) {
            volumeResult.textContent = `Volume: ${volume}`;
        }
    });

    function calculateFibonacci(n) {
        if (n <= 1) {
            return n;
        }
        let a = 0;
        let b = 1;
        let temp;
        for (let i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

    function calculateVolumeCube(sisi) {
        return sisi ** 3;
    }

    function calculateVolumeRectangularPrism(panjang, lebar, tinggi) {
        return panjang * lebar * tinggi;
    }

    function calculateVolumeCylinder(jariJari, tinggi) {
        return Math.PI * jariJari ** 2 * tinggi;
    }

    function calculateVolumeTriangle(alas, tinggi, panjang) {
        return (1 / 2) * alas * tinggi * panjang;
    }
});
