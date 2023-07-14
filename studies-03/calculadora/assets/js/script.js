const calcsInicial = document.querySelector('#calcsInicial')
const buttons = document.querySelector('#button buttons')

var operation = undefined
var firstNumber = ''
var secondNumber = ''
var isSecondeNumber = false
var lastNumber = 0

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

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
const btnTimes = document.querySelector('#times')
const btnDivide = document.querySelector('#divide')
const btnUndo = document.querySelector('#undo')
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

btnUndo.addEventListener('click', () => {
	if (!isSecondeNumber) {
		firstNumber -= lastNumber
	} else if (firstNumber) {
		secondNumber -= lastNumber
	}
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
	if (
		calcsInicial.textContent.includes('0') ||
		calcsInicial.textContent.includes('1') ||
		calcsInicial.textContent.includes('2') ||
		calcsInicial.textContent.includes('3') ||
		calcsInicial.textContent.includes('4') ||
		calcsInicial.textContent.includes('5') ||
		calcsInicial.textContent.includes('6') ||
		calcsInicial.textContent.includes('7') ||
		calcsInicial.textContent.includes('8') ||
		calcsInicial.textContent.includes('9')
	) {
	} else {
		return
	}

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

btnTimes.addEventListener('click', () => {
	const viewSignal = document.createElement('span')
	viewSignal.innerText = '*'
	calcsInicial.appendChild(viewSignal)

	operation = 'times'
	isSecondeNumber = true
})

btnDivide.addEventListener('click', () => {
	const viewSignal = document.createElement('span')
	viewSignal.innerText = '/'
	calcsInicial.appendChild(viewSignal)

	operation = 'divide'
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
	if (operation == 'times') {
		result = parseInt(firstNumber) * parseInt(secondNumber)
	}
	if (operation == 'divide') {
		result = parseInt(firstNumber) / parseInt(secondNumber)
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
