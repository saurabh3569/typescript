// Optional properties are properties that don't have to be defined in the object definition.
const car2: { type: string; mileage: number } = {
  // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car2.mileage = 2000;
