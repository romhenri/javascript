function check() {
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
        var cks = document.getElementById('clr')

        console.log('Dados válidos!')
        console.log(time)

        if (cks[0].checked) {
            console.log('Dourado')}
    }
    }
