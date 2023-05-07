const BTN = document.getElementById("generateButton");
const END = document.getElementById("endSpace");
const SEC = document.querySelector("section");
const TIT = document.getElementById("title");
const REP = document.getElementsByName("repeat");
let errTime = 0;
var used = [];

TIT.addEventListener("click", () => {
	if (errTime === 0) {
		errTime = 1;
		SEC.classList.toggle("valid");
	} else if (errTime == 1) {
		errTime = 0;
		SEC.classList.toggle("valid");
	}
});

BTN.addEventListener("click", () => generate());

function clean() {
	console.log("Limpeza de histórico.");

	used = [];

	END.innerHTML = `
                    
        <p class="historic"> ${used} </p>`;
}

function generate() {
	var min = parseInt(document.getElementById("minNumber").value);
	var max = parseInt(document.getElementById("maxNumber").value);

	if (errTime == 1) {
		console.log(`Min = ${min} e Max = ${max}!`);

		console.log(`Interval = ${max - min}`);

		if ((max - min) % 2 == 0) {
			var allPossible = (max - min) / 2;
		} else if ((max - min) % 2 == 1) {
			var allPossible = (max - min + 1) / 2;
		}

		console.log(`allPossible = ${allPossible}`);

		var result = generateErr();

		console.log(result);

		if (used.length == max - min + 1) {
			alert("Todos números possíveis foram selecionados!");
		} else if (used.includes(result)) {
			console.log("Repetição Detectada.");

			return generate();
		} else {
			used.push(result);

			END.innerHTML = `
        
                <div class="generatedNumber">
                        <p class="txts"> ${result} </p>
                </div>
                    
                <div id="line"></div>
                    <p class="historic"> ${used} </p>
                <div id="line"></div>
            `;

			if (used.length == allPossible - 1) {
				console.log("POSSIBLESS DONE!");
				errTime = 0;
			}
		}
	} else if (max > 0) {
		if (REP[0].checked) {
			console.log("Sistema com repetição.");

			console.log("Valores Válidos.");

			console.log(min);
			console.log(max);

			console.log(`Min = ${min} e Max = ${max}!`);

			console.log(max - min);

			let result = parseInt(Math.random() * (max - min + 1) + min);

			console.log(result);

			if (used.length == max - min + 1) {
				alert("Todos números possíveis foram selecionados!");
			} else if (used.includes(result)) {
				console.log("Repetição Detectada.");

				return generate();
			} else if (2 > 1) {
				used.push(result);

				END.innerHTML = `
            
                    <div class="generatedNumber">
                            <p class="txts"> ${result} </p>
                    </div>
                        
                    <div id="line"></div>
                        <p class="historic"> ${used} </p>
                    <div id="line"></div>
                `;
			}
		} else {
			console.log("Sistema com repetição.");

			console.log("Valores Válidos.");

			console.log(min);
			console.log(max);

			console.log(`Min = ${min} e Max = ${max}!`);

			console.log(max - min);

			let result = parseInt(Math.random() * (max - min + 1) + min);

			console.log(result);

			used.push(result);

			END.innerHTML = `
            
            <div class="generatedNumber">
                    <p class="txts"> ${result} </p>
            </div>
                
            <div id="line"></div>
                <p class="historic"> ${used} </p>
            <div id="line"></div>
            `;
		}
	} else {
		console.log("Valores Inválidos.");

		END.innerHTML = `
    
            <div class="generatedNumber">
            <p class="txta"> Insira os valores!</p>
            </div>
        
            <div id="line"></div>`;
	}
}

function generateErr() {
	let Number = generateNumber();

	console.log(`chosen ${Number}`);

	if (Number % 2 === 1) {
		if (Number == max) {
			Number--;
			Number--;
		}

		Number++;
		return Number;
	} else if (Number % 2 === 0) {
		return Number;
	}
}

function generateNumber() {
	min = parseInt(document.getElementById("minNumber").value);
	max = parseInt(document.getElementById("maxNumber").value);

	let chosen = parseInt(Math.random() * (max - min + 1) + min);
	return chosen;
}
