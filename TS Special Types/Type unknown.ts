// unknown is a similar, but safer alternative to any.
function add(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // return number
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b; // return string
  } else {
    return "Invalid arguments"; // return string
  }
}

console.log(add(2, 3)); // Output: 5
console.log(add("Hello", " World")); // Output: "Hello World"
console.log(add(2, "Hello")); // Output: "Invalid arguments"
