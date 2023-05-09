const userInfo = document.getElementById("userInfo");
const windowWidth = screen.outerWidth;
const windowHeight = screen.outerHeight;

var scale = "scale(1)";
document.body.style.webkitTransform = scale; // Chrome, Opera, Safari
document.body.style.msTransform = scale; // IE 9
document.body.style.transform = scale; // Geral

updateUserInfo();

console.log(screen);
console.log(window);

window.addEventListener("resize", () => updateUserInfo());

function updateUserInfo() {
	userInfo.innerHTML = `width: ${window.innerWidth}px e height: ${window.innerHeight}px`;
}
