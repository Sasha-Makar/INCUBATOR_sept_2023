// console.log('qwe');


/////////////-STRING METHODS-////////////////

console.log('-----------STRING METHODS---------------');

let str = 'okten SHmokten';
console.log(typeof str);

let string = new String('school');
console.log(typeof string);

console.log(str + '!!!');

console.log(str);

let concat = str.concat('###');
console.log(concat);
console.log(str);

console.log('---');
console.log('---');

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log('---');

console.log(str.startsWith('okt', 1));//2 arg position---z yakogoi pozycii chukaty
console.log(str.startsWith('OK'));
console.log(str.endsWith('ten'));
console.log(str.endsWith('qqq',));

console.log('===');

console.log(str.substring(0, 8));

console.log('---');

console.log(str.indexOf('o'));
console.log(str.indexOf('o', 1));
console.log('===========');

let indexOfo = str.indexOf('o');
let lastIndOfo = str.lastIndexOf('o');

let substring = str.substring(indexOfo, lastIndOfo);
console.log(substring);

console.log('==========');


let str2 = '   okten school    ';
console.log(str2);
console.log(str2.trim());

console.log('===');

let replaceAll = str.replaceAll('t', '%%%');
console.log(replaceAll);

console.log('-------');


let phone = '+38 (067) 123-123-123';
console.log(phone);

let phoneV1 = phone.replaceAll(' ', '');
console.log(phoneV1);
let pV2 = phoneV1.replaceAll('-', '');
console.log(pV2);
let pV3 = pV2.replaceAll('(', '');
let pV4 = pV3.replaceAll(')', '');
console.log(pV4);

let p = pV4.replaceAll('+38', '');
console.log(p);

console.log('-----------');

phone = '+38 (067) 123-123-123';
console.log(phone);

let newP = phone
    .replaceAll(' ', '')
    .replaceAll('-', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('+38', '');
console.log(newP);


console.log('===============');


console.log(str.includes('ten'));

console.log('---');
``

let split = str.split('n');
console.log(split);

console.log(str);
let split1 = str.split(' ');
console.log(split1);


let stringB = 'okten is shmokten !!! @@@ ###';

let split2 = stringB.split(' ');
console.log(split2);


console.log('============================');


////////////-ARRAY METHODS-///////////////

console.log('---------------ARRAY METHODS------------------');


let array = {};
let arr = [];

console.log(typeof array);
console.log(typeof arr);

console.log(Array.isArray(array));
console.log(Array.isArray(arr));//array

arr.push(1, 2, 3);
console.log(arr);
let pop = arr.pop();
console.log(pop);
console.log(arr);

arr.unshift('qwe');
console.log(arr);

let shift = arr.shift();
console.log(shift);
console.log(arr);

console.log('==========');


let concat1 = arr.concat([7, 8, 9]);
console.log(concat1);
console.log(arr);


let s = arr.join('-');
console.log(s);
console.log(arr);

console.log('--------');

arr.push(1, 2, 3, 4, 5, 7, 'qwe', 'asd');
console.log(arr);

let reverse = arr.reverse();
console.log(reverse);
console.log(arr);

console.log('----=');

let slice = arr.slice(0, 5);
console.log(slice);

console.log(arr);


console.log('---');
arr.reverse();
console.log(arr);
let splice = arr.splice(0, 6, '#', "!!!");
console.log(splice);
console.log(arr);

console.log('---');

let b = arr.includes('#');
console.log(b);

let number = arr.indexOf('qwe');
console.log(number);


console.log('================');


let numbers = [1, 2, 3, 4, 5, 7, 8, 6, 8, 7, 4];
numbers.forEach(num => console.log(num));

let n = []

numbers.forEach(num => {
    if (num > 5) {
        n.push(num);
    }
})
console.log(n);

console.log('---');

let filters = numbers.filter(value => {
    if (value % 2 === 0) {
        return true
    } else {
        return false
    }
})

console.log(filters);
console.log(numbers);

let ff = numbers.filter(value => console.log(value > 7));

let numbers1 = numbers.filter(item => item > 5);
console.log(numbers1);
console.log(numbers);


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


users.forEach(function (user, index) {
    // console.log(user, index);
    // if(user.status){
    //     console.log(user);
    // }
    if (user.age > 30) {
        console.log(user);
    }
})


console.log('==============');


let nums = [11, 22, 33, 44, 55, 66, 77];

nums.map(num => console.log(num));

let newMap = nums.map(item => item + 10);
console.log(nums);
console.log(newMap);


users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log(users);

let newUsers = users.map((value, index) => {
    return {id: index + 1, ...value};
})
console.log(newUsers);


console.log('------------');


console.log(users);

let sort = users.sort((u1, u2) => {
    return u1.age - u2.age;
})

console.log(sort);

let sortName = users.sort((u1,u2) => {
    return u1.name.localeCompare(u2.name);
})
console.log(sortName);


console.log('----------REDUCE----------');



let arrUsers = [
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


let reduce = arrUsers.reduce((accum, user) => {
    if (user.status){
        accum[0].push(user);
    } else {
        accum[1].push(user);
    }
    return accum;
}, [[],[]] );

console.log(reduce);




