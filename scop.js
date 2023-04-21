const getTotal = (a, b) => {
	const total = a + b;
	if (b > 5) {
		const sum = 25 + a + b;
	} else {
		const sum = 5 + a + b;
		var current = sum; // var variable block scop mane na bole var k Hoisting bole
	}
	console.log(current);
	return total;
};
getTotal(5, 3);
