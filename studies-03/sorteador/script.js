function generate() {
    var min = parseInt(document.getElementById('minNumber').value)
    var max = parseInt(document.getElementById('maxNumber').value)

    console.log(min)
    console.log(max)

    console.log(`Min = ${min}`)
    console.log(`Max = ${max}`)

    console.log(max - min);

    let result = parseInt(Math.random() * 3)

    // let result = parseInt((Math.random() * (max - min)) + min);

    console.log(result)

    const end = document.getElementById('endSpace')
    end.innerHTML = (result)
}