// any is a type that disables type checking and effectively allows all types to be used.

// without any
let v = true;
v = "sam"; // Error: Type 'string' is not assignable to type 'boolean'.
console.log(v);

// with any
let u: any = true;
u = "string";
console.log(u);
