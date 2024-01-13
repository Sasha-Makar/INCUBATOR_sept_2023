// alert('hello\n' + 'my dear\n' + 'friend');


let arr;
arr = [0, 1, 2, 3, 'qwe', true, 5 > 6, [1, 2, 3], '100'];

console.log(typeof arr);
console.log(arr);
console.log(arr.length);
let ind = arr.length - 1;
console.log(ind);
console.log(arr[4]);
console.log(arr[7][1]);
console.log(arr[7].length);

let arr2 = [];

arr2[arr2.length] = 'qwe';
console.log(arr2);
arr2[arr2.length] = 123;
arr2[arr2.length] = 'asd';
console.log(arr2);
console.log(arr2.length);

console.log(arr2[15]);
arr2[arr2.length] = 17;
console.log(arr2);

console.log('=================');

let array = [
    [1, 2, 3],
    ['qwe', 1, 'asd'],
    [7, 8]
];

console.log(array);
console.log('array length -', array.length, 'elements');

console.log(array[1][1]);

let user = {
    id: 1,
    name: 'John',
    age: 47,
    status: true,
    wife: {
        name: 'alisa',
        age: 33
    },
    greeting: function () {
        console.log(`hello ${this.name}`);
        console.log(`hello ${this.wife.name}`);
    },
    skills: ['html', 'js', 'sql']
}

console.log(user);

console.log(user.id);
user.id = 0;
console.log(user);

delete user.name;
console.log(user);


user.name = 'vasya';
console.log(user);


console.log('==========');

console.log(user);

console.log(user.wife.age);

user.greeting();


console.log('=============');
console.log(user.skills[1]);
console.log(user['age']);


console.log('@@@@@@@@@@@@@@@@@@@@@@2');


let users = [
    {skills: ['html', 'js', 1], id: 0, name: 'vasya', age: 31, status: false},
    {skills: ['html', 'js', 2], id: 1, name: 'petya', age: 30, status: true},
    {skills: ['html', 'js', 3], id: 2, name: 'kolya', age: 29, status: true},
    {skills: ['html', 'js', 4], id: 3, name: 'olya', age: 28, status: false}
];

console.log(users);

console.log(users[0]['status']);
console.log(users[1].id);
console.log(users[2].name);
console.log(users[3]['name']);


console.log(users[0]['skills'][2]);

console.log('##############3');

let a = 100;
console.log(a);
let b = a;
console.log(b);

b = b + 10;
console.log(b);
console.log(a);


let uSer = {
    name: 'vasya'
};

let uSer2 = uSer;
console.log(uSer2);

uSer2.age = 31;

console.log(uSer2);
console.log('---');
console.log(uSer);


console.log('/////////////////IF-ELSE////////////////////////');


// let age = +prompt('enter your age');
// // console.log(typeof age);
// if (age >= 18 && typeof age === 'number'){
//     console.log('welcome');
// }else {
//     console.log('STOP');
// }


// let color = prompt('enter color');
//
// switch (color) {
//     case 'green' : {
//         console.log('go');
//     }
//     break;
//     case 'red': {
//         console.log('stop');
//     }
//     break;
//     default : {
//         console.log('fuck off');
//     }
// }





