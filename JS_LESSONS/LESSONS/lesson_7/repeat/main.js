// console.log(2222222222);


console.log('===========REPEAT_LESSON-7==========');

console.log('start');
try {
    console.log(a);
} catch (e) {
    console.log(e);
} finally {
    console.log('qweasdf');
}

console.log('end');

console.log('=============');

function calc(a,b) {
    if (b === 0) {
        throw new Error('b is 0')
    }
    return a / b;
}

// console.log(calc(10, 0));

try {
    console.log(calc(10, 0));
} catch (e) {
    console.log(e);
}


console.log('=====');

function userFabric(id,name,age) {
    // return {id:id,name:name, age: age}
    return {id,name, age}
}

let fabric = userFabric(1, 'koko', 77);
console.log(fabric);
let fabric1 = userFabric(2, 'asd', 444444);
console.log(fabric1);


function extractor({id,name}) {
    console.log(id, name);
}

extractor({id:33,name:'kokok', age: 77});


let user = {
    id:1,
    name:'asd',
    age:33
}


let {name:userName,age:userAge} = user;
console.log(userAge, userName);
console.log('---');

let nums = [1, 2, 3];

let [a, ,b] = nums;
console.log(a, b);


console.log('===');
let users = [
    {name: 'vasya', age : 31, status : false},
    {name: 'petya', age : 30, status : true},
    {name: 'kolya', age : 29, status : true},
    {name: 'max', age : 31, status : true}
];


let [user1, user2] = users;

console.log(user1, user2);


console.log('========');


let man = {
    id:1111,
    name: 'qwee',
    age:48444
}


let man2 = {...man,status:false,id:2};
console.log(man2);




