// Import Image Feature

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
