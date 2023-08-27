const btnLoad = document.querySelector("#btnLoad");
const btnSave = document.querySelector("#btnSave");

btnSave.addEventListener("click", () => {
  var data = {
    title: inputTitle.value,
    desc: inputDesc.value,
    prep: inputPrep.value,
  };

  console.log(data);
  console.log(inputName.value);

  dataString = JSON.stringify(data);

  var fileName = `${inputName.value}.json`;

  if (inputName.value == "") {
    var fileName = `${inputTitle.value}.json`;
  }

  var blob = new Blob([dataString], { type: "text/plain;charset=utf-8" });
  saveAs(blob, fileName);
});

function funcLoad() {
  var uploaded = btnLoad.files;
  uploaded = uploaded[0];

  uploaded = JSON.parse(uploaded);

  console.log(uploaded);
  console.log(uploaded.desc);
  console.log(uploaded.prep);
}
