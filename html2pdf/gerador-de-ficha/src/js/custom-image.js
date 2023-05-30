// Import Image Feature

const inputFile = document.querySelector('#inputImg')
const picture = document.querySelector('#picture')
const box = document.querySelector('#boxImg')
const pictureImageTxt = 'Foto do Prato'

picture.innerHTML = pictureImageTxt

inputFile.addEventListener('change', function (e) {
	const inputTarget = e.target
	const file = inputTarget.files[0]
	console.log(file)

	if (file) {
		const reader = new FileReader()

		reader.addEventListener('load', function (e) {
			const readerTarget = e.target

			const img = document.createElement('img')
			img.src = readerTarget.result
			img.classList.add('image')
			img.classList.add('cover')

			box.appendChild(img)

			ShowNameImage()

			// Name Image
			function ShowNameImage() {
				const selectImage = document.querySelector('.selectImage')

				selectImage.innerHTML = `${file.name} <div class="removeImage">
				<i class="fa fa-xmark"></i>
			</div>`
				selectImage.style.color = 'black'
			}
			// Remove Image
			const btnRemoveImage = document.querySelector('.removeImage')
			btnRemoveImage.addEventListener('click', () => {
				const selectImage = document.querySelector('.selectImage')
				img.remove()
				selectImage.innerHTML = `Selecione uma Imagem...`
				selectImage.style.color = '#686868'
			})
		})

		reader.readAsDataURL(file)
	} else {
		picture.innerHTML = pictureImageTxt
	}
})

// Image Mode

const inputImageMode = document.querySelector('#inputImageMode')
inputImageMode.addEventListener('change', () => {
	const image = document.querySelector('.image ')

	if (inputImageMode.value == 'contain') {
		image.classList.add('contain')
		image.classList.remove('cover')
	} else if (inputImageMode.value == 'cover') {
		image.classList.remove('contain')
		image.classList.add('cover')
	}
})

// Image Scale
const inputScale = document.querySelector('#inputScale')
inputScale.addEventListener('change', () => {
	const image = document.querySelector('.image ')

	if (inputScale.value == '0.5') {
		image.style.scale = '0.5'
	} else if (inputScale.value == '1.0') {
		image.style.scale = '1.0'
	} else if (inputScale.value == '1.5') {
		image.style.scale = '1.5'
	} else if (inputScale.value == '2.0') {
		image.style.scale = '2.0'
	} else if (inputScale.value == '2.5') {
		image.style.scale = '2.5'
	} else if (inputScale.value == '3.0') {
		image.style.scale = '3.0'
	}
})
