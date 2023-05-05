// Using <> works the same as casting with as.
let y: unknown = "hello";
console.log((<string>y).length);
