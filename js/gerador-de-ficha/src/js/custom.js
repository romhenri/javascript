const inputFile = document.querySelector("#inputImg");
const picture = document.querySelector("#picture");
const box = document.querySelector("#boxImg");
const inputLogo = document.querySelector("#inputLogo");

const logoMuccini = document.querySelector("#logoMuccini");
// const logoSapore = document.querySelector("#logoSapore");

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

inputLogo.addEventListener("change", () => {
	if (inputLogo.value == "sap") {
		logoMuccini.width = "0px";
		logoMuccini.style.display = "none";
	}
});
