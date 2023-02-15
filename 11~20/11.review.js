// Variable -> number, string, boolean, null, undefined
let age = 24;  //integer
let numString = '2';  //string
console.log(age);
console.log(numString);

// object
let obj = {
    name: 'jay',
    age: 24,
};
console.log(obj.name);
let obj2 = obj;
console.log(obj2.age);
obj.name = 'james';
console.log(obj2.name);

const newNum = 5; // cannot be changed

// Function
const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

function sum(a ,b) {
    return a + b;
}
console.log(sum(num, num2));

function print(a, b) {
    console.log(`${a}, ${b}`);
}
print(8, 19);

function surprise(operator) {
    const result = operator(6, 7);
    console.log(result);
}
surprise(sum);

// Operator
if (undefined) {
    console.log('true');
} else {
    console.log('false');
}

// Class
console.clear();
class Counter{
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }
    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}
const coolCounter = new Counter(printSomething);

function printSomething(num) {
    console.log(`wow! ${num}`);
}
function alertNum(num) {
    alert(`Wow ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);
