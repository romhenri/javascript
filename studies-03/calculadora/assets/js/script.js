const calcsInicial = document.querySelector('#calcsInicial')
const buttons = document.querySelector('#button buttons')

var operation = undefined
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

const btnPlus = document.querySelector('#plus')
const btnMinus = document.querySelector('#minus')
const btnEnter = document.querySelector('#enter')

const btnClear = document.querySelector('#clear')
btnClear.addEventListener('click', () => {
	calcsInicial.innerHTML = ''
	calcsView.innerHTML = ''
	firstNumber = ''
	secondNumber = ''
	isSecondeNumber = false
	operation = undefined
})

// Buttons Number

btnOne.addEventListener('click', () => {
	const viewNumber = document.createElement('span')
	const number = btnOne.getAttribute('value')
	viewNumber.innerText = number
	calcsInicial.appendChild(viewNumber)

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
	calcsInicial.appendChild(viewNumber)

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
	calcsInicial.appendChild(viewNumber)

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
	calcsInicial.appendChild(viewNumber)

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
	calcsInicial.appendChild(viewNumber)

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
	calcsInicial.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnSeven.addEventListener('click', () => {
	const viewNumber = document.createElement('span')

	const number = btnSeven.getAttribute('value')
	viewNumber.innerText = number
	calcsInicial.appendChild(viewNumber)

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
	calcsInicial.appendChild(viewNumber)

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
	calcsInicial.appendChild(viewNumber)

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
	calcsInicial.appendChild(viewNumber)

	if (!isSecondeNumber) {
		firstNumber += number
	} else if (firstNumber) {
		secondNumber += number
	}
})

btnPlus.addEventListener('click', () => {
	const viewSignal = document.createElement('span')
	viewSignal.innerText = '+'
	calcsInicial.appendChild(viewSignal)

	operation = 'plus'
	isSecondeNumber = true
})

btnMinus.addEventListener('click', () => {
	const viewSignal = document.createElement('span')
	viewSignal.innerText = '-'
	calcsInicial.appendChild(viewSignal)

	operation = 'minus'
	isSecondeNumber = true
})

btnEnter.addEventListener('click', () => {
	const viewSignal = document.createElement('span')
	viewSignal.innerText = '='
	calcsInicial.appendChild(viewSignal)

	makeCalc()
})

function makeCalc() {
	if (operation == 'plus') {
		result = parseInt(firstNumber) + parseInt(secondNumber)
	}
	if (operation == 'minus') {
		result = parseInt(firstNumber) - parseInt(secondNumber)
	}

	console.log(`${firstNumber} is ${typeof parseInt(firstNumber)}`)
	console.log(`${secondNumber} is ${typeof parseInt(secondNumber)}`)

	firstNumber = result
	secondNumber = ''
	isSecondeNumber = false
	operation = undefined

	calcsView.innerText = calcsInicial.innerText
	calcsInicial.innerHTML = result
}
