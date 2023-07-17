// Watch it working in debugging section:

var cont = 6
var contA = 0
var contB = 0

var array = [9, 34, 24, 11, 45, 3]

for (contA = 0; contA <= 6; contA++) {
	for (contB = contA + 1; contB <= 6; contB++) {
		if (array[contA] > array[contB]) {
			var aux = null

			aux = array[contB]
			array[contB] = array[contA]
			array[contA] = aux
		}
	}
}

for (cont = 0; cont <= 5; cont++) {
	console.log(array[cont])
}
