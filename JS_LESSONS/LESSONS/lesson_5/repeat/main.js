// alert(22);

// function foo() {
//     console.log('qwe');
// }
// foo();


// foo();
// function foo() {
//     console.log('qwe');
// }


// foobar();
// let foobar = function () {
//     console.log('asdfgghjjk');
// }

// let foobar = function () {
//     console.log('asdfgghjjk');
// }
// foobar();
//
//
//
//
//
// let calc = function (a,b) {
//     return a+ +b;
// }
// let res = calc(10, 20);
// console.log(res);
//
//
// let calculator = (a,b)=> a + b;
//
// let result = calculator(1, 2);
// console.log(result);


//
// let foobar = (...rest)=> console.log(rest);
// foobar(1, 2, 3);
//
//
// let foo = ()=> console.log(arguments);
// foo(1,2,3);

//fn declaration & fn expression __ arguments +
// fn arrow __ arguments -

// ...rest (rest arguments)___works in all fn



function foo() {
    console.log('hi');
}
let x = function () {
    console.log('hello');
}


let fnArr = [foo, x, z = () => console.log('aloha')];

fnArr[0]();
fnArr[1]();
fnArr[2]();

console.log('--------------');


let user = {
    name: 'kokos',
    age: 31,
    greeting : function () {
        console.log('hello my friends');
    }
}
user.greeting();

let user2 = {
    name: 'kokos',
    age: 31,
    greeting() {
        console.log('hello, my name is - ' + this.name);
    }
}
user2.greeting();


let user3 = {
    name: 'kokos',
    age: 31,
    greeting : ()=> {
        console.log('aloha, my name is - ' + user3.name);
    }
}
user3.greeting();



let user4 = {
    name: 'kokos',
    age: 31,
    greeting : function () {
        console.log('hello');
    },
    wife : {
        name: 'qweasdz',
        greeting(){
            console.log('hi, my name is - ' + this.name);
            user.greeting();
        }
    }
}

user4.wife.greeting();


console.log('------------------');


let loop = (arr)=>{
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

loop([1, 2, 3]);
