const BTN = document.getElementById('')
const END = document.getElementById('endSpace')

function generate() {
    var min = parseInt(document.getElementById('minNumber').value)
    var max = parseInt(document.getElementById('maxNumber').value)

    if (max > 0) {
        console.log('Valores Válidos.');


        console.log(min)
        console.log(max)

        console.log(`Min = ${min} e Max = ${max}!`)

        console.log(max - min);

        // let result = parseInt(Math.random() * 3)

        let result = parseInt((Math.random() * (max - min  + 1)) + min);

        console.log(result)

        END.innerHTML = (`
        
        <div class="generatedNumber">
            <p class="txts"> ${result} </p>
        </div>
        
        <div id="line"></div>
        `)

    } else {

        console.log('Valores Inválidos.');
        
        END.innerHTML = (`
    
            <div class="generatedNumber">
            <p class="txta"> Insira os valores!</p>
            </div>
        
            <div id="line"></div>`
        )
    }
}