// console.log(22);

// Дата та час

let date = new Date();
console.log(date);

console.log(date.getMonth()+1);
console.log(date.getDay());
console.log(date.getHours());

let user = {
    name: 'kokos',
    age:77,
    bDay: new Date()
}

console.log(user);

console.log('---=---');


//Обробка помилок
// console.log('start');
// try {
//     console.log(a);
// } catch (e) {
//     console.error(e);
// }
// console.log('end');



console.log('start');
try {
    console.log('asd');
    console.log(a);
} catch (e) {
    console.error(e);
} finally {
    console.log('finally block');
}
console.log('end');

console.log('---');


function calc(a,b) {
    return a/b;
}

console.log(calc(10, 0));


// function calc1(a,b) {
//     if (b === 0) {
//         throw new Error('b is 0');
//     }
//     return a/b;
// }
//
// console.log(calc1(10, 0));
//
//
// console.log('---=---');


//Оператор опціональної послідовності


// let user1 = {};
//
// user1.foo();

let user1 = undefined;

user1?.name?.fn;



// Деструктуризація


// let name = 'kokos';
// let age = 33;
// let man = {
//     name,
//     age,
//     foo(){
//         console.log(this);
//     }
// }
//
// console.log(man);
// man.foo();



let mans = {
    name: 'kokos',
    age: 31,
    foo(){
        console.log('foo');
    }
}
console.log(mans);


// let {age,name,foo} = mans;
//
// console.log(age);
// console.log(name);
// foo();

function asd({name}){
    console.log(name);
}

asd({a: 'qwe', name: 'kok'});

console.log('=====');


let name = 'kokos';
let age = 33;
let man = {
    name,
    age,
    foo(){
        console.log(this);
    },
    wife : {
        name: 'anna'
    }
}

console.log(man);
man.foo();


let {name:userName,age:userAge,wife:{name:wifeName},wife} = man;

console.log(userName, userAge);
console.log(wifeName);
console.log(wife);


let numbers = [1, 2, 3];

let [a,b,c]= numbers;

console.log(a, b,c);

let number = [1, 2, 3];

let [q, ,w]= number;

console.log(q,w);



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

let [user0, user2] = users;

console.log(user0);
console.log(user2);



//Spred оператор



let userMan = {
    name : 'kokos',
    age:31
}

let userMan1 = userMan;

console.log(userMan1 === userMan);


let userCopy = {...userMan};
console.log(userCopy);
userCopy.age = 777;
console.log(userCopy);
console.log(userMan);


let nums = [1, 2, 3, 4, 5, 6, 7];

let numsCopy = [...nums];

console.log(numsCopy);





/////Поверхнева та глибока копії та JSON


console.log('======JSON=======');



const userS = {
    name: 'kokok',
    age: 77,
    skills : ['html','js'],
    foo(){

    }
}


usCopy = {...userS};
console.log(usCopy);

console.log('---');

console.log(usCopy === userS);

console.log(usCopy.skills === userS.skills);


let stringify = JSON.stringify(userS);

console.log(stringify);

let parse = JSON.parse(stringify);

console.log(parse);


console.log(parse.skills === userS.skills);


let assign = Object.assign({}, userS);
console.log(assign);

let structuredClone1 = structuredClone(userS);
console.log(structuredClone1);






