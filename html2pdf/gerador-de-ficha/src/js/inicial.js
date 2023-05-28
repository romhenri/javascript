const userInfo = document.getElementById('userInfo')
const secureStatus = document.querySelector('.status')

updateUserInfo()
checkStatus()

console.log(screen)
console.log(window)

window.addEventListener('resize', () => {
	updateUserInfo()
	checkStatus()
})

function updateUserInfo() {
	userInfo.innerHTML = `width: ${window.innerWidth}px e height: ${window.innerHeight}px [Min: 1440px]`
}

function checkStatus() {
	if (window.innerHeight >= 1440) {
		//
		secureStatus.classList.add('secure')
		document.querySelector('#content').classList.add('secure')
		//
	} else if (window.innerHeight <= 1440) {
		//
		secureStatus.classList.remove('secure')
		document.querySelector('#content').classList.remove('secure')
		//
	}
}
