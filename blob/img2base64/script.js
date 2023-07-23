const btnGenerate = document.getElementById('btnGenerate')
const box = document.querySelector('.box')

function convertImage() {
	var receivedFile = document.getElementById('userImage').files

	//console.log(receivedFile)

	var file = receivedFile[0]

	var readFile = new FileReader()

	readFile.onload = function (loadedFile) {
		var imageBase64 = loadedFile.target.result

		console.log(imageBase64)

		document.querySelector('img').src = imageBase64
	}

	readFile.readAsDataURL(file)
}
