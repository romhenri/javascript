function soma(n1, n2, n3, n4, n5) {
	console.group("Valores");
	console.log(n1);
	console.log(n2);
	console.log(n3);
	console.log(n4);
	console.log(n5);
	console.groupEnd("Valores");

	if (n2 == undefined) {
		var res = n1;
	} else if (n3 == undefined) {
		var res = n1 + n2;
	} else if (n4 == undefined) {
		var res = n1 + n2 + n3;
	} else if (n5 == undefined) {
		var res = n1 + n2 + n3 + n4;
	} else {
		var res = n1 + n2 + n3 + n4 + n5;
	}

	return res;
}

console.log(soma(1, 0, 3, 0));
