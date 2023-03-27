var covid = document.querySelectorAll(".covid");
// var covid = document.getElementById("covid1");

console.log(covid);

covid.forEach((covid) =>
	covid.addEventListener("click", () => {
		console.log("Clicou");
		covid.src = "src/img/covid-breaked.png";
		setTimeout(() => {
			covid.src = "src/img/blood.png";
		}, 50);
		covid.classList.add("blood");
		covid.classList.remove("alive");
	})
);

// covid.addEventListener("click", () => {
// 	console.log("Clicou");
// 	covid.src = "src/img/blood.png";
// 	covid.classList.add("blood");
// 	covid.classList.remove("covid");
// });
