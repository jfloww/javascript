'use strict';

// 1. Shorthand property names
{
    const jay1 = {
        name: 'Jay',
        age: '24',
    }
    const name = "Jay";
    const age = '24';
    
    const jay2 = {
        name: name,
        age: age,
    };

    const jay3 = {
        name,
        age,
    };
    console.log(jay1, jay2, jay3);
}

// 2. Destructuring Assignmnet
// Object
const student = {
    name : 'Anna',
    level: '1',
};
// {
//     const name = student.name;
//     const level = student.level;
//     console.log(name, level);
// } ==
{ //Simple
    const {name, level} = student;
    console.log(name, level);
}
{ // Can change name
    const {name: newName, level: newLevel} = student;
    console.log(newName, newLevel);
}

// 3. array
const animals = ['dog', 'cat'];
{ // Old
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
}
{ // New
    const [first, second] = animals;
    console.log(first, second);
}

// 4. Spread Syntax
{
    const obj1 = {key: 'key1'};
    const obj2 = {key: 'key2'};
    const array = [obj1, obj2];
    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);
    // copy and add and modify
    const arrayCopy2 = [...array, {key: 'key3'}];
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);
    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);
    // arry concatenation
    const fruit1 = ['peach', 'strawberry'];
    const fruit2 = ['banana', 'kiwi'];
    const fruits = [...fruit1, ...fruit2];
    console.log(fruits);
    // object merge
    const dog1 = { dog1: 'Dog'};
    const dog2 = { dog2: 'Puppy'};
    const dogs = { ...dog1, ...dog2 };
    console.log(dogs);
}

// Default parameters
{   // Old
    function printMessage(message) { 
        if (message == null) {
            message = 'default message';
        }
        console.log(message);
    }
    printMessage('hello');
    printMessage();
    // New
    function newPrint(newMessage = 'default message') {
        console.log(newMessage);
    }
    newPrint('hello');
    newPrint();
}

// Ternary operator
{
    const isCat = true;
    { // Old
        let component;
        if(isCat) {
            component = 'cat';
        } else {
            component = 'dog';
        }
        console.log(component);
    }
    { // New
        const newComponent = isCat ? 'cat' : 'dog';
        console.log(newComponent);
    }
}

// Template Literals
{
    const weather = 'sunny';
    const temperature = '16°C';
    // Old
    console.log(
        'Today weather is ' + weather + ' and temperature is ' + temperature
    );
    // New
    console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}

// Optional Chaining
{
    const newPerson1 = {
        name: 'Jay',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob'
            },
        },
    };
    const newPerson2 = {
        name: 'Bob',
    };
    { // Old
        function printManager(newPerson) {
            console.log(newPerson.job.manager.name);
        }
        printManager(newPerson1);
        // printManager(person2); Error!
    }
    { // New
        function newPrintManager(newPerson) {
            console.log(newPerson.job?.manager?.name);
        }
        newPrintManager(newPerson1);
        newPrintManager(newPerson2);
    }
}

// Nullish Coalescing Operator (ES 11)
{
    // Logical OR operator
    // flase: flase, '', 0, null, undefined
    {
        const myName = 'Jay';
        const userName = myName || 'Guest';
        console.log(userName);
    }
    {
        const nullName = null;
        const userName = nullName || 'Guest';
        console.log(userName);
    }
    { // Old
        const newName = '';
        const userName = newName || 'Guest';
        console.log(userName);

        const newNum = 0;
        const message = newNum || 'Guest';
        console.log(message);
    }
    { // New
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }
}
