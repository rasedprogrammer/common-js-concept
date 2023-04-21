// Premitive types pass by value
let num1 = 5;
let num2 = 7;

function multiply(a, b) {
	a = 27;
	const result = a * b;
	return result;
}

const total = multiply(num1, num2);
console.log(total);

// Object and Array pass by reference
const student1 = { name: "Student 1", age: 22 };
const student2 = { name: "Student 2", age: 20 };

function student(name, age) {
	name.name = "Student 3";
	age.age = 19;
}
console.log(student1, student2);
console.log(student(student1, student2));
console.log(student1, student2);
