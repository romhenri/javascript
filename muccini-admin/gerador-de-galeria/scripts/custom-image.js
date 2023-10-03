// Import Image Feature

const inputFile1 = document.querySelector("#inputImg1");
const inputFile2 = document.querySelector("#inputImg2");
const inputFile3 = document.querySelector("#inputImg3");
const inputFile4 = document.querySelector("#inputImg4");
const inputFile5 = document.querySelector("#inputImg5");
const inputFile6 = document.querySelector("#inputImg6");
const moveX = document.querySelector("#moveX");
const moveY = document.querySelector("#moveY");
const pictureImageTxt = "Foto do Prato";

picture.innerHTML = pictureImageTxt;

inputFile1.addEventListener("change", function (e) {
  console.log('InputFile1 changed!');
  const inputTarget = e.target;
  console.log(inputTarget);
  const file = inputTarget.files[0];
  console.log(file);

  // Definition of Box
  const box = inputFile1.parentElement
  const picture = box.querySelector("#picture");

  //
  customImage(file, box, picture)
});

inputFile2.addEventListener("change", function (e) {
  console.log('Drugs');
  const inputTarget = e.target;
  console.log(inputTarget);
  const file = inputTarget.files[0];
  console.log(file);

  // Definition of Box
  const box = inputFile2.parentElement
  const picture = box.querySelector("#picture");

  //
  customImage(file, box, picture)
});

inputFile3.addEventListener("change", function (e) {
  console.log('Drugs');
  const inputTarget = e.target;
  console.log(inputTarget);
  const file = inputTarget.files[0];
  console.log(file);

  // Definition of Box
  const box = inputFile3.parentElement
  const picture = box.querySelector("#picture");

  //
  customImage(file, box, picture)
});

inputFile4.addEventListener("change", function (e) {
  console.log('Drugs');
  const inputTarget = e.target;
  console.log(inputTarget);
  const file = inputTarget.files[0];
  console.log(file);

  // Definition of Box
  const box = inputFile4.parentElement
  const picture = box.querySelector("#picture");

  //
  customImage(file, box, picture)
});

inputFile5.addEventListener("change", function (e) {
  console.log('Drugs');
  const inputTarget = e.target;
  console.log(inputTarget);
  const file = inputTarget.files[0];
  console.log(file);

  // Definition of Box
  const box = inputFile5.parentElement
  const picture = box.querySelector("#picture");

  //
  customImage(file, box, picture)
});

inputFile6.addEventListener("change", function (e) {
  console.log('Drugs');
  const inputTarget = e.target;
  console.log(inputTarget);
  const file = inputTarget.files[0];
  console.log(file);

  // Definition of Box
  const box = inputFile6.parentElement
  const picture = box.querySelector("#picture");

  //
  customImage(file, box, picture)
});


function customImage(file, box, picture) {
  if (file) {
    console.log("File exists: " + file);
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("image");
      img.classList.add("cover");

      box.appendChild(img);
    });
    reader.readAsDataURL(file);
  } else {
    picture.innerHTML = pictureImageTxt;
  }
}