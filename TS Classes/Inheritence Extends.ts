// Classes can extend each other through the extends keyword.
class Vehicle {
  protected speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  public move(): void {
    console.log(`Moving at ${this.speed} km/h`);
  }
}

class Car extends Vehicle {
  private readonly brand: string;

  constructor(speed: number, brand: string) {
    super(speed);
    this.brand = brand;
  }

  public drive(): void {
    console.log(`Driving a ${this.brand} car`);
    this.move();
  }
}

const car = new Car(100, "Toyota");
car.drive(); // Output: "Driving a Toyota car" and "Moving at 100 km/h"
