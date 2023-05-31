// Import Image Feature

const inputFile = document.querySelector("#inputImg1");
const picture = document.querySelector("#picture");
const boxes = document.querySelectorAll(".boxImg");
// const inputFiles = document.querySelectorAll(".inputImg");
const pictureImageTxt = "Foto do Prato";

// console.log(inputFiles);

picture.innerHTML = pictureImageTxt;

// inputFiles.forEach((inputFile) => {
inputFile.addEventListener("change", function (e) {
	console.log(inputFile);

	// let idc = inputFiles.idx;

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

			boxes[0].appendChild(img);
		});

		reader.readAsDataURL(file);
	} else {
		picture.innerHTML = pictureImageTxt;
	}
});
// });
