function greeting(helloFun, name) {
	// console.log(person);
	helloFun(name);
	// helloFun("Rased");
}

// const name = "Student Name";
function helloFun(name) {
	console.log("Hello!", name);
}
function greetEvening(name) {
	console.log("Good Evening!", name);
}
greeting(helloFun, "Rased");
greeting(helloFun, "Rahul");
greeting(helloFun, "Ahmed");
greeting(greetEvening, "Yanur");

function submitBtn() {
	console.log("Submit Button Clicked");
}
document.getElementById("btn-submit").addEventListener("click", submitBtn);
