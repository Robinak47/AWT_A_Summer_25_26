//variable
let x = 20;
let str = "meow";
console.log(x);
let y = true;
//y=20;
let arr = [1, 2, 4, 5];
arr.push("meow");
//tuple
let t = [1, true, "meow"];
t.push("meow");
t.pop();
t.push(false);
// any type
let a;
a = 10;
((a = "string"), (a = true));
a = { id: 1 };
//let strC = a.toUpperCase();
//unknown
let c;
c = 10;
c = "meow";
c = true;
c = { id: 1 };
if (typeof c == "string") {
    const strD = c.toUpperCase();
}
function add(a, b, c) {
    if (typeof c == "number") {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
const sum = add(5, 20);
var Days;
(function (Days) {
    Days[Days["saturday"] = 101] = "saturday";
    Days[Days["sunday"] = 102] = "sunday";
    Days[Days["monday"] = 103] = "monday";
    Days[Days["tuesday"] = 104] = "tuesday";
    Days[Days["wednesday"] = 105] = "wednesday";
    Days[Days["thrsday"] = 106] = "thrsday";
    Days[Days["friday"] = 107] = "friday";
})(Days || (Days = {}));
console.log(`Sturday is the ${Days.saturday} day in the week`);
const car = {
    model: "tsx-9990",
    noOfWheels: 4,
    color: "Silver",
};
console.log(car);
const p = {
    name: "meow",
    nid: "1223434",
    age: 30,
    gender: "male",
    isBangladeshi: true,
};
const teacher = {
    name: "meow",
    nid: "1223434",
    age: 30,
    gender: "male",
    isBangladeshi: true,
    noOfPublication: 20,
};
class Cat {
    constructor(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    showDetails() {
        console.log(`cat info: Name: ${this.name},  age: ${this.age},  sound: ${this.sound}`);
    }
}
class DesiCat extends Cat {
    constructor(name, age, sound) {
        super(name, age, sound);
    }
    makeSound() {
        console.log(this.sound);
    }
}
const cat = new DesiCat("meow", 2, "hi hi");
cat.showDetails();
cat.makeSound();
//never
let testNever;
export {};
// function throwException(exception: string): never {
//   // return "meow";
//   //throw  Error("yes this is an error");
// }
// throwException("meow");
//# sourceMappingURL=index.js.map