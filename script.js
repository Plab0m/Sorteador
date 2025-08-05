
const InputMin = document.querySelector("#min");
const InputMax = document.querySelector("#max");
const btnSortear = document.querySelector("#Sortear");
const resultado = document.querySelector("#resultado");
const resultContainer = document.querySelector(".result-container");

function GenerateRandomNumber() {
const min = InputMin.value;
const max = InputMax.value;
const NumeroGerado = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
resultado.textContent = NumeroGerado;
resultContainer.style.visibility = "visible";
}