// v5
// import { fabric } from "fabric";

const btn = document.getElementById("btnAddSquare");

const recte = new fabric.Rect({
	top: 300,
	left: 100,
	width: 80,
	height: 80,
	fill: "blue",
});

canvas.add(recte);

// btn.addEventListener("click", () => {
// 	// const recto = new fabric.Rect({
// 	// 	top: 200,
// 	// 	left: 100,
// 	// 	width: 80,
// 	// 	height: 80,
// 	// 	fill: "green",
// 	// });
// 	// canvas.add(recto);

// 	canvas.remove(oImg);
// });

// var canvas = new fabric.Canvas("c");
// var imgElement = document.getElementById("my-image");
// var imgInstance = new fabric.Image(imgElement, {
// 	left: 100,
// 	top: 100,
// 	angle: 30,
// 	opacity: 0.85,
// });
// canvas.add(imgInstance);

fabric.Image.fromURL("dog.jpg", function (oImg) {
	oImg.scale(0.3).set("flipX", true);
	canvas.add(oImg);

	btn.addEventListener("click", () => {
		// const recto = new fabric.Rect({
		// 	top: 200,
		// 	left: 100,
		// 	width: 80,
		// 	height: 80,
		// 	fill: "green",
		// });
		// canvas.add(recto);

		canvas.remove(oImg);
	});
});
