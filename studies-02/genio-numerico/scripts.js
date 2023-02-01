var secretNumber = parseInt(Math.random() * 1001)


console.log(secretNumber)

function play() {
    console.log('Tentou!')

    var cn = window.document.getElementById('n')
    var chosenNumber = Number(cn.value)

    if (secretNumber == chosenNumber) {
        console.log('Acertou!')
        alert('Você ganhou! Parabéns!')
    } else if (secretNumber <= chosenNumber) {
        alert('Erro! o núemro é menor.')
    } else if (secretNumber >= chosenNumber) {
        alert('Erro! o número é maior.')
    }
}