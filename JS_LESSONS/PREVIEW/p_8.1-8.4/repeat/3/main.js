// console.log(22);




// class User {
//
//
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//     }
//     greeting(){
//         return 'hello my name is '+this.name;
//     }
// }
//
// let user = new User('koko', 33);
// console.log(user);
// console.log(user.greeting());


class User{

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // static greeting(){
    //     return 'hello my name is '+this.name;
    // }
    work(){
        return 'qeqwfargdsbdsdf'
    }
}


// console.log(User.greeting());


class Customer extends User{

    constructor(name, age, password) {
        super(name, age);
        this.password = password;
    }

    work() {
        return super.work();
    }
}


let customer = new Customer('asd', 111, '123');
console.log(customer);
console.log(customer.work());





// Прототипи об'єктів
console.log('===Прототипи об\'єктів====');


console.log({});

console.log({}.__proto__);


let user = {
    name: 'aaa',
    age:111
}


let user2 = Object.create(user);
console.log(user2);
console.log(user2.name);
console.log(user2.age);
user2.foobar = 'qwee';
console.log(user2);

console.log(user2.hasOwnProperty('name'));
console.log(user2.hasOwnProperty('foobar'));