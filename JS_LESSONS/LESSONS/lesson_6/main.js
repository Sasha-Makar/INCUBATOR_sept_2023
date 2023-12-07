////////////////////-STRING FUNCTIONS-/////////////////

let str = 'okten shmokten';
console.log(str);
console.log(str.length);

// let str2 = new String('qwe');
// console.log(str2);


// console.log(str[2]);

console.log(str + '!!!');
console.log(str);
console.log(str.concat('!!!'));
let s = str.concat('111', ' ', '###');
console.log(s);
console.log(str);

// str.toLowerCase()
// str.toUpperCase()
// str.startsWith('ok',1)
// str.endsWith()


console.log(str.substring(0, 4));
console.log(str);


console.log(str.indexOf('o'));
console.log(str.indexOf('o', 3));

console.log(str.substring(str.indexOf('o'), str.lastIndexOf('o')));


// str.trim()

console.log(str.replaceAll('ten', '###'));

console.log('===');


let phone = '+38 (067) 338-12-12';///0673381212
console.log(phone);

let v1 = phone.replaceAll(' ', '');
let v2 = v1.replaceAll('-', '');
let v3 = v2.replaceAll('(', '');
let v4 = v3.replaceAll(')', '');
console.log(v4);
let p = v4.replaceAll('+38', '');
console.log(p);
console.log('===============================');
let normPhone = phone
    .replaceAll(' ', '')
    .replaceAll('-', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll('+38', '');
console.log(normPhone);


console.log(str.includes('ten'));

console.log('-------------');




let strings = str.split(' ');
console.log(strings);

console.log('---');

let str1 = 'qwe   asd  !!!';
console.log(str1);

let ss = str1.split(' ');
console.log(ss);




///////////////////////////-ARRAY FUNCTIONS-/////////////////



let arr = [];
console.log(Array.isArray(arr));
console.log(arr.length);
// arr.push()
// arr.pop()
// arr.unshift()
// arr.shift()
let arr1 = [1,2,3,4,5]
let s1 = arr1.join('-');
console.log(s1);


console.log(arr1.reverse());
console.log(arr1);


// arr1.slice(0,2)
// arr1.splice(0,4)


console.log('-------------');


console.log('=============----------------====================');
console.log('=============----------------====================');
console.log('=============----------------====================');


let array = ['qwe', 1, 2, 3, 'asd', 4, 5, 'okten'];
console.log(array);


array.forEach(value => console.log(value));


console.log('--------');
let numbers = [1,2,3,4,5,6,7,8,9,10];

let filt = numbers.filter(function (item) {
    if (item % 2 === 0){
        return true
    }
    return false
})

console.log(filt);

let f = numbers.filter(value => value % 2 === 0);
console.log(f);


console.log('======================');


let voids = numbers.map(item => item +10);
console.log(voids);
console.log(numbers);

console.log('====');
let users = [
    {name: 'vasya', age : 31, status : false},
    {name: 'petya', age : 30, status : true},
    {name: 'kolya', age : 29, status : true},
    {name: 'olya', age : 28, status : false},
    {name: 'max', age : 30, status : true},
    {name: 'anya', age : 31, status : false},
    {name: 'oleg', age : 28, status : false},
    {name: 'andrey', age : 29, status : true},
    {name: 'masha', age : 30, status : true},
    {name: 'olya', age : 31, status : false},
    {name: 'max', age : 31, status : true}
];

let map1 = users.map((value, index) => {
    return {...value, id:index+1}
});
console.log(map1);


console.log('=====');



let sort = users.sort((a, b) => {
    return a.age - b.age;
});
console.log(sort);


let nameSort = users.sort((a, b) => {
    return a.name.localeCompare(b.name);
});
console.log(nameSort);


console.log('==============================');
// reducere






// let reducer = users.reduce((previousValue, currentValue) => )
let reducer = users.reduce((accum, user) => {
    if (user.status){
        accum[0].push(user);
    } else {
        accum[1].push(user)
    }
   return accum;
} ,[[],[]])

console.log(reducer);
