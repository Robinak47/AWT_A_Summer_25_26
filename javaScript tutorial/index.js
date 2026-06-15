//var

var name = "alice";
var name = "john";
console.log(name);

if (true) {
    var num = 10;
}


console.log(num);



//let

let a = 20;

a = 30;
console.log(a);

if (true) {
    let b = 40;
    console.log(b);

}



let c;
var d;


const pi = 3.1416;
console.log(pi);


const arr = [1, 2, 4];
//arr = [1, 2, 4, 5];
arr.push(5);
arr.forEach((num) => {
    console.log(num);
})

function sum(a, b) {
    console.log(a + b);
}

const sub = function (a, b) {
    console.log(a - b);
}

const multiplication = (a, b) => {
    console.log(a * b);
}

const division = (a, b) => a / b;


const greet = name => {
    console.log(`hello ${name}`);
}

const sayHello = (name = 'students') => {
    console.log(`hello ${name}`);
}


sum(100, 200);
sub(200, 400);
multiplication(10, 100);
console.log(division(100, 2));
greet("justine");
sayHello("Mr. Meow");


var num1 = "123";
console.log(typeof (num1));
console.log(typeof (sayHello))
var num2;
console.log(typeof (num2));

var num3 = null;
console.log(typeof (num3));

console.log("123a" - 123);

const myArr = [1, 2, 30];
myArr.push(100);
console.log(myArr[3]);
console.log(myArr.length);
console.log(typeof (myArr));

const person = {
    name: "mr. meow",
    age: 20,
    gender: "male",
    isBagladeshi: true,
    address:
    {
        road: "02",
        house: "07",
        city: "dhaka",
        zip: "dhaka-1216"
    },

    info: function () {

        const info1 = () => {
            console.log(`name: ${this.name}, age: ${this.age}, gender ${this.gender}`);
        }
        info1();
    },

    showDetails: function () {
        console.log(`name: ${this.name}, age: ${this.age}, gender ${this.gender}`);
    }


}

console.log(person.address.city);
console.log(person["name"]);
person.info();
person.showDetails();



const arr4 = [1, 2, 3];
const [v1, , v3] = arr4;

console.log(v1, v3);


const student =
{
    id: "13-775775-2",
    name: "mr.meow",
    cgpa: 3.14,
    department: "Computer Science",
    major:
    {
        mj1: "se",
        mj2: "is"
    }
}


const { id, name: first_name, cgpa, department, major: { mj1, mj2 } } = student;
console.log(id, first_name, cgpa, department, mj1, mj2);


//spread

const spArr = [10, 20, 30, 40];

function spreadTest(a, b, c, d) {

    return a + b + c + d;

}

console.log(spreadTest(...spArr))


//rest

let r1 = 10;
let r2 = 20;
let r3 = 30;
let r4 = 40;


function restTest(num1, ...num) {
    console.log(typeof (num));
    let result = 0;
    num.forEach(val => {
        result = val + result;
    }
    )

    console.log(num1);
    console.log(result);

}

restTest(r1, r2, r3, r4);


let arr5 = [10, 20, 30, 40, 50];

const [val1, val2, ...rest] = arr5;

console.log(val1, val2, rest);

for (let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
}


let it = 0;
while (it < arr5.length) {
    console.log(arr5[it]);
    it++;

}

it = 0;
do {
    console.log(arr5[it]);
    it++;
} while (it < arr5.length)


arr5.forEach((element, index) => {

    console.log(index);
    console.log(element);


}
)


for (let element of arr5) {
    console.log(element);
}


const car =
{
    model: "T-878",
    brand: "BMW",
    noOfWheels: 4,
    color: "silver"
}


for (let prop in car) {
    console.log(car[prop]);
}

class Animal {

    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    bark() {
        console.log(this.sound);
    }

    showDetails() {
        console.log(`name: ${this.name}, sound: ${this.sound}`);
    }

    testAbstact() {
        throw console.error(" cannot call this method from animal obj");

    }

}

class Panda extends Animal {
    constructor(name, sound, fabFood) {
        super(name, sound);
        this.fabFood = fabFood;
    }

    showDetails() {
        super.showDetails();
        console.log(`fab food: ${this.fabFood}`);
    }

    getFabFood() {
        return this.fabFood;
    }
}


const animal = new Animal("Tiger", "moew moew");
animal.showDetails();
animal.bark();
//animal.testAbstact();
console.log("directly accessing name: " + animal.name);

const panda = new Panda("Panda", "he he he ", "Bamboo");
panda.showDetails();
panda.bark();
console.log(panda.getFabFood());


// ternary operator 

let age = 79;

console.log((age < 50) ? "young" : (age < 80) ? "middle aged" : "old");


