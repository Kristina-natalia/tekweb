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

    const calculateVolumeButton = document.getElementById("calculateVolume");
    const volumeResult = document.getElementById("volumeResult");

    const calculateVolumeButton2 = document.getElementById("calculateVolume2");
    const volumeResult2 = document.getElementById("volumeResult2");

    const calculateVolumeButton3 = document.getElementById("calculateVolume3");
    const volumeResult3 = document.getElementById("volumeResult3");

    shapeSelect.addEventListener("change", function () {
        const selectedShape = shapeSelect.value;
        if (selectedShape === "none") {
            shapeInputs.classList.add("hidden");
        } else {
            shapeInputs.classList.remove("hidden");
        }
    });

    calculateVolumeButton.addEventListener("click", function () {
        const value1 = parseFloat(shapeInput1.value);
        if (!isNaN(value1)) {
            const volume = calculateVolume(value1);
            volumeResult.textContent = `Volume: ${volume}`;
        } else {
            volumeResult.textContent = "Masukkan nilai yang valid untuk menghitung volume.";
        }
    });

    calculateVolumeButton2.addEventListener("click", function () {
        const value2 = parseFloat(shapeInput2.value);
        if (!isNaN(value2)) {
            const volume = calculateVolume(value2);
            volumeResult2.textContent = `Volume: ${volume}`;
        } else {
            volumeResult2.textContent = "Masukkan nilai yang valid untuk menghitung volume.";
        }
    });

    calculateVolumeButton3.addEventListener("click", function () {
        const value3 = parseFloat(shapeInput3.value);
        if (!isNaN(value3)) {
            const volume = calculateVolume(value3);
            volumeResult3.textContent = `Volume: ${volume}`;
        } else {
            volumeResult3.textContent = "Masukkan nilai yang valid untuk menghitung volume.";
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

    function calculateVolume(sisi) {
        return sisi ** 3;
    }
});
