const workSpace = document.querySelector('#workSpace')
const buttons = document.querySelector('#button buttons')

var firstNumber = ''
var secondNumber = ''
var isSecondeNumber = false

const btnOne = document.querySelector('#one')
const btnTwo = document.querySelector('#two')
const btnThree = document.querySelector('#three')
const btnFour = document.querySelector('#four')
const btnFive = document.querySelector('#five')
const btnSix = document.querySelector('#six')
const btnSeven = document.querySelector('#seven')
const btnEight = document.querySelector('#eight')
const btnNine = document.querySelector('#nine')
const btnZero = document.querySelector('#zero')

const btnClear = document.querySelector('#clear')
btnClear.addEventListener('click', () => {
	workSpace.innerHTML = ''
})

// Buttons Number

btnOne.addEventListener('click', () => {
	const viewNumber = document.createElement('span')
	const number = btnOne.getAttribute('value')
	viewNumber.innerText = number
	workSpace.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnTwo.addEventListener('click', () => {
	const viewNumber = document.createElement('span')
	const number = btnTwo.getAttribute('value')
	viewNumber.innerText = number
	workSpace.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnThree.addEventListener('click', () => {
	const viewNumber = document.createElement('span')
	const number = btnThree.getAttribute('value')
	viewNumber.innerText = number
	workSpace.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnFour.addEventListener('click', () => {
	const viewNumber = document.createElement('span')
	const number = btnFour.getAttribute('value')
	viewNumber.innerText = number
	workSpace.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnFive.addEventListener('click', () => {
	const viewNumber = document.createElement('span')
	const number = btnFive.getAttribute('value')
	viewNumber.innerText = number
	workSpace.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnSix.addEventListener('click', () => {
	const viewNumber = document.createElement('span')
	const number = btnSix.getAttribute('value')
	viewNumber.innerText = number
	workSpace.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnSeven.addEventListener('click', () => {
	const viewNumber = document.createElement('span')

	const number = btnSix.getAttribute('value')
	viewNumber.innerText = number
	workSpace.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnEight.addEventListener('click', () => {
	const viewNumber = document.createElement('span')
	const number = btnEight.getAttribute('value')
	viewNumber.innerText = number
	workSpace.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnNine.addEventListener('click', () => {
	const viewNumber = document.createElement('span')
	const number = btnNine.getAttribute('value')
	viewNumber.innerText = number
	workSpace.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnZero.addEventListener('click', () => {
	const viewNumber = document.createElement('span')
	const number = btnZero.getAttribute('value')
	viewNumber.innerText = number
	workSpace.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})
