// JavaScript


// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literlas:                 
     
.....
1 + 2 = ${1 + 2}`);

console.log("jay's \n\tbook");

// 2. Numberic operators
// +, -, /, *, **, %

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter ++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 6. Logical operators
// || (or), && (and), ! (not)

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//ex
console.log(0 == false); //T
console.log(0 === false); //F
console.log('' == false); //T
console.log('' === false); //F
console.log(null == undefined); //T
console.log(null === undefined); //F

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name  === 'jay'){
    console.log('Welcome Jay');
}else if(name === 'coder'){
    console.log('You are amazing coder')
}else{
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'jay' ? 'yes' : 'no');

// 10. Switch statement
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        break;
    case 'Firefox':
        break;
    default:
        console.log('same all');
        break;
}

// 11. loops
//while
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

//do while
do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

//for
for(let i = 3; i > 0; i = i - 2){
    console.log(`inline variable for: ${i}`);
}

// Q1: Iterate form 0 to 10 and print omly even numbers 
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0){
        console.log(`i = ${i}`);
    }
}
// Q1 with use continue
for (let i = 0; i <= 10; i++){
    if(i % 2 !==0){
        continue;
    }
    console.log(`q1.${i}`);
}

// Q2: Iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i <= 10; i++){
    console.log(`i = ${i}`);
    if (i == 8){
        break;
    }
}




