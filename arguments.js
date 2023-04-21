function sum(a, b, c) {
	//console.log(arguments[3]); // Arguments is only available in function
	// which give you array like object [Arguments] { '0': 34, '1': 53, '2': 64, '3': 45, '4': 65, '5': 75 }

	//Converting arguments to array
	const args = [...arguments];
	console.log(args);

	const total = a + b + c;
	return total;
}
const result = sum(34, 53, 64, 45, 65, 75);
console.log(result);
console.log(sum.length);
