function generate() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var min = parseInt(document.getElementById('minNumber').value)
    var max = parseInt(document.getElementById('maxNumber').value)

    console.log(min)
    console.log(max)

    console.log(`Min = ${min}`)
    console.log(`Max = ${max}`)

    console.log(max - min);

    let result = parseInt((Math.random() * (max - min + 1)) + min);

    console.log(result)

    const end = document.getElementById('endSpace')
    end.innerHTML = (result)
}