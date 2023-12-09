// Fabric.js v5

const section = document.getElementById('section')

if (screen.width < 640) {
	section.innerHTML = `<canvas id="canvas" width="300" height="400"></canvas>`
}

const canvas = new fabric.Canvas('canvas')

section.width = `${canvas.width}px`
section.height = `${canvas.height}px`

const btnBrush = document.getElementById('btnBrush')
const btnErase = document.getElementById('btnErase')
const btnRemove = document.getElementById('btnRemove')
const btnCopy = document.getElementById('btnCopy')
const btnPaste = document.getElementById('btnPaste')
const ImgPanel = document.getElementById('ImgPanel')
const inputFile = document.getElementById('inputImg')
const btnAddImage = document.getElementById('btnAddImage')

// var url = none

// Defined "onload" of page
var activeObject = canvas.getActiveObject()

const rect = new fabric.Rect({
	top: 300,
	left: 100,
	width: 80,
	height: 80,
	fill: 'blue',
})

// canvas.add(rect)

fabric.Image.fromURL('dog.jpg', function (oImg) {
	oImg.scale(0.3).set('flipX', true)
	canvas.add(oImg)
})

function removeActiveObject() {
	canvas.remove(canvas.getActiveObject())
}

function addImage(url, scale) {}

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


btnCopy.addEventListener('click', () => {
	// clone what are you copying since you
	// may want copy and paste on different moment.
	// and you do not want the changes happened
	// later to reflect on the copy.
	canvas.getActiveObject().clone(function(cloned) {
		_clipboard = cloned;
	});
})

btnPaste.addEventListener('click', () => {
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
})