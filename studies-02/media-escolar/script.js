console.log('JavaScript iniciado...');

// ___Functions___ //

function convertUS (br) { 
    us = br.replace(",", ".")
    return us
}

function convertBR (us) { 
    br = us.replace(",", ".")
    return br
}

// __Coleta de Dados__ //

function calculate() {
    console.log('Botão Pressionado');

    N1B1v = document.getElementById('N1B1')
    console.log(N1B1v);
    N1B1v = Number(N1B1v.value)
    console.log(N1B1v);
}

// __ __ //

// __ __ //