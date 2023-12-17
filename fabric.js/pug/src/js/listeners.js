import { setBrush, setEraser, copy, paste, addImage, addPugImage, removeActiveObject, removeAllActiveObjects, exportCanvas } from "./canvas.js"

const aside = document.querySelector('aside')

const btnBrush = document.getElementById('btnBrush')
const btnEraser =  document.getElementById('btnEraser')
const btnRemove = document.getElementById('btnRemove')
const btnCopy =  document.getElementById('btnCopy')
const btnPaste = document.getElementById('btnPaste')
const btnAddImage =  document.getElementById('btnAddImage')
const btnAddPug =  document.getElementById('ImgPug')
const btnExport =  document.getElementById('btnExport')

// Brush
btnBrush.addEventListener("click", () => {
	if (btnEraser.classList.contains('active')) {
		btnEraser.click();
	}
	setBrush();
});
// Eraser
btnEraser.addEventListener("click", () => {
	if (btnBrush.classList.contains('active')) {
		btnBrush.click();
	}
	setEraser();
});
// Remove objects for button
btnRemove.addEventListener('click', () => {
	removeAllActiveObjects()
})
// Copy
btnCopy.addEventListener('click', () => {
	copy();
})
// Paste
btnPaste.addEventListener('click', () => {
	paste();
})
// Add image
btnAddImage.addEventListener('click', () => {
	addImage();
})
// Add pug
btnAddPug.addEventListener('click', () => {
	addPugImage()
})
// Export
btnExport.addEventListener('click', () => {
	exportCanvas()
})

// Keys Shortcuts
document.addEventListener('keydown', function (event) {

	// Remove object
	if (
		event.key === 'Backspace' || 
		event.key === 'Delete'
	) {
		removeAllActiveObjects()
	}

	// Copy object
	if (event.ctrlKey && event.key === 'c') {
		copy()
	}

	// Paste object
	if (event.ctrlKey && event.key === 'v') {
		paste()
	}
})