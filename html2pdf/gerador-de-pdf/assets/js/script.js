console.log("Script started...");

const btnAltBg = document.querySelector("#btnAltBg");
const btnEdit=document.querySelector("#btnEdit");
const btnGenerate=document.querySelector("#btnGenerate");

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
	const content = document.querySelector("#content");

	if (btnEdit.innerHTML === "Editar") {
		content.contentEditable = true;
		btnEdit.innerHTML = "Salvar";
	} else {
		content.contentEditable = false;
		btnEdit.innerHTML = "Editar";
	}
});

btnAltBg.addEventListener("click", () => {
	const content = document.querySelector("#content");

	if (btnAltBg.innerHTML === "Fundo Claro") {
		content.classList.remove("bg-dark");
		btnAltBg.innerHTML = "Fundo Escuro";
	} else {
		content.classList.add("bg-dark");
		btnAltBg.innerHTML = "Fundo Claro";
	}
});