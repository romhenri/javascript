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
const btnClear = document.getElementById("btnClear");
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

const content = document.getElementById('content');

// Design Mode
var designMode = -1
btnDesign.addEventListener("click", () => {
	designMode = designMode * -1;
	document.body.classList.toggle("designMode");
	if (designMode == 1) {
    document.designMode = "on";
  } else {
    document.designMode = "off";
  }
});

btnClear.addEventListener("click", () => {
	window.location.reload(true);
})