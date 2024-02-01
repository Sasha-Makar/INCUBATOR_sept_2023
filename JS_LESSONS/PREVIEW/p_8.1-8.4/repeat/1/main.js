// console.log(222222222);

//Функції конструктори//
console.log('=======Функції конструктори===========');


// function User(name, age, status,wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     // console.log(this);
//     this.wife= wife;
//
// }

// function User(name, age, status,wifeName,wifeAge) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     // console.log(this);
//     this.wife= {
//         name:wifeName,
//         age:wifeAge
//     }
//
// }
//
// // let user1 = new User('kokos', 77, true,{name:'asd',age:777111});
// let user2 = new User('kokos', 77, true,'anna',31);
// let user3 = new User('kokos', 77, true);
// // console.log(user1);
// console.log(user2);
// console.log(user3);

// function User(name,age,status,wife) {
//     this.name = name;
//     this.age=age;
//     this.status = status;
//     this.wife= wife;
// }
//
// let user = new User('kokos',31,true,{name:'anna',age:33, status: false});
// console.log(user);
//
//
// function User2(name,age,wifeName,wifeAge) {
//     this.name=name;
//     this.age=age;
//     this.wife = {
//         name:wifeName,
//         age:wifeAge
//     }
// }
//
//
// let user2 = new User2('asd', 77, 'qwe', 11);
// console.log(user2);


// function User(name,age,status,wife) {
//     this.name=name;
//     this.age=age;
//     this.status=status;
//     this.wife = wife
// }
//
// let user = new User('kokos', 33, true, {name: 'anna', age: 77, status: false});
// console.log(user);
//
//
// function User2(name,age,wifeName,wifeAge) {
//     this.name=name;
//     this.age=age;
//     this.wife = {
//         name:wifeName,
//         age:wifeAge
//     }
//     this.greeting = ()=>{
//         console.log('hi');
//     }
// }
//
// let user2 = new User2('kokokokok', 444, 'anya', 77777);
// console.log(user2);
// user2.greeting();


function User(name, age, wife, son) {
    this.name = name;
    this.age = age;
    this.wife = wife;
    this.son = son;
    this.greeting = () => {
        console.log('hi, my son name is' + ' ' + son.name);
    }
}

let user = new User('kokos', 35, {name: 'olya', age: 31}, {name: 'Fsd'});
console.log(user);
user.greeting();




function User2(name,age,wifeName,wifeAge) {
    this.name=name;
    this.age=age;
    this.wife= {
        name:wifeName,
        age : wifeAge,
        greeting(){
            console.log(this.name);
        }
    }
}

let user2 = new User2('koko', 77, 'ania', 75);
console.log(user2);
user2.wife.greeting();


// //prototype call apply bind
// console.log('======prototype call apply bind=======');




