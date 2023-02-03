function start() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()

    console.log (`O horário é ${hour} horas`)

    msg.innerHTML = `Agora são ${hour} horas`

    if (hour >= 4 && hour < 12) {
        img.src= 'assets/photo-morning.png'
    } else if (hour >= 12 && hour < 18) {
        img.src = 'assets/photo-evening.png'
    } else {
        img.src = 'assets/photo-night.png'
    }
}

function click() {
    window.location.href = "https://www.4devs.com.br/gerador_de_cpf"
}