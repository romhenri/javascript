var fileName = "arquivo";

btnGenerate.addEventListener("click", () => {
	console.log("Gerando...");

	// PDF Name
	if (inputName.value) {
		fileName = inputName.value;
	}

	// PDF Content
	const content = document.querySelector("#content");

	// PDF Config
	const options = {
		margin: [0, 0, 0, 0],
		filename: fileName,
		image: { type: "jpeg", quality: 1 },
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
