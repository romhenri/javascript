// Retornar qual maior valor de um array.

array = [121, 13924, 4343, 33, 542, 13]

function what_biggest(array) {
	var biggest = -1

	for (var i = 0; i < array.length; i++) {
		if (array[i] > biggest) {
			biggest = array[i]
		}
	}

	return biggest
}

console.log(what_biggest(array))
