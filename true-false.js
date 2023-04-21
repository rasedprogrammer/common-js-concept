/**
 * Truthy
 *  1. true
 *  2. Any number (+ve, -ve) will be truthy other than 0
 *  3. any string other than empty string
 *  4. "0", "false"
 *  5. {} Object
 *  6. [] Array
 *
 * Falsey
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 */

const x = true;
if (x) {
	console.log("Value of x is truthy");
} else {
	console.log("Value of x is falsy");
}

// Optional
// Check if falsy

const y = "";
if (!y) {
	console.log("Value of y is falsy");
}

// Check if falsy
const z = "";
if (!!z) {
	console.log("Value of y is truthy");
}
