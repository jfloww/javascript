// JSON
// simplest data interchage format
// lightweight text-based structure
// easy to read
// key-vlaue pairs
// used for serialization and transmission of data between the network the network connection
// independent programming language and platform

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    DOB: new Date(),
    jump: () => {
        console.log(`${name} can jump`);
    },
}
json = JSON.stringify(rabbit);
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
// const obj = JSON.parse(json, (key, value) => {
//     console.log(`key: ${key}, value: ${value}`);
//     return ket === DOB ? new Date(value) : value;
// });
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.DOB.getDate());
console.log(obj.DOB);

