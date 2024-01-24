// alert(22);

// Функціональні вирази

// greeting();
// let greeting = function () {
//     console.log('hi');
// }
// greeting();


//
// foo();
// function foo() {
//     console.log('qweasdf');
//
// }


//Стрілочні функції


// function calc(a, b) {
//     return a + b;
// }

let calc = (a, b) => a + b;

let calc1 = calc(10, 10);
console.log(calc1);

// not arguments in arrow function






// Функції в об'єктах та контест this


// let user = {
//     name : 'Vasya',
//     greeting : function (msg) {
//         console.log(`${msg}, my name is ${user.name}`);
//     }
// }
//
//
// user.greeting('Hi');


let asd = {
    name: 'Olya',
    age : 31,
    greeting : function (msg) {
        console.log(this);
        console.log(`${msg}, my name is ${this.name}`);
    },
    vitannya : (msg)=> {
        console.log(`${msg}, my age is ${this.age}`);
    },
    vitannya2 : (msg)=> {
        console.log(`${msg}, my age is ${asd.age} years`);
    }
}

asd.greeting('Hello');

asd.vitannya('Hi');

asd.vitannya2('Hi');