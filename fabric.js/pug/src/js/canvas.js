// Fabric.js v5
const section = document.getElementById('section');
const project = document.
querySelector('.canvas-container');
const ImgPanel = document.getElementById('ImgPanel');
const inputFile = document.getElementById('inputImg');
const label = document.querySelector('label');
var canvas = null

initCanvas();

function initCanvas(size = { width: 800, height: 600 }) {
	canvas = new fabric.Canvas('canvas', {
		width: size.width,
		height: size.height,
		backgroundColor: '#fff',
	})

	fabric.Image.fromURL('./src/images/dog1.png', function (oImg) {
		oImg.scale(0.3).set('flipX', true)
		canvas.add(oImg)
	})
}

function get(id) {
	return document.querySelector(`#${id}`)
}

let _clipboard;
let url;
let scaleValue;

document.body.style.zoom = "100%"

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    // var scale = window.devicePixelRatio;  // Altere para 1 no caso de desempenho
    // canvas.setDimensions({
    //     width: Math.floor(section.clientWidth * scale),
    //     height: Math.floor(section.clientHeight * scale)
    // });
    // canvas.renderAll();

    // Atualiza o texto da label com as novas dimensões do canvas
    label.textContent = `width: ${canvas.width}px, height: ${canvas.height}px`;
}

resizeCanvas();

get('clearProject').addEventListener('click', () => {

	if (canvas.width === 800 && canvas.height === 600) {
		initCanvas();
	}
	else if (
		canvas.width === 400 && canvas.height === 400
	){
		initCanvas({ width: 400, height: 400 });
	}
})

get('closeProject').addEventListener('click', () => {
	project.innerHTML = `
		<section class="create-project">
			<h2>Let's create a project?</h2>

			<button id="p800x600">800x600</button>
			<button id="p400x400">400x400</button>
		</section>
	`

	get('p800x600').addEventListener('click', () => {
		project.innerHTML = `
			<canvas id="canvas">
				<p>Your browser doesn't support Canvas.</p>
			</canvas>
		`
		initCanvas()
		resizeCanvas()
	})

	get('p400x400').addEventListener('click', () => {
		project.innerHTML = `
			<canvas id="canvas">
				<p>Your browser doesn't support Canvas.</p>
			</canvas>
		`
		initCanvas({ width: 400, height: 400 })
		resizeCanvas()
	})
})

// section.width = `${canvas.width}px`;
// section.height = `${canvas.height}px`;

// Defined "onload" of page
var activeObject = canvas.getActiveObject()

const rect = new fabric.Rect({
	top: 300,
	left: 100,
	width: 80,
	height: 80,
	fill: 'blue',
})

let isBrusher = false;
let isEraser = false;

export function setBrush() {
	if (isBrusher) {
		canvas.isDrawingMode = false;
		isBrusher = false;
		get('btnBrush').classList.remove('active');
		return;
	} else if (!isBrusher) {
		canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
		canvas.freeDrawingBrush.color = '#000000';
		canvas.isDrawingMode = !canvas.isDrawingMode;
		get('btnBrush').classList.toggle('active');
		// canvas.freeDrawingBrush.width = 5;
		// canvas.freeDrawingBrush.shadowBlur = 0;
	}
}
export function setEraser() {
	if (!isEraser) {
		canvas.isDrawingMode = true;
		canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
		isEraser = true;
		get('btnEraser').classList.add('active');
	} else {
		canvas.isDrawingMode = false;
		canvas.freeDrawingBrush.color = '#000000';
		isEraser = false;
		get('btnEraser').classList.remove('active');
	}
}
export function removeActiveObject() {
	canvas.remove(canvas.getActiveObject())
}
export function removeAllActiveObjects() {
	if (canvas.getActiveObjects().length > 1) {
		canvas.getActiveObjects().forEach((obj) => {
			canvas.remove(obj)
		})
	}
}
export function copy() {
	if (canvas.getActiveObject() === undefined) return;

	canvas.getActiveObject().clone(function (cloned) {
		_clipboard = cloned
	})
}
export function paste() {
	if (canvas.getActiveObject() === undefined) return;
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

function getCurrentDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
  const year = date.getFullYear();

  return `${day}_${month}_${year}`;
}

export function exportCanvas() {
  canvas.discardActiveObject()
	canvas.renderAll()
	canvas.getElement().toBlob(function (blob) {
		saveAs(blob, `image-${getCurrentDate()}.png`)
	})
}