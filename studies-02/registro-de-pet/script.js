function register() {
    console.log('Botão de Registro pressionado')

    var date = new Date()
    var year = date.getFullYear()
    var syp = document.getElementById('st')
    var sy = Number(syp.value)
    var res = document.getElementById('conclusion')
    var time = year -sy
    var name = document.getElementById('n')

    console.log(date)
    console.log(year)
    console.log(syp)
    console.log(sy)
    console.log(n)
    

    if (sy == 0 || sy.value > year) {
        console.log('Dados inválidos!')
        alert('Dados invalidos!')
    } else {
        var buttonS = document.getElementsByName('skin')
        var coat = ''
        // var img = document.createElement('img')
        // img.setAttribute('id', 'cat')

        var img = document.getElementById('cat')

        if (buttonS[0].checked) {
            coat = 'golden'
            img.setAttribute('src', 'golden-cat.png')
        } else if (buttonS[1].checked) {
            coat = 'gray'
            img.setAttribute('src', 'gray-cat.png')
        } else if (buttonS[2].checked) {
            coat = 'brown'
            img.setAttribute('src', 'brown-cat.png')
        } else {
            console.log('Pelagem não identificada!');
        }

        console.log(coat);
    }
}