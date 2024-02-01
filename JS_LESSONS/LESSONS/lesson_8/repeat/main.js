// console.log(22);
//sep 2023 js lesso n8 class
console.log('---------------sep 2023 js lesso n8 class-------------');


// function User(id,name,age,wife) {
//     this.name = name;
//     this.age = age;
//     this.id=id;
//     this.wife = wife;
// }
//
//
// let user = new User(1, 'qwerty', 11,{name:'anna'});
// console.log(user);


function User(id, name, age, wifeName) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.wife = {
        name: wifeName
    }
}


let user = new User(1, 'qwerty', 11, 'olya');
console.log(user);


console.log('========================');

let u1 = {
    name: 'vasya',
    greeting() {
        console.log(`hi, my name is ${this.name}`);
    }
}
console.log(u1);
u1.greeting();


let u2 = {
    name: 'anna',
}
console.log(u2);
try {
    u2.greeting();
} catch (e) {
    console.log(e);
}

console.log('=======');

u1.greeting.call(u2);

let uCopy = u1.greeting.bind(u2);

uCopy();


// call//apply///bind


console.log('==================================');

let o = {};
console.log(o);

console.log(o.__proto__);

let us1 = {
    name: 'qwerty',
    age: 77
}

console.log(us1);

let user2 = Object.create(us1);
console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(user2.hasOwnProperty('name'));
user2.surname = 'qwe';
console.log(user2);
console.log(user2.hasOwnProperty('surname'));


console.log('===============');


class Man {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.foobar = function () {
            console.log(`hi,my name is ${this.name}`);
        }
    }
    greeting(){
        console.log('in procces');
    }
}


let man1 = new Man('kokokok', 77777, 1);
console.log(man1);
man1.foobar();
man1.greeting();



class Client extends Man{
    constructor(name, age, id, passwords) {
        super(name, age, id);
        this.passwords = passwords;
    }
}


let client = new Client('qwe', 111, 3, '789456123');
console.log(client);
client.greeting();
client.foobar();


console.log('=============--------------===================');


let date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getTime());



