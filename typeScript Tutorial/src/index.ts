//variable

let x: number = 20;
let str: string = "meow";
console.log(x);

let y = true;
//y=20;

let arr: (number | string)[] = [1, 2, 4, 5];
arr.push("meow");

//tuple

let t: [number, boolean, string] = [1, true, "meow"];
t.push("meow");
t.pop();
t.push(false);

// any type

let a: any;
a = 10;
((a = "string"), (a = true));
a = { id: 1 };
//let strC = a.toUpperCase();

//unknown

let c: unknown;
c = 10;
c = "meow";
c = true;
c = { id: 1 };
if (typeof c == "string") {
  const strD = c.toUpperCase();
}

function add(a: number, b: number, c?: number): number | string {
  if (typeof c == "number") {
    return a + b + c;
  } else {
    return a + b;
  }
}

const sum = add(5, 20);

enum Days {
  saturday = 101,
  sunday,
  monday,
  tuesday,
  wednesday,
  thrsday,
  friday,
}

console.log(`Sturday is the ${Days.saturday} day in the week`);

const car: { model: string; noOfWheels: number; color: string } = {
  model: "tsx-9990",
  noOfWheels: 4,
  color: "Silver",
};

console.log(car);
//interface
interface Person {
  name: string;
  nid: string;
  age: number;
  gender: string;
  isBangladeshi: boolean;
}

const p: Person = {
  name: "meow",
  nid: "1223434",
  age: 30,
  gender: "male",
  isBangladeshi: true,
};

interface Teacher extends Person {
  noOfPublication: number;
}

const teacher: Teacher = {
  name: "meow",
  nid: "1223434",
  age: 30,
  gender: "male",
  isBangladeshi: true,
  noOfPublication: 20,
};

abstract class Cat {
  private name: string;
  private age: number;
  protected sound: string;

  constructor(name: string, age: number, sound: string) {
    this.name = name;
    this.age = age;
    this.sound = sound;
  }

  abstract makeSound(): void;

  public showDetails() {
    console.log(
      `cat info: Name: ${this.name},  age: ${this.age},  sound: ${this.sound}`,
    );
  }
}

class DesiCat extends Cat {
  constructor(name: string, age: number, sound: string) {
    super(name, age, sound);
  }

  makeSound(): void {
    console.log(this.sound);
  }
}

const cat: DesiCat = new DesiCat("meow", 2, "hi hi");
cat.showDetails();
cat.makeSound();

//never
let testNever: never;

// function throwException(exception: string): never {
//   // return "meow";
//   //throw  Error("yes this is an error");
// }

// throwException("meow");
