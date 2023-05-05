let names: string[] = [];
names.push("saurabh"); // no error
names.push(22); // Error: Argument of type 'number' is not assignable to parameter of type 'starting'.
console.log(names);
