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

//   // Definition of Box
//   const picture = image.querySelector("#picture");
//   const box = image.querySelector("#boxImg1");

//   //
//   customImage(inputTarget, file, box, picture)
// });

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

      ShowNameImage();

      // Name Image
      function ShowNameImage() {
        const selectImage = document.querySelector(".selectImage");

        selectImage.innerHTML = `${file.name} <div class="removeImage">
				<i class="fa fa-xmark"></i>
			  </div>`;
        selectImage.style.color = "black";
      }
      // Remove Image
      const btnRemoveImage = document.querySelector(".removeImage");
      btnRemoveImage.addEventListener("click", () => {
        const selectImage = document.querySelector(".selectImage");
        img.remove();
        selectImage.innerHTML = `Selecione uma Imagem...`;
        selectImage.style.color = "#686868";
        disableImageConfig();
      });
    });
    activeImageConfig();
    reader.readAsDataURL(file);
  } else {
    picture.innerHTML = pictureImageTxt;
  }
}

// Custom

// Image Mode
const inputImageMode = document.querySelector("#inputImageMode");
inputImageMode.addEventListener("change", () => {
  const image = document.querySelector(".image ");

  if (inputImageMode.value == "contain") {
    image.classList.add("contain");
    image.classList.remove("cover");
  } else if (inputImageMode.value == "cover") {
    image.classList.remove("contain");
    image.classList.add("cover");
  }
});

// Image Scale
const inputScale = document.querySelector("#inputScale");
inputScale.addEventListener("change", () => {
  const image = document.querySelector(".image ");

  image.style.scale = inputScale.value;
});

moveX.addEventListener("change", () => {
  const image = document.querySelector(".image ");

  image.style.left = moveX.value;
});

moveY.addEventListener("change", () => {
  const image = document.querySelector(".image ");

  image.style.top = moveY.value;
});

function activeImageConfig() {
  inputImageMode.disabled = false;
  inputScale.disabled = false;
  moveX.disabled = false;
  moveY.disabled = false;
}

function disableImageConfig() {
  inputImageMode.disabled = true;
  inputScale.disabled = true;

  inputImageMode.value = "cover";
  inputScale.value = "1.0";
}
