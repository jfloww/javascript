// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instances of Object
// object = { key : value}; 

// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 =new Object(); //'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const jay = {name: 'Jay', age: 4};
print(jay);

// Can Add
jay.hasJob = true; //Dynamic Typed Language
console.log(jay.hasJob);
// Can Delete
delete jay.hasJob;
console.log(jay.hasJob);

// 2. Computed properties
console.log(jay.name);
console.log(jay['name']); //key must be string
jay['hasJob'] = true;
console.log(jay.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
    // console.log(obj.key); undefined
}
printValue(jay, 'name');

// 3. Property value shorthand
const person1 = {name: 'Bob', age: 2};
const person2 = {name: 'Steve', age: 3};
const person3 = {name: 'Dave', age: 4};
const person4 = {name: 'Aadan', age: 5};
const person5 = new Person('Jay', 24);
console.log(person5);

// 4. Constructor Function
function Person(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in jay);
console.log('age' in jay);
console.log('random' in jay);
console.log(jay.random);

// 6. for...in vs for...of
// for (key in obj)
console.clear(); // clear console
for( key in jay){
    console.log(key);
}
// for (value of iterable)
const array = [1, 2, 4, 6];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
for(value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = {name: 'Jay', age: 24};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
user.name = 'Jay';
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const fruit3 = {color: 'black', size: 'giant'}
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed.size);
// applied on the last one
