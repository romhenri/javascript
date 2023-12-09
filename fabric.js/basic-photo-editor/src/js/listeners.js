import { copy, paste, addImage, removeActiveObject } from "./canvas.js"

const aside = document.querySelector('aside')

const btnBrush = document.getElementById('btnBrush')
const btnErase =  document.getElementById('btnErase')
const btnRemove = document.getElementById('btnRemove')
const btnCopy =  document.getElementById('btnCopy')
const btnPaste = document.getElementById('btnPaste')
const btnAddImage =  document.getElementById('btnAddImage')

// Remove objects for button
btnRemove.addEventListener('click', () => {
	removeActiveObject()
})
btnCopy.addEventListener('click', () => {
	copy();
})
btnPaste.addEventListener('click', () => {
	paste();
})
// Add image
btnAddImage.addEventListener('click', () => {
	addImage();
})

// Keys Shortcuts
document.addEventListener('keydown', function (event) {

	// Remove object
	if (event.key === 'Backspace' || event.key === 'Delete') {
		removeActiveObject()
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