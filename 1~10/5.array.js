'use strict';

// Array

// 1. Declaratioln
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3. Looping over an array
console.clear();
// a.
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.clear();
// b.
for (let fruit of fruits){
    console.log(fruit);
}

console.clear();
// c. 
//allow function non named function
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item form the end
fruits.pop();
console.log(fruits);

// shift: add an item to the front
fruits.unshift('watermelon', 'peach');
console.log(fruits); 

// shift: remove an item form the front
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop and push

// splice: remove and add an item by index position
fruits.push('watermelon', 'peach', 'melon');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1, 'grape', 'pear');
console.log(fruits);

// combine two arrays
const fruits2 = ['coconut', 'durian'];
const newFruits = fruits.concat(fruits2); //concat: combine
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('pear'));
console.log(fruits.indexOf('coconut'));

// includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
