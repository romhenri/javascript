const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	box.addEventListener("click", () => box.classList.toggle("selected"));

	if (box.classList.contains("selected")) {
		alert("selected");
	}
});

window.addEventListener("keydown", (event) => {
	if (event.key == "Enter" || event.which == "32") {
		alert("selected");
	}

	boxes.forEach((box) => {
		console.log(box.style.top);

		var top = box.style.top;
		top = top.replace("px", "");
		top = parseInt(top, 10); // (Number)

		var left = box.style.left;
		left = left.replace("px", "");
		left = parseInt(left, 10); // (Number)

		console.log(top);
		console.log(left);

		switch (event.key) {
			case "ArrowLeft":
				box.style.left = `${left - 50}px`;
				break;
			case "ArrowRight":
				box.style.left = `${left + 50}px`;
				break;
			case "ArrowUp":
				box.style.top = `${top - 50}px`;
				break;
			case "ArrowDown":
				box.style.top = `${top + 50}px`;

				break;
			default:
				break;
		}
	});
});
