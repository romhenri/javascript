// Remove objects for button
btnRemove.addEventListener('click', () => {
	removeActiveObject()
})
// Remove objects for keys
document.addEventListener('keydown', function (event) {
	if (event.key === 'Backspace' || event.key === 'Delete') {
		removeActiveObject()
	}
})
//
// Image Panel
ImgPanel.addEventListener('click', () => {
	document.querySelector('.imageOpt').classList.toggle('active')
})
// Add image
btnAddImage.addEventListener('click', () => {
	fabric.Image.fromURL(url, function (oImg) {
		oImg.scale(scaleValue).set('flipX', true)
		canvas.add(oImg)
	})
	document.querySelector('.imageOpt').classList.toggle('active')
})
