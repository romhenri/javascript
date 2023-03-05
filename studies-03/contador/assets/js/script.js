console.log('Script started...');

const NUM = window.document.getElementById('number')
var x = 0

console.log(x);

function menos() {
    x = x - 1
    NUM.innerHTML = (x)
}

function mais() {
    x = x +1
    NUM.innerHTML = (x)
}

function reset() {
    x = 0
    NUM.innerHTML = (x)
}

function save() {
    localStorage.setItem("saved", x)

    alert(`Número ${localStorage.saved} salvo!`);
}

function retrieve() {

    NUM.innerHTML = (localStorage.saved)
    alert(`Número ${localStorage.saved} recuperado!`);
}

