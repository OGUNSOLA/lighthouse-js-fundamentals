for (let x = 100; x <= 200; x++) {

	if (x % 3) {
		console.log("Loopy");
	} else if (x % 5) {
		console.log("Lighthouse");
	} else if (x % 3 && x % 5) {
		console.log("LoopyLighthouse");
	} else {
		console.log(x);
	}
}