// Lembrar que o navegador é responsável por rodar várias coisas;
// Logo nem tudo pode ser feito em arquivo js puro.

fetch('file.json')
	.then((response) => response.json())
	.then((file) => {
		console.log(file)
		console.log(file.name)
		console.log(file.age)
	})
	.catch((error) => console.error('Erro:', error))

fetch('file.txt')
	.then((response) => response.text())
	.then((text) => {
		console.log(text)

		const blob = new Blob([text], { type: 'text/plain' })
		// const url = URL.createObjectURL(blob)

		const jsonObject = JSON.parse(text)

		console.log(jsonObject)
	})
