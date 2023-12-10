import { setBrush, setEraser, copy, paste, addImage, removeActiveObject, removeAllActiveObjects, exportCanvas } from "./canvas.js"

const aside = document.querySelector('aside')

const btnBrush = document.getElementById('btnBrush')
const btnEraser =  document.getElementById('btnEraser')
const btnRemove = document.getElementById('btnRemove')
const btnCopy =  document.getElementById('btnCopy')
const btnPaste = document.getElementById('btnPaste')
const btnAddImage =  document.getElementById('btnAddImage')
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
	removeActiveObject()
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
// Export
btnExport.addEventListener('click', () => {
	exportCanvas()
})

// Keys Shortcuts
document.addEventListener('keydown', function (event) {

	// Remove object
	if (event.key === 'Backspace' || event.key === 'Delete') {
		removeActiveObject()
		// Remove all objects in selection
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