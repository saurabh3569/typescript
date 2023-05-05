// Optional properties are properties that don't have to be defined in the object definition.
const car1: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
car1.mileage = 2000;
