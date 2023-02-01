var operation = 0
var n = 0

function dolarToReal() {
    operation = 1

    var s = window.document.getElementById('symbol')
    s.innerHTML = ('$')
}

function realToDolar() {
    operation = 2

    var s = window.document.getElementById('symbol')
    s.innerHTML = ('R$')
}

function convert() {
    n = window.document.getElementById('firstValue')
    var v = Number(n.value)

    console.log(v)

    if (operation == 1) { // trocar para Switch
        var r = v / 5

        console.log(r)

        var cc = window.document.getElementById('resultado')
        cc.innerText=('resultado')

        console.log ('Testando')

    } else {
        var r = v * 5.2

        console.log(r)
    }
}