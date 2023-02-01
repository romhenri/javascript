var n1 = 0
var n2 = 0
var ot = 0
var op = 'not'

console.log('O Script começou!')
console.log(`Operation Time = ${ot}`)

// Funções dos Valores.

function one() {
    console.log('Botão 1 pressionado.')

    if (ot == 0) {
        n1 = 1
        var o1 = window.document.getElementById('e1')
        o1.innerHTML = (n1)
        console.log('Valor 1 recebido no 1º fator.')
    } else if (ot == 1) {
        n2 = 1
        var o2 = window.document.getElementById('e2')
        o2.innerHTML = (n2)
        console.log('Valor 1 recebido no 2º fator.')
        console.log(`Operação = ${op}`)
    }
}

function two() {
    console.log('Botão 2 pressionado.')

    if (ot == 0) {
        n1 = 2
        var o1 = window.document.getElementById('e1')
        o1.innerHTML = (n1)
        console.log('Valor 2 recebido no 1º fator.')
    } else if (ot == 1) {
        n2 = 2
        var o2 = window.document.getElementById('e2')
        o2.innerHTML = (n2)
        console.log('Valor 2 recebido no 2º fator.')
        console.log(`Operação = ${op}`)
    }
}
        
function tree() {
    console.log('Botão 1 pressionado.')

    if (ot == 0) {
        n1 = 3
        var o1 = window.document.getElementById('e1')
        o1.innerHTML = (n1)
        console.log('Valor 3 recebido no 1º fator.')
    } else if (ot == 1) {
        n2 = 3
        var o2 = window.document.getElementById('e2')
        o2.innerHTML = (n2)
        console.log('Valor 3 recebido no 2º fator.')
        console.log(`Operação = ${op}`)
    }
}

function four() {
    console.log('Botão 4 pressionado.')

    if (ot == 0) {
        n1 = 4
        var o1 = window.document.getElementById('e1')
        o1.innerHTML = (n1)
        console.log('Valor 4 recebido no 1º fator.')
    } else if (ot == 1) {
        n2 = 4
        var o2 = window.document.getElementById('e2')
        o2.innerHTML = (n2)
        console.log('Valor 4 recebido no 2º fator.')
        console.log(`Operação = ${op}`)
    }
}

function five() {
    console.log('Botão 5 pressionado.')

    if (ot == 0) {
        n1 = 5
        var o1 = window.document.getElementById('e1')
        o1.innerHTML = (n1)
        console.log('Valor 5 recebido no 1º fator.')
    } else if (ot == 1) {
        n2 = 5
        var o2 = window.document.getElementById('e2')
        o2.innerHTML = (n2)
        console.log('Valor 5 recebido no 2º fator.')
        console.log(`Operação = ${op}`)
    }
}

function six() {
    console.log('Botão 6 pressionado.')

    if (ot == 0) {
        n1 = 6
        var o1 = window.document.getElementById('e1')
        o1.innerHTML = (n1)
        console.log('Valor 6 recebido no 1º fator.')
    } else if (ot == 1) {
        n2 = 6
        var o2 = window.document.getElementById('e2')
        o2.innerHTML = (n2)
        console.log('Valor 6 recebido no 2º fator.')
        console.log(`Operação = ${op}`)
    }
}

function seven() {
    console.log('Botão 7 pressionado.')

    if (ot == 0) {
        n1 = 7
        var o1 = window.document.getElementById('e1')
        o1.innerHTML = (n1)
        console.log('Valor 7 recebido no 1º fator.')
    } else if (ot == 1) {
        n2 = 7
        var o2 = window.document.getElementById('e2')
        o2.innerHTML = (n2)
        console.log('Valor 7 recebido no 2º fator.')
        console.log(`Operação = ${op}`)
    }
}
            
function eight() {
    console.log('Botão 8 pressionado.')

    if (ot == 0) {
        n1 = 8
        var o1 = window.document.getElementById('e1')
        o1.innerHTML = (n1)
        console.log('Valor 8 recebido no 1º fator.')
    } else if (ot == 1) {
        n2 = 8
        var o2 = window.document.getElementById('e2')
        o2.innerHTML = (n2)
        console.log('Valor 8 recebido no 2º fator.')
        console.log(`Operação = ${op}`)
    }
}
            
function nine() {
    console.log('Botão 9 pressionado.')

    if (ot == 0) {
        n1 = 9
        var o1 = window.document.getElementById('e1')
        o1.innerHTML = (n1)
        console.log('Valor 9 recebido no 1º fator.')
    } else if (ot == 1) {
        n2 = 9
        var o2 = window.document.getElementById('e2')
        o2.innerHTML = (n2)
        console.log('Valor 9 recebido no 2º fator.')
        console.log(`Operação = ${op}`)
    }
}

function recarregarAPagina(){
    window.location.reload();
} 

    /*console.log('Botão de Limpar pressionado.')
    
    var o1 = window.document.getElementById('e1')
    o1.innerHTML = ('Nada')
    console.log('Limpado!')

}*/


// Funções dos Operadores.

console.log(`Operação = ${op}`)

function somar() {
    console.log('Botão + pressionado.')

    var n1 = window.document.getElementById('e1')
    var v1 = Number(n1.value)

    op = 1

    console.log(`Operação definida como ${op}.`)

    var sbs = document.getElementById('o')
    sbs.innerText = ('+')
    ot = 1

    console.log(`Operation Time = ${ot}`)
    console.log(`Operação = ${op}`)
}

function subtrair() {
    console.log('Botão - pressionado.')

    var n1 = window.document.getElementById('e1')
    var v1 = Number(n1.value)

    op = 2

    console.log(`Operação definida como ${op}.`)

    var sbs = document.getElementById('o')
    sbs.innerText = ('-')
    ot = 1

    console.log(`Operation Time = ${ot}`)
    console.log(`Operação = ${op}`)
}

function multiplicar() {
    console.log('Botão * pressionado.')

    var n1 = window.document.getElementById('e1')
    var v1 = Number(n1.value)

    op = 3

    console.log(`Operação definida como ${op}.`)

    var sbs = document.getElementById('o')
    sbs.innerText = ('*')
    ot = 1

    console.log(`Operation Time = ${ot}`)
    console.log(`Operação = ${op}`)
}

function dividir() {
    console.log('Botão / pressionado.')

    var n1 = window.document.getElementById('e1')
    var v1 = Number(n1.value)

    op = 4

    console.log(`Operação definida como ${op}.`)

    var sbs = document.getElementById('o')
    sbs.innerText = ('/')
    ot = 1

    console.log(`Operation Time = ${ot}`)
    console.log(`Operação = ${op}`)
}

// Finalização

function calcular() {
    console.log('Botão = pressionado.')
    console.log(`Operação = ${op}`)

    switch (op) {
        case 1:
            console.log('Somando valores...');
            res = n1 + n2
            var resul = document.getElementById('r')
            resul.innerHTML = (`= ${res}`)
            console.log(`Valor 1 = ${n1}`);
            console.log(`Valor 2 = ${n2}`);
            console.log(`Resultado = ${res}`);
            break;

        case 2:
            console.log('Subtraindo valores...');
            res = n1 - n2
            var resul = document.getElementById('r')
            resul.innerHTML = (`= ${res}`)
            console.log(`Valor 1 = ${n1}`);
            console.log(`Valor 2 = ${n2}`);
            console.log(`Resultado = ${res}`);
            break;

        case 3:
            console.log('Multiplicando valores...');
            res = n1 * n2
            var resul = document.getElementById('r')
            resul.innerHTML = (`= ${res}`)
            console.log(`Valor 1 = ${n1}`);
            console.log(`Valor 2 = ${n2}`);
            console.log(`Resultado = ${res}`);
            break;

        case 4:
            console.log('Dividindo valores...');
            res = n1 / n2
            var resul = document.getElementById('r')
            resul.innerHTML = (`= ${res}`)
            console.log(`Valor 1 = ${n1}`);
            console.log(`Valor 2 = ${n2}`);
            console.log(`Resultado = ${res}`);
            break;

        default:
            console.log('Operação não reconhecida!');
            console.log(`Operation Time = ${ot}`);
    }
    
}