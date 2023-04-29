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

const btnDesign = document.getElementById("btnDesign");
const inputName = document.getElementById("inputName");
const inputTitle = document.getElementById("inputName");
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
	title.innerHTML = inputTitle.value;
	desc.innerHTML = inputDesc.value;
	prep.innerHTML = inputPrep.value;
});
