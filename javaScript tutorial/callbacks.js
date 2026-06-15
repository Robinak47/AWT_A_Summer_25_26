
const num = [1, 2, 3, 4, 5];

function odd(n) {
    return n % 2 != 0;
}

function even(n) {
    return n % 2 == 0;
}

function numbers(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(numbers(num, odd));
console.log(numbers(num, even));