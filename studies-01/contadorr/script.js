var x = 0

var now = window.document.getElementById('currentNumber')
now.innerHTML = (x)

function menos() {
    var now = window.document.getElementById('currentNumber')
    x = x - 1
    now.innerHTML = (x)
}

function mais() {
    var now = window.document.getElementById('currentNumber')
    x = x +1
    now.innerHTML = (x)
}