const btnGenerate = document.getElementById('btnGenerate')
const btnDownload = document.getElementById('btnDownload')
const box = document.getElementsByClassName('box')

btnGenerate.addEventListener('click', () => {
	const text = document.querySelector('textarea').value
	console.log(text)

	const blob = new Blob([text], { type: 'text/plain' })
	const url = URL.createObjectURL(blob)

	console.log(url)

	btnDownload.parentElement.href = url
	btnDownload.classList.add('active')
	btnGenerate.classList.remove('active')
	btnGenerate.disabled = true
	btnDownload.disabled = false
})

function resetFile() {
	btnGenerate.classList.add('active')
	btnDownload.classList.remove('active')
	btnGenerate.disabled = false
	btnDownload.disabled = true
}
