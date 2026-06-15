const arr = [1, 2, 4, "Meow", { name: "mr. tom" }];
console.log(arr);

console.log(arr.push("web tech"));
console.log("after push");
console.log(arr);

console.log(arr.unshift("web tech"));
console.log("after unshift");
console.log(arr);

console.log(arr.pop());
console.log("after pop");
console.log(arr);

console.log(arr.shift());
console.log("after shift");
console.log(arr);

//map method
const arr2 = [1, 2, 3, 4, 5];
console.log("after transforming")
console.log(arr2.map(n => n * 2));
console.log(arr2);

//filter  method

console.log("after filtering")
console.log(arr2.filter(n => n > 2));
console.log(arr2);


//reduce method
console.log("after reducing")
console.log(arr2.reduce((acc, cur) => acc + cur, 0));
console.log(arr2);

//reduce method
console.log("after finding")
console.log(arr2.find(n => n == 2));
console.log(arr2);

const objArr = [{ pId: "p-300", price: 120, isAvailable: true }, { pId: "p-400", price: 20, isAvailable: false }, { pId: "p-500", price: 12, isAvailable: true }, { pId: "p-600", price: 1200, isAvailable: true }];
const avaiableProduct = objArr.filter(o => o.isAvailable == true);
console.log(avaiableProduct);







