console.log('Script started...');

const EXB = getElementById('exhibitionNumber')
const CNB = getElementById('currentNumber')
var x = 0

var now = window.document.getElementById('currentNumber')
now.innerHTML = (x)

function menos() {
    x = x - 1
    EXB.innerHTML = (x)
}

function mais() {
    x = x +1
    EXB.innerHTML = (x)
}

function reset() {
    x = 0
    EXB.innerHTML = (x)
}