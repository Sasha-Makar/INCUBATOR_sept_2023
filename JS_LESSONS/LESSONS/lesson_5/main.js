// alert(22)





let foo = (x,y,...rest)=> console.log(x,y,rest);
foo(1,2,3,4,5);



function foob(...rest) {
    return res = rest;
}
let foob1 = foob(1,2,3,4,5);
console.log(foob1);


for (const item of foob1) {
    console.log(item);
}



// //////////////////////
// let fn1 = function () {
//     console.log('fn1');
// }
// fn1();
// function fn2() {
//     console.log('fn2');
// }
// fn2();
// fn3 = ()=> console.log('fn3');
// fn3();
//
// console.log('-------');
//
// let fnArr = [
//     fn1,
//     fn2,
//     fn3
// ];
// console.log(fnArr[0]());



///////////////////

let user = {
    imya : 'kokos',
    age:31,
    greeting : function () {
        console.log('hello my name is - ' + user.imya);
    }
}
user.greeting();


let user2 = {
    imya : 'vasya',
    age : 31,
    vitannia (){
        console.log('hello my age is ' + this.age);
        console.log(this);
    }
}

user2.vitannia();


let user3 = {
    imya : 'petya',
    age : 37,
    vitannia (){
        console.log('hello my age is ' + this.age);
    }
}

user3.vitannia();



let xxx = {
    imya : 'petya',
    age : 37,
    vitannia:()=> {
        console.log('hello my age is ' + this.age);
        console.log(this);
    },
    wife : {
        name: 'olya',
        age : 27,
        vitannia (){
            console.log('hi my name ia ' + this.name);
        }
    }
}

xxx.vitannia();


xxx.wife.vitannia();



let loop = (arr)=> {
    for (const item of arr) {
        console.log(item);
    }
}

loop([1,2,3]);