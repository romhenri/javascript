// alert('Script running...')

const btnGenerate = document.getElementById("btnGenerate");

btnGenerate.addEventListener("click", () => {
	console.log("Gerando...");

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
