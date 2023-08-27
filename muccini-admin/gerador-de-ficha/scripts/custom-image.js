// Import Image Feature

const moveX = document.querySelector("#moveX");
const moveY = document.querySelector("#moveY");
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
});

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
