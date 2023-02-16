const NI = document.getElementById('numberInput')
const P = document.getElementById('par')
const I = document.getElementById('impar')

function check() {
    var x = Number(NI.value)

    console.log(x);
    
    y = x % 2

    if (y == 0) {
        console.log('par')

        P.style.backgroundColor= #f98820;

    } else if (y == 1) {
        alert('impar')
    } else {
        alert('Não detectado.')
    }
}