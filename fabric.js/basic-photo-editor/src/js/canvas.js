// Fabric.js v5
const section = document.getElementById('section');

if (screen.width < 640) {
	section.innerHTML = `<canvas id="canvas" width="300" height="400"></canvas>`
}

const canvas = new fabric.Canvas('canvas');

let _clipboard;
let url;
let scaleValue;

section.width = `${canvas.width}px`;
section.height = `${canvas.height}px`;

// Defined "onload" of page
var activeObject = canvas.getActiveObject()

const rect = new fabric.Rect({
	top: 300,
	left: 100,
	width: 80,
	height: 80,
	fill: 'blue',
})

fabric.Image.fromURL('dog.jpg', function (oImg) {
	oImg.scale(0.3).set('flipX', true)
	canvas.add(oImg)
})

export function removeActiveObject() {
	canvas.remove(canvas.getActiveObject())
}

export function copy() {
	canvas.getActiveObject().clone(function (cloned) {
		_clipboard = cloned
	})
}

export function paste() {
  // clone again, so you can do multiple copies.
	_clipboard.clone(function(clonedObj) {
		canvas.discardActiveObject();
		clonedObj.set({
			left: clonedObj.left + 10,
			top: clonedObj.top + 10,
			evented: true,
		});
		if (clonedObj.type === 'activeSelection') {
			// active selection needs a reference to the canvas.
			clonedObj.canvas = canvas;
			clonedObj.forEachObject(function(obj) {
				canvas.add(obj);
			});
			// this should solve the unselectability
			clonedObj.setCoords();
		} else {
			canvas.add(clonedObj);
		}
		_clipboard.top += 10;
		_clipboard.left += 10;
		canvas.setActiveObject(clonedObj);
		canvas.requestRenderAll();})
}

export function addImage() {
  fabric.Image.fromURL(url, function (oImg) {
    oImg.scale(scaleValue).set('flipX', true)
    canvas.add(oImg)
  })
  document.querySelector('.imageOpt').classList.toggle('active')
}

const ImgPanel = document.getElementById('ImgPanel')
const inputFile = document.getElementById('inputImg')

// Image Panel
ImgPanel.addEventListener('click', () => {
	document.querySelector('.imageOpt').classList.toggle('active')
})

inputFile.addEventListener('change', function (e) {
	const inputTarget = e.target
	const file = inputTarget.files[0]
	console.log(file)

	if (file) {
		const reader = new FileReader()

		reader.addEventListener('load', function (e) {
			const readerTarget = e.target

			url = readerTarget.result
			scaleValue = 0.4
		})

		reader.readAsDataURL(file)
	} else {
		picture.innerHTML = pictureImageTxt
	}
})