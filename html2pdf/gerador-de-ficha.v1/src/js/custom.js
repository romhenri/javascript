// Inputs
const inputName = document.getElementById("inputName");
const inputTitle = document.getElementById("inputTitle");
const inputDesc = document.getElementById("inputDesc");
const inputPrep = document.getElementById("inputPrep");
const inputFormat = document.getElementById("inputFormat");
const inputLogo = document.querySelector("#inputLogo");
// Buttons
const btnGenerate = document.getElementById("btnGenerate");
const btnDesign = document.getElementById("btnDesign");
// Elements
const title = document.getElementById("title");
const prep = document.getElementById("prep");
const desc = document.getElementById("desc");
const logoMuccini = document.querySelector("#logoMuccini");

// Update Data
inputTitle.addEventListener("change", () => {
	if (inputTitle.value) {
		title.innerHTML = `${inputTitle.value}`;
	}
});

inputDesc.addEventListener("change", () => {
	if (inputDesc.value) {
		desc.innerHTML = `${inputDesc.value}`;
	}
});

inputPrep.addEventListener("change", () => {
	if (inputPrep.value) {
		prep.innerHTML = `${inputPrep.value}`;
	}
});

inputLogo.addEventListener("change", () => {
	if (inputLogo.value == "sap") {
		logoMuccini.width = "0px";
		logoMuccini.style.display = "none";
	}
});

// Design Mode
btnDesign.addEventListener("click", () => {
	document.designMode = "on";
});
