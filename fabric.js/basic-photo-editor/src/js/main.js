// Fabric.js v5

const section = document.getElementById("section");

if (screen.width < 640) {
	// canvas.width = "200px";
	// canvas.height = "400px";

	section.innerHTML = `<canvas id="canvas" width="300" height="400"></canvas>`;
}

const canvas = new fabric.Canvas("canvas");

section.width = `${canvas.width}px`;
section.height = `${canvas.height}px`;

const btnBrush = document.getElementById("btnBrush");
const btnErase = document.getElementById("btnErase");
const btnRemove = document.getElementById("btnRemove");
const btnCopy = document.getElementById("btnCopy");
const btnPaste = document.getElementById("btnPaste");

// Defined "onload" of page
var activeObject = canvas.getActiveObject();

const rect = new fabric.Rect({
	top: 300,
	left: 100,
	width: 80,
	height: 80,
	fill: "blue",
});

canvas.add(rect);

fabric.Image.fromURL("dog.jpg", function (oImg) {
	oImg.scale(0.3).set("flipX", true);
	canvas.add(oImg);
});

// Remove activeObject
btnRemove.addEventListener("click", () => {
	console.log(canvas.getActiveObject());

	canvas.remove(canvas.getActiveObject());
});
