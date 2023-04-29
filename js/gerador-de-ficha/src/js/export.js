// alert('Script running...')

const btnGenerate = document.getElementById("btnGenerate");
const btnDesign = document.getElementById("btnDesign");
const inputName = document.getElementById("inputName");
const inputTitle = document.getElementById("inputTitle");
const inputDesc = document.getElementById("inputDesc");
const inputPrep = document.getElementById("inputPrep");

const title = document.getElementById("title");
const prep = document.getElementById("prep");
const desc = document.getElementById("desc");

var fileName = "arquivo";

btnDesign.addEventListener("click", () => {
	document.designMode = "on";
});

btnGenerate.addEventListener("click", () => {
	console.log("Gerando...");

	title.innerHTML = `${inputTitle.value}`;
	desc.innerHTML = `${inputDesc.value}`;
	prep.innerHTML = `${inputPrep.value}`;

	// Name
	if (inputName.value) {
		fileName = inputName.value;
	}

	// PDF Content
	const content = document.querySelector("#content");

	// PDF Config
	const options = {
		margin: [0, 0, 0, 0],
		filename: fileName,
		html2canvas: {
			scale: 3,
		},
		jsPDF: {
			unit: "in",
			format: "a4",
			orientation: "portrait",
		},
	};

	// Generate PDF
	html2pdf().set(options).from(content).save();
});
