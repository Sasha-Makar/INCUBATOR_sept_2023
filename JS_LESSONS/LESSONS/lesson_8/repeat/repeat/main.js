// alert(111);


console.log('=======REPEAR_L2_LEESS_8============');

// function UserCreator(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
//
// let user = new UserCreator('qwerty', 77);
// console.log(user);
//
// let user2 = new UserCreator('kokokokokokoko', 7777777);
// console.log(user2);


// function UserCreator(name, age,wife) {
//     this.name = name;
//     this.age = age;
//     this.wife = wife;
// }
//
// let user = new UserCreator('llll',888,{name:'asd',age:45, id: 7});
// console.log(user);


// function UserCreator(name, age,wifeName,wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.wife = {
//         name:wifeName,
//         age:wifeAge
//     }
// }
//
// let creator = new UserCreator('qw', 77, 'anna', 77);
// console.log(creator);


// let u1 = {
//     name:'Qwe',
//     greeting(msg){
//         console.log(`${msg}!!! ${this.name}`);
//     }
// }
// console.log(u1);
// u1.greeting('hi');
// let u2 = {
//     name: 'Asd'
// }
// console.log(u2);
//
//
// u1.greeting.call(u2,'sssssss');
//
// u1.greeting.apply(u2, ['Olla']);
//
//
//
// let copy = u1.greeting.bind(u2);
// copy('aaaaa','sss');


class User {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.greeting = function (msg) {
            console.log(`${msg}, my name is ${this.name}`);
        };
    }
    foobar(){
        console.log('hi man!');
    }
}

let user = new User('Alla', 77, 3);
console.log(user);
user.greeting('Olla!!!');
user.foobar();


class Pro extends User{
    constructor(name, age, id,password,login) {
        super(name, age, id);
        this.password=password;
        this.login = login;
    }
}

let pro = new Pro('ZZZZZZ', 111, 7, '789', 'dddfffggg');
console.log(pro);
pro.foobar();
pro.greeting('BUBa');

