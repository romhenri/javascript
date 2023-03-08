const BTN = document.getElementById('')
const END = document.getElementById('endSpace')
const REP = document.getElementsByName('repeat')
var used = []

function clean() {
    console.log('Limpeza de histórico.');

    used = []

    END.innerHTML = (`
                    
        <p class="historic"> ${used} </p>`
    )
}

function generate() {
    var min = parseInt(document.getElementById('minNumber').value)
    var max = parseInt(document.getElementById('maxNumber').value)

    if (max > 0) {
        

        if (REP[0].checked) {

            console.log('Sistema com repetição.');

            console.log('Valores Válidos.');

            console.log(min)
            console.log(max)

            console.log(`Min = ${min} e Max = ${max}!`)

            console.log(max - min);

            let result = parseInt((Math.random() * (max - min  + 1)) + min);

            console.log(result)

            if (used.length == max - min + 1) {
            
                alert('Todos números possíveis foram selecionados!')

            } else if (used.includes(result)) {

                console.log('Repetição Detectada.');

                return generate()

            } else if (2 > 1) {

                used.push(result)

                END.innerHTML = (`
            
                    <div class="generatedNumber">
                            <p class="txts"> ${result} </p>
                    </div>
                        
                    <div id="line"></div>
                        <p class="historic"> ${used} </p>
                    <div id="line"></div>
                `)

            }

        } else {

            console.log('Sistema com repetição.');

            console.log('Valores Válidos.');

            console.log(min)
            console.log(max)

            console.log(`Min = ${min} e Max = ${max}!`)

            console.log(max - min);


            let result = parseInt((Math.random() * (max - min  + 1)) + min);

            console.log(result)

            used.push(result)

            END.innerHTML = (`
            
            <div class="generatedNumber">
                    <p class="txts"> ${result} </p>
            </div>
                
            <div id="line"></div>
                <p class="historic"> ${used} </p>
            <div id="line"></div>
            `)

        } 


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

