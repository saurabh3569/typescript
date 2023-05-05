const car3 = {
  type: "Toyota",
};
car3.type = "Ford"; // no error
car3.type = 2; // Error: Type 'number' is not assignable to type 'string'.
