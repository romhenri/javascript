var BTN1 = document.getElementById("btn1");
var RES1 = document.getElementById("result1");

BTN1.addEventListener("click", () => {
	var IN1C1 = document.getElementById("in1c1").value;
	var IN2C1 = document.getElementById("in2c1").value;

	// console.log("Valores Válidos");
	console.log(IN1C1);
	console.log(IN2C1);

	var result1 = numberByNumber(IN1C1, IN2C1);

	console.log(result1);

	if (result1 == NaN) {
		console.log("Valores Inválidos");
	} else {
		RES1.innerHTML = `
		<p class="result">
		Corresponde a ${result1}%
		</p>
		</div>
		`;
	}
});

function numberByNumber(n1, n2) {
	n2UnP = n2 / 100;

	P = n1 / n2UnP;

	console.log(P + "%");

	return P;
}
