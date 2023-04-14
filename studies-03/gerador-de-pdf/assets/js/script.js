console.log("Script started...");

const btnGenerate = document.querySelector("#btnGenerate");
const btnEdit = document.querySelector("#btnEdit");

btnGenerate.addEventListener("click", () => {
	// PDF Content
	const content = document.querySelector("#content");

	// PDF Config
	const options = {
		margin: [10, 10, 10, 10],
		filename: "arquivo.pdf",
		html2canvas: {
			scale: 2,
		},
		jsPDF: {
			unit: "mm",
			format: "a4",
			orientation: "portrait",
		},
	};

	// Generate PDF
	html2pdf().set(options).from(content).save();
});

btnEdit.addEventListener("click", () => {
	console.log("Função indisponível no momento.");
});
