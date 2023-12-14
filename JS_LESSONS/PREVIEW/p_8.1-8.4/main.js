/////////-Функції конструктори-////////


// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
// let user = new User('qwe',123,true);
// console.log(user);
//
// let user1 = new User('asd',777,false);
// console.log(user1);
//
// console.log(user1.age);


// function User(name, age, status,wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
// let user = new User('qwe',111,true,{name:'olya',age:777,status:false});
// console.log(user);


// function User(name, age, status,wifeName,wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {
//         name: wifeName,
//         age:wifeAge
//     };
//     this.greeting = function () {
//         console.log('hi');
//     }
// }
//
// let user = new User('qwe',111,true,'asd',777);
// console.log(user);
// user.greeting();


////////////////////-Функції конструктори-////////


// function User(id,name,age) {
//     this.id = id;
//     this.name = name;
//     this.age=age;
//     // console.log(this);
// }
// let user1 = new User(1,'kokos',31);
// console.log(user1);
// console.log('-----');
// new User();
// console.log('------');


// kompozycia

// function User(id,name,age,wife) {
//     this.id = id;
//     this.name = name;
//     this.age=age;
//     this.wife = wife
// }
// let user = new User(1,'kokos',77,{name:'olya',age:31});
// console.log(user);


// agregacia

// function User(id,name,age,wifeName,wifeAge) {
//     this.id = id;
//     this.name = name;
//     this.age=age;
//     this.wife = {
//         name:wifeName,
//         age:wifeAge
//     }
//     this.greeting = function (){
//         console.log('hi');
//     }
// }
//
// let user = new User(1,'kokos',77,'anna',77);
// console.log(user);
// user.greeting();


////////////-prototype call apply bind-//////////////// =====>>> on main_2.js

// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }
//
// console.log('=================');


console.log('====================');


// Класи та наслідування


// class User {
//
//
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     greeting(){
//         return `hi my name is ${this.name}`
//     }
// }
//
// let user = new User('kokos',31);
// console.log(user);
// console.log(user.greeting());
//
// console.log('-----');
//
// class UserFabric {
//     // name,
//     // age +alt+insert
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // static
//     sayHi(){
//         return `Hi ${this.name}`
//     }
// }
// let user2 = new UserFabric('petya',31);
// console.log(user2);
//
// console.log(user2.sayHi());
//
// console.log('======================');

//
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     work(){
//         return 'in process';
//     }
// }
//
//
// class Customer extends User{
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
//
//     // work() {
//     //     return super.work();
//     // }
//
//     work() {
//         return 'fwefwvwgrr';
//     }
// }
// let customer = new Customer('koko',12,'1111111');
// console.log(customer);
// console.log(customer.work());


function User(name, age) {
    this.name = name;
    this.age = age;
}


function Customer(name, age, password) {
    User.apply(this, arguments);
    this.password = password;
}

let customer = new Customer('koko', 111, '7777777');

console.log(customer);

console.log('-------------------------');


/////////////////- Прототипи об'єктів-///////////////////


console.log({});
console.log({}.__proto__);


let user = {
    id: 1,
    name: 'kokos'
}


let user2 = Object.create(user);
console.log(user2);

console.log(user2 === user);

console.log(user2.id);
console.log(user2.name);


console.log(user2.hasOwnProperty('id'));
console.log(user2.hasOwnProperty('name'));
user2.surname = 'qweasdq';
console.log(user2.hasOwnProperty('surname'));
console.log(user2);
console.log('---');

console.log(user.hasOwnProperty('id'));












