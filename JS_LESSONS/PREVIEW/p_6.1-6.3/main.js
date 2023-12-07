console.log('----------------------=-STRING FUNCTIONS-=------------------');
/////////////////////////-STRING FUNCTIONS_/////////////////////////

let str = 'Helllllo Okten !!!';
console.log(str);
// console.log(str[0]);
// for (const strElement of str) {
//     console.log(strElement);
// }


let s = str.concat('!!!');
console.log(s);

console.log('---------');

console.log(str.toUpperCase());
let up = str.toUpperCase();
console.log(up);
console.log(str);


console.log(str.toLowerCase());

console.log('---------------');

console.log(str.startsWith('He'));
console.log(str.endsWith('en'));

console.log('--------------');


console.log(str.substring(0, 7));


console.log(str.indexOf(' '));
console.log(str.length);
console.log(str.substring(5, 11));
let q = str.substring(6, 11);
let w = str.substring(0, 5);
let a = w.concat(q);
console.log(a);


console.log(str.lastIndexOf('l'));

console.log(str.indexOf('l'));
console.log(str.indexOf('l', 4));


console.log('==========');

console.log(str.length);
console.log(str.charAt(11));


console.log('---------------');


console.log(str.replace('l', '#'));
console.log('---');
console.log(str.replaceAll('l', '#'));

console.log('----------------------');

console.log(str.split(' '));


//
// str.length
// str.concat()
// str.toUpperCase()
// str.toLowerCase()
// str.startsWith('He')
// str.endsWith('en')
// str.substring(0, 7)
// str.indexOf(' ')
// str.indexOf('l', 4)
// str.lastIndexOf('l')
// str.charAt(11)
// str.replace('l', '#')
// str.replaceAll('l', '#')
// str.split(' ')


console.log('----------------------=-ARRAY FUNCTIONS-=------------------');
////////////////////-ARRAY FUNCTIONS-/////////////////////

let arr = [];

console.log(Array.isArray(arr));


arr[arr.length] = 'qwe';
console.log(arr);


console.log(arr.push('ok1'));
console.log(arr);

arr.push('ok2');
arr.push('ok3');
arr.push('ok4');
arr.push('ok5');

console.log(arr);

let pop = arr.pop();
console.log(pop);
console.log(arr);


arr.unshift('first');
console.log(arr);

let shift = arr.shift();
console.log(shift);
console.log('----------');

console.log(arr);

let join = arr.join('#');
console.log(join);
console.log(arr);


let arr1 = [1, 2, 3];
console.log(arr1);

console.log(arr.join(arr1));


let concat = arr.concat(arr1);
console.log(concat);


console.log('-----------');


let numbers = arr1.reverse();
console.log(numbers);
console.log(arr1);//////////           !!!!!!!!!!!!!!!!!!!!!!!

console.log('------------');


let arr3 = ['qwe', 'asd', 1, 2, 3, 4, 5, 6, 7, 'qweasd'];

let slice = arr3.slice(0, 3);
console.log(arr3);
console.log(slice);

console.log('---');


console.log(arr3);
let splice = arr3.splice(0, 3);
console.log(splice);
console.log(arr3);
let splice1 = arr3.splice(0, 2, '#', '_', '-', '!!!');
console.log(splice1);
console.log(arr3);

console.log('----------');


let arr4 = [1, 2, 3, 4, 5];
let n = arr4.splice(arr4.indexOf(1), 1);
console.log(n);
console.log(arr4);

console.log('-------');

console.log(arr4.includes(2));


// Array.isArray(arr)
// arr.push()
// arr.pop()
// arr.unshift()
// arr.shift()
// arr.join('-')
// arr.concat(arr1)
// arr.slic(0,3)
// arr3.splice(0,3,'#')


console.log('===========================================================================');
////////////////////-Функції масивів з колбеками-///////////////
////////////////////-Array functions with callbacks-///////////////


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


// users.forEach((user)=> console.log(user));
// users.forEach(function (value,index,array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })

// users.forEach(function (user, index) {
//     console.log(user,- index);
// })

users.forEach(value => console.log(value));
console.log('-------');

users.forEach((value, index) => console.log(value, index));

console.log('--------------');


// let filtered = users.filter(function (value) {
//     return value.age > 30;
// })
//
// console.log(filtered);


let filtered = users.filter(value => value.age > 30);
console.log(filtered);


console.log('-------------------------------');


// let mapedUsers = users.map(function (value,index) {
//     return {
//         name : value.name,
//         age : value.age,
//         id : index + 1
//     }
// });
//
// console.log(mapedUsers);

// let mapedUser = users.map((value, index) => {
//     return {
//         name:value.name,
//         id : index +1
//     }
// })
//
// console.log(mapedUser);


let mapedUser = users.map(function (value, index) {
    return {...value, id: index + 1};
})
console.log(mapedUser);


console.log('---------------');

let find = users.find(value => value.name === 'max');
console.log(find);


console.log('------------');


let every = users.every(value => value.status);
console.log(every);

let some = users.some(value => value.status);
console.log(some);


console.log('----------------');


// let sort = users.sort((a, b) => {
//     return b.age - a.age;
// });
//
// console.log(sort);

console.log(users);
console.log('---');
let sort = users.sort((a, b)=> {
            if (a.name < b.name){
                return 1;
            }
            if (a.name > b.name){
                return -1;
            }
            if (a.name === b.name) {
                return 0;
            }
})
console.log(sort);


console.log('=======================');



let reduce = users.reduce((accumulator, user) => {
    // console.log(previousValue,currentValue);
    if (user.status){
        accumulator.statT.push(user);
    } else {
        accumulator.statF.push(user);
    }
    return accumulator;

},{statT:[],statF:[]});


console.log(reduce);








