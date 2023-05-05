abstract class Human {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public abstract sayHello(): void;
}

class Student extends Human {
  constructor(name: string) {
    super(name);
  }

  public sayHello(): void {
    console.log(`Hello, my name is ${this.name} and I am a student.`);
  }
}

const student = new Student("Alice");
student.sayHello(); // Output: "Hello, my name is Alice and I am a student."
