// Preciso verificar se uma string possui as palavras de um array.
// Entretanto, ".includes()" não aceita array como parâmetro.

var array = ['x', 'y', 'z']

var string = 'Eu sou uma batata x'

// console.log(string.includes(array))
// De fato, ".includes()" não aceita array como parâmetro.

function includesOfArray(string, array) {
	for (var i = 0; i < array.length; i++) {
		if (string.includes(array[i])) {
			return true
		}
	}
	return false
}

console.log(includesOfArray(string, array))
