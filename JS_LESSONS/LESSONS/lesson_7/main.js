//////////////////- trty catch es 6 spred json-/////////////////

// let c = 'qwe';
// console.log(c);
//
// try {
//     console.log('start');
//     console.log(xxx);
//     console.log('end');
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log('do it');
// }
//
// let b = 1;
// console.log(b);


function calc(a, b) {
    if (a === 0) {
        throw new Error('can not divide by 0');
    }
    return a / b;
}

console.log(calc(10, 5));
// console.log(calc(0, 5));
try {
    calc(0, 5)
} catch (e) {
    console.log(e);
}
console.log(calc(20, 5));


console.log('-------------------');


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


function iterator(users) {
    try {
        for (const user of users) {
            console.log(user.wife.name);
        }
    } catch (e) {
        console.log('ти використовуєш не вірний тип формату');
    }
}

iterator(users);


console.log('--------------');


let obj = {
    id: 1,
    name: 'kokos'
}

console.log(obj?.wife?.name);

// optional chain operator------- ?


console.log('-------------------');

let name = 'kooks';
let age = 31;

let user = {
    name,
    age
}
console.log(user);

console.log('---');


function userFabric(name, age, id, greeting) {

    return {
        name, age, id, greeting,
        foo() {
            console.log('qweasd');
        }
    }
}

let user1 = userFabric('koks', 32, 1, () => {
    console.log('hello');
});
console.log(user1);
user1.greeting();
user1.foo();

console.log('---');

let user2 = userFabric('qwe', 77, 2);
console.log(user2);


console.log('-------------------');

//////////////////-destruktyryzacya-/////////////


// function extractor(obj) {
//
//     // let id = obj.id;
//     // let name = obj.name
//
//     // console.log(obj.id,obj.name);
//
//     let {id,name} = obj;
//     console.log(id, name);
// }
//
//
//
// extractor({id:1,name: 'kokos',status: false});



function extractor({id,name}) {
    console.log(id, name);
}

extractor({id:1,name: 'kokos',status: false});

console.log('=========================');

let usir ={
    id:1,
    name:'qwe',
    status:false
}

// usir2 = {
//     id: usir.id,
//     name:usir.name,
//     status:usir.status
// }

usir2 = {...usir,wife:true,id:777};

console.log(usir2);
console.log(usir === usir2);

console.log('===============---------------===============');
let userss = [
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


let map = userss.map((userss, index)=>{
    return {...userss,id:index+1}
});

console.log(map);
console.log(userss);

console.log('===========------------=============--------------=============--------------============');
////////////JSON////////////////////////


console.log(users);

let s = JSON.stringify(users);

console.log(s);

let parse = JSON.parse(s);
console.log(parse);

console.log(parse === users);

let copy = Object.assign(users);
console.log(copy);
console.log(copy === users);







