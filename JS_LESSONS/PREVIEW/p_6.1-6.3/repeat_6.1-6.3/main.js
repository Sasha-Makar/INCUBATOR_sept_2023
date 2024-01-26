// alert(22);

// Функції string'ів
console.log('--------Функції string\'ів-------------');


let str = 'hello okten';
console.log(typeof str);
console.log(str[0]);
console.log('---');
for (const st of str) {
    console.log(st);
}
console.log('---');
let s = new String('school');
console.log(s);
console.log(typeof s);
console.log('-------');


let string = 'hello okten';
let s1 = string.concat('!!!');
console.log(s1);
console.log(string);

console.log('-------');

let str1 = 'hello OKTEN !!!';

let up = str1.toUpperCase();
console.log(up);

let low = str1.toLowerCase();
console.log(low);

console.log(str1);

console.log('-------');

console.log(str1.startsWith('hel'));//true
console.log(str1.startsWith('ok'));//false
console.log('===');
console.log(str1.endsWith('ten'));//false
console.log(str1.endsWith('TEN'));//true

console.log('-------');

let copyStr = str1.substring(0);
console.log(copyStr);

let cutStr = str1.substring(0, 7);
console.log(cutStr);


console.log('------------');

let number = str1.indexOf('o');
console.log(number);
console.log(str1.lastIndexOf('O'));
console.log(str1.indexOf('l', 3));
let sss = 'hellllooo oooll';
console.log(sss.indexOf('o', 2));


console.log('------------------------');


console.log(str1.charAt('0'));


console.log('------------');

let replace = str1.replace('l', '#');
console.log(replace);
console.log(str1);
let replaceAll = str1.replaceAll('l', '#$');
console.log(replaceAll);

console.log('-------------------');

let split = str1.split(' ');
console.log(split);


// Базові функції масивів
console.log('-----------Базові функції масивів---------');


let arr = [];
console.log(typeof arr);
console.log(Array.isArray(arr));


arr[arr.length] = 'okten';
console.log(arr);
arr[arr.length] = 'school';
console.log(arr);

arr.push('qwe', 'asd');
console.log(arr);

let popDel = arr.pop();
console.log(arr);
console.log(popDel);

arr.pop();
console.log(arr);


arr.unshift('sss');
console.log(arr);
let shift = arr.shift();
console.log(shift);
console.log(arr);


console.log('-------------------');


console.log(arr);
let arr5 = [11, 22, 33, 77];
let concat = arr.concat(arr5);
console.log(concat);

let join = concat.join('#');
console.log(join);

console.log(concat);
let reverse = concat.reverse();
console.log(reverse);
console.log(concat);

console.log('--------------');


let slice = concat.slice(0, 3);
console.log(slice);
console.log(concat);

console.log('------------');


console.log(concat);

let splice = concat.splice(0, 2, '!!!', 777, '$$$', 'qwe', 787);
console.log(splice);
console.log(concat);

console.log('==============');

console.log(concat.indexOf(11));

let splice1 = concat.splice(concat.indexOf(11), 1, 'fuck');
console.log(splice1);
console.log(concat);


console.log('=========');

console.log(concat.includes(11));
console.log(string.includes('hel'));


////////// Функції масивів з колбеками//////////
console.log('-------------- Функції масивів з колбеками---------------');


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


// users.forEach(function (value,index,array) {
//     // console.log(value,'###');
//     // console.log(index);
//     // console.log(array);
//     if (value.age > 30){
//         console.log(value);
//     }
//
// })

users.forEach(value => console.log(value));
console.log('---');

// let filteredUsers = users.filter(function (value) {
//     return value.age > 30;
// })
// console.log(filteredUsers);

let filteredUsers = users.filter(value => value.age > 30);
console.log(filteredUsers);

console.log('------');


// let mapUsers = users.map(function (value, index) {
//     return {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1,
//     }
// })
//
// console.log(mapUsers);



// let map = users.map(function (value,index) {
//     return {...value, id: index + 1}
// })
// console.log(map);


let map = users.map((value, index) => {
    return {id: index + 1, name: value.name, age: value.age}
})
console.log(map);


let mapUser = users.map((value, index) => {
    return {id: index + 1, status : value.status};
})
console.log(mapUser);


console.log('================');


let find = users.find(value => value.name === 'max');
console.log(find);

console.log('-------');

let every = users.every(value => value.status);
console.log(every);

let some = users.some(value => value.status);
console.log(some);


console.log('==================');



let sort = users.sort((a, b) => {
    return a.age - b.age;
})
console.log(sort);
console.log('---');
let sort2 = users.sort((u1, u2) => {
    return u2.age - u1.age;
} )
console.log(sort2);

console.log('---');

let sort3 = users.sort((u1, u2) => {
    if (u1.name > u2.name) {
        return 1;
    }
    if (u1.name < u2.name) {
        return -1;
    }
    if (u1.name === u2.name) {
        return 0;
    }
})

console.log(sort2);


console.log('==================');

console.log('------REDUCE-----');


// users.reduce((accumulator, currentValue) => {
//     console.log(accumulator,currentValue);
// },[])
//
// users.reduce((accumulator, currentValue) => {
//     console.log(accumulator,currentValue);
// },[[],[]])

let reduce = users.reduce((accumulator, user) => {
    // console.log(accumulator,user);
    if (user.status) {
        accumulator.statT.push(user);
    }else {
        accumulator.statF.push(user);
    }
    return accumulator;

},{statT : [], statF: []})

console.log(reduce);
console.log('---');
console.log(users);


console.log('===============');


usersAge = users.reduce((accum, user)=> {
    if (user.age > 30) {
        accum.ageB.push(user);
    }else {
        accum.ageS.push(user);
    }
    return accum;
},{ageB : [], ageS :[]});

console.log(usersAge);









