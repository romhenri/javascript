const inputFile = document.querySelector("#inputImg");
const picture = document.querySelector("#picture");
const box = document.querySelector("#boxImg");

const pictureImageTxt = "Foto do Prato";

picture.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
	const inputTarget = e.target;
	const file = inputTarget.files[0];
	console.log(file);

	if (file) {
		const reader = new FileReader();

		reader.addEventListener("load", function (e) {
			const readerTarget = e.target;

			const img = document.createElement("img");
			img.src = readerTarget.result;
			img.classList.add("image");

			box.appendChild(img);
		});

		reader.readAsDataURL(file);
	} else {
		picture.innerHTML = pictureImageTxt;
	}
});

// alert('Script running...')

const btnGenerate = document.getElementById("btnGenerate");
const inputName = document.getElementById("inputName");
var fileName = "arquivo";

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
