var covid = document.querySelectorAll(".alive");

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
