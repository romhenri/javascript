const btnCopy = document.getElementById('btnCopy')
const btnDownload = document.getElementById('btnDownload')
const box = document.querySelector('.box')
var base64 = null

function convertImage() {
	var receivedFile = document.getElementById('userImage').files

	var file = receivedFile[0]

	var readFile = new FileReader()

	readFile.onload = function (loadedFile) {
		var imageBase64 = loadedFile.target.result

		console.log(imageBase64)

		document.querySelector('img').src = imageBase64
		base64 = imageBase64
	}

	readFile.readAsDataURL(file)

	btnCopy.disabled = false
	btnDownload.disabled = false
	btnCopy.classList.add('active')
	btnDownload.classList.add('active')
}

function copyBase64() {
	navigator.clipboard.writeText(base64)
	alert('Base64 copiado com sucesso.')
}

btnDownload.addEventListener('click', () => {
	const text = base64

	const blob = new Blob([text], { type: 'text/plain' })
	const url = URL.createObjectURL(blob)

	console.log(url)

	saveAs(blob, 'base64' + '.txt')
})
