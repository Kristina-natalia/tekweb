document.addEventListener("DOMContentLoaded", function () {
    // ...

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

    // ...
});
