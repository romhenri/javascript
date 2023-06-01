const userInfo = document.getElementById('userInfo'),
	secureStatus = document.querySelector('.status')
function updateUserInfo() {
	userInfo.innerHTML = `width: ${window.innerWidth}px e height: ${window.innerHeight}px [min-height: 1440px]`
}
function checkStatus() {
	window.innerHeight >= 1440
		? (secureStatus.classList.add('secure'),
		  document.querySelector('#content').classList.add('secure'))
		: window.innerHeight <= 1440 &&
		  (secureStatus.classList.remove('secure'),
		  document.querySelector('#content').classList.remove('secure'))
}
updateUserInfo(),
	checkStatus(),
	console.log(screen),
	console.log(window),
	window.addEventListener('resize', () => {
		updateUserInfo(), checkStatus()
	}) // Inputs
const inputName = document.getElementById('inputName')
const inputTitle = document.getElementById('inputTitle')
const inputDesc = document.getElementById('inputDesc')
const inputPrep = document.getElementById('inputPrep')
const inputFormat = document.getElementById('inputFormat')
const inputLogo = document.querySelector('#inputLogo')
// Buttons
const btnGenerate = document.getElementById('btnGenerate')
const btnDesign = document.getElementById('btnDesign')
// Elements
const title = document.getElementById('title')
const prep = document.getElementById('prep')
const desc = document.getElementById('desc')
const logoMuccini = document.querySelector('#logoMuccini')

// Update Data
inputTitle.addEventListener('change', () => {
	if (inputTitle.value) {
		title.innerHTML = `${inputTitle.value}`
	}
})

inputDesc.addEventListener('change', () => {
	if (inputDesc.value) {
		desc.innerHTML = `${inputDesc.value}`
	}
})

inputPrep.addEventListener('change', () => {
	if (inputPrep.value) {
		prep.innerHTML = `${inputPrep.value}`
	}
})

inputLogo.addEventListener('change', () => {
	if (inputLogo.value == 'sap') {
		logoMuccini.width = '0px'
		logoMuccini.style.display = 'none'
	}
})

// Design Mode
btnDesign.addEventListener('click', () => {
	document.designMode = 'on'
}) // Import Image Feature

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
				disableImageConfig()
			})
		})
		activeImageConfig()
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

function activeImageConfig() {
	inputImageMode.disabled = false
	inputScale.disabled = false
}

function disableImageConfig() {
	inputImageMode.disabled = true
	inputScale.disabled = true

	inputImageMode.value = 'cover'
	inputScale.value = '1.0'
}
var fileName = 'arquivo'

btnGenerate.addEventListener('click', () => {
	console.log('Gerando...')

	// PDF Name
	if (inputName.value) {
		fileName = inputName.value
	}

	if (inputFormat.value == 'jpeg') {
		fileName = `${fileName}.jpeg`
	}

	// PDF Content
	const content = document.querySelector('#content')

	// PDF Config
	const options = {
		margin: [0, 0, 0, 0],
		filename: fileName,
		image: { type: 'jpeg', quality: 1 },
		html2canvas: {
			scale: 3,
		},
		jsPDF: {
			unit: 'in',
			format: 'a4',
			orientation: 'portrait',
		},
	}

	// Generate PDF
	html2pdf().set(options).from(content).save()
})
