// function User(id,name,age) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User(1,'Kokos',31);
// console.log(user);

//agregacya

// function User(id,name,age,wife) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.wife = wife;
// }
//
// let user = new User(1,'Kokos',31,{name:'Olya',age:31,status:true});
// console.log(user);


//compozycya


// function User(id,name,age,wifwName,wifeAge) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.wife = {
//         name : wifwName,
//         age: wifeAge
//     }
// }
//
// let user = new User(1,'Kokos',31,'Olga',31);
// console.log(user);


// let u1 = {
//     name:'Vasya',
//     greeting(msg,age){
//         console.log(`${msg} my name is ${this.name} and my age is ${age}`);
//     }
// }
// u1.greeting('Olla',77);
//
// let u2 = {name:'Petya'};
// // try {
// //     u2.greeting();
// // } catch (e) {
// //     console.log(e);
// // }
// //
// u1.greeting.call(u2,'Pryvit',27);
//
// u1.greeting.apply(u2,['Akuku',88]);
//
//
// let copyGreeting = u1.greeting.bind(u2);
//
// copyGreeting('Aloha',778);
//
//
// console.log('=========================');
// console.log('=========================');
// console.log('=========================');

///////////////////////////////////-REPEAT-//////////////////////////////////////////////////////////

// function User(id,name,age) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
// }
//
// let user1 = new User(1,'kokos',37);
// console.log(user1);
//
// for (const key in user1) {
//     console.log(key,user1[key]);
// }

//agrecgcia
// function User(id,name,age,wife) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
//     this.wife = wife;
// }
//
// let user = new User(1,'koko',37,{name:'olya',age:33,id:1,status:true});
// console.log(user);

//kompozycia
// function User(id,name,age,wifeName,wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
//     this.wife = {
//         name : wifeName,
//         age:wifeAge
//     }
// }
//
// let user = new User(1,'koko',37,'olya',33);
// console.log(user);

console.log('-----');


let u1 = {
    name: 'Kokos',
    age: 37,
    greeting(msg,status){
        console.log(`${msg} my name is ${this.name} and my status is ${status}`);
}
}
console.log(u1);
u1.greeting('Hello',true);


let u2 = {name:'Petro'};
console.log(u2);

u1.greeting.call(u2,"Olla",false);
console.log('---');
u1.greeting.apply(u2,['qwe',false]);
console.log('---');
let greeting = u1.greeting.bind(u2);
greeting('Aloha',true);
console.log('=========');
console.log('=========');
console.log('=========');
console.log('=========');
console.log('=========');


let u ={};
console.log(u);
console.log('---');
console.log(u.__proto__);

let arr = [1,2,3];

console.log(arr.__proto__);

console.log('---');

let user = {
    id:1,
    name:'Olya'
}
console.log(user);

let newUser = Object.create(user);

console.log(user.id);
console.log(user.name);
console.log('-');
console.log(newUser.id);
console.log(newUser.name);
console.log('-');
console.log(user);
console.log(newUser);


console.log('---');

newUser.name='kokos';
console.log(newUser);
console.log(newUser.name);


console.log('====================');


let y = {};
console.log(y);
console.log(y.__proto__);

let d = {name:'qwe'};
console.log(d);

let object = Object.create(d);
console.log(object);

console.log('=========');


/////class



class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`Hello, my name is ${this.name}`);
    }
    foobar(){
        console.log(`hi, my age is ${this.age}`);
    }

}

let user1 = new User(1,'kokos',31);
console.log(user1);
user1.greeting();
user1.foobar();

console.log('---');

class UserCreator {
    constructor(id,name,age,status) {
        this.id = id;
        this.name=name;
        this.age = age;
        this.status = status;
    }
    greeting(){
        console.log(`Olla, my name is ${this.name}`);
    }
    myStatus(){
        console.log('My status is ' + this.status);
    }
}

let user2 = new UserCreator(2,'asd',77,false);
console.log(user2);
user2.greeting();
user2.myStatus();

let user3 = new UserCreator(3,'asdqwe',71,true);
user3.greeting();
user3.myStatus();

console.log('===');



class Client extends UserCreator{
constructor(id, name, age, status, password) {
        super(id, name, age, status);
        this.password = password;
    }
}

let client = new Client(4,'lola',88,true,'1234567');
console.log(client);

client.greeting();
client.myStatus();


console.log('============================================');




let date = new Date();
console.log(date.getDate());







