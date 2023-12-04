const asd = function () {
    console.log('hi');
}

asd();


console.log('--------------');


function calc(a, b) {
    return a + b;
}

let calc1 = calc(1, 10);
console.log(calc1);


console.log('---------------');

// let calculator = (a, b) => a + b;
//
// let calculator1 = calculator(10,20);
// console.log(calculator1);

let calculator = (a, b) =>{
   return  a + b;
}

let calculator1 = calculator(10,20);

console.log(calculator1);

////arguments & this dont work in arrow function





///////////////////////////////


// let user = {
//     name : 'vasya',
//     age : 31,
//     greeting : ()=>console.log(`${msg}, my name is ${user.name} ` )
// }
//
//
// user.greeting('hi');



let qwe = {
    name : 'vasya',
    age : 31,
    greeting : function (msg) {
        console.log(this);
        console.log(`${msg} my name is ${this.name}`);
    },
    vitannya : (msg)=> console.log(`${msg} my age is ${this.age}`),//////console.log(`${msg} my age is ${qwe.age}`)
    vitannya_2 : function (msg) {
        console.log(`${msg} my age is ${this.age}`);
    }
}


qwe.greeting('hi!!!');
qwe.vitannya('hello');
qwe.vitannya_2('Good Day')

