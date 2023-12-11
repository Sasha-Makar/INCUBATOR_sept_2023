console.log('/////////////-MAIN-2JS-/////////////////');
console.log('/////////////-MAIN-2JS-/////////////////');
console.log('/////////////-MAIN-2JS-/////////////////');
console.log('/////////////-MAIN-2JS-/////////////////');
console.log('/////////////-MAIN-2JS-/////////////////');


/////////////////////////////-STRING FUNCTIONS-//////////////


let str = 'Hello Okten';
console.log(str);
console.log(str.length);
console.log(str[0]);

console.log('---');

for (const element of str) {
    console.log(element);
}

console.log('---');

let string = new String('qweasd');
console.log(string);

console.log('---');

let s = str.concat('!!!');
console.log(s);
console.log(str);

console.log('---');


console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str);

console.log('---');

console.log(str.startsWith('hel'));//false('Hel')
console.log(str.endsWith('ten'));//true

console.log('---');

let sub = str.substring(1, 7);
console.log(sub);
console.log(str);

console.log('---');

console.log(str.indexOf('o'));
console.log(str.lastIndexOf('O'));
let str2 = 'hello okten';
console.log(str2.indexOf('o', 5));

console.log('---');


console.log(str.charAt(8));


console.log('---');


let replace = str.replace('l', '!!!');
console.log(replace);
console.log(str);
console.log(str.replace('e', '#'));
console.log(str.replaceAll('e', '@'));


console.log('---');

let split = str.split(' ', 1);
console.log(split);
let split1 = str.split('e');
console.log(split1);
let split2 = str.split(' ');
console.log(split2);

console.log('----------------------------------');
console.log('----------------------------------');
console.log('----------------------------------');


/////////////////////////////-ARRAY FUNCTIONS-//////////////


let arr = [];
console.log(typeof arr);

console.log(Array.isArray(arr));

// arr.push()
// arr.pop()
// arr.unshift()
// arr.shift()

console.log('------');
arr.push(1, 2, 3);
console.log(arr);
let empty = '';
for (const item of arr) {
    empty += item + ';'
}
console.log(empty);
console.log(arr.join('-'));

console.log('----------');
let arr2 = ['qwe', 'asd'];
console.log(arr);
console.log(arr2);

let concat = arr.concat(arr2);
console.log(concat);
console.log('---');
console.log(arr);
console.log(arr2);


console.log('---------');

console.log(concat.reverse());

console.log('-----');

console.log(concat);

let slice = concat.slice(0, 2);
console.log(slice);
console.log(concat);

console.log('-----');

let splice = concat.splice(1, 2, 123, '#');
console.log(splice);
console.log(concat);


console.log('-------');


console.log(str.includes(3));

console.log('------------------------------');
console.log('------------------------------');
console.log('------------------------------');


///////////////////////-Array functions with callbacks-////////////////


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


users.forEach(item => console.log(item));
console.log('-----');
users.forEach(function (value, index, array) {
    console.log(value, -index, array);
})


console.log('-----------');

let filter = users.filter(item => item.status);
console.log(filter);
console.log('---');
let filter1 = users.filter(value => value.age > 30);
console.log(filter1);


console.log('---------------------');


let mapedUsers = users.map(function (value, index) {
    return {
        name: value.name,
        age: value.age,
        id: index +1
    }
});
console.log(mapedUsers);


console.log('---');

let map = users.map((value, index)=> {
    return {...value, id:index+1};
});
console.log(map);


console.log('--------------------------');


let find = users.find(value => value.name === 'max');
console.log(find);

console.log('----------------');

let every = users.every(value => value.status);
console.log(every);
console.log('-');
let some = users.some(value => value.status);
console.log(some);

console.log('---------------------');

let sort = users.sort((a, b) => {
    return b.age - a.age;
});
console.log(sort);

console.log('-');

let sort1 = users.sort((a, b)=> {
    return a.name.localeCompare(b.name);
});
console.log(sort1);

console.log('-------------------');


let reduce = users.reduce((accum, user) => {
    if (user.status){
        accum.statT.push(user);
    }else {
        accum.statF.push(user);
    }
    return accum;
}, {statT:[],statF: []});

console.log(reduce);
console.log('---');
console.log(reduce.statT);












