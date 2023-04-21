// 8 way to get undefined
let first;
console.log(first); // result will be undefined;

function second(a, b) {
	const total = a + b;
}
const result = second();
console.log(result); // result will be undefined because function is not declared return
function second2(a, b, c, d) {
	const total = a + b + c + d;
	log(a, b, c, d);
}
result2(2, 5);
// result will be undefined because function parameter not pass
function noNigative(a, b) {
	if (a < 0 || b < 0) {
		return;
	}
	return a + b;
}
const getNigative = noNigative(2, -5);
console.log(getNigative); // result will be undefined because function is not declared return value & give function  minus number
const fifth = { name: "first", age: 34 };
console.log(fifth.age, fifth.job); // result will be undefined;

const numberList = [1, 2, 3, 45, 6, 7];
console.log(numberList[1], numberList[2], numberList[3], numberList[40]); // result will be undefined;
