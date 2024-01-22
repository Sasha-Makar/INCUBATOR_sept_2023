// alert(22);


//
// function createUlWithiLi5() {
//      document.write('<ul>');
//      for (let i = 0; i < 5; i++) {
//           document.write('<li>ITEM</li>');
//      }
//      document.write('</ul>');
// }
//
// createUlWithiLi5();
//
//
// function createOlWithiLi5() {
//      document.write('<ol>');
//      for (let i = 0; i < 5; i++) {
//           document.write('<li>ITEM</li>');
//      }
//      document.write('</ol>');
// }
// createOlWithiLi5();
//
//
//
//
//
// function foobar() {
//      createUlWithiLi5();
//      createOlWithiLi5();
// }
// foobar();
// foobar();
// foobar();
// foobar();
// foobar();
// foobar();
//
//
// document.write('<hr>');

let usersWithAddress = [
     {id: 1,name: 'Petro',age: 28,status: true,address: {city:'Lviv',street:'Shevchenko', number: 11}},
     {id: 2,name: 'Kolya',age: 30,status: false,address: {city:'Lviv',street:'Shevchenko', number: 25}},
     {id: 2,name: 'Olya',age: 25,status: false,address: {city:'Lviv',street:'Shevchenko', number: 128}},
     {id: 4,name: 'Max',age: 32,status: true,address: {city:'Lviv',street:'Shevchenko', number: 325}},
     {id: 5,name: 'Sveta',age: 24,status: true,address: {city:'Lviv',street:'Shevchenko', number: 14}},
     {id: 6,name: 'Yura',age: 31,status: true,address: {city:'Lviv',street:'Shevchenko', number: 36}},
     {id: 7,name: 'Nata',age: 27,status: false,address: {city:'Lviv',street:'Shevchenko', number: 125}},
     {id: 8,name: 'Oleg',age: 30,status: false,address: {city:'Lviv',street:'Shevchenko', number: 47}},
     {id: 9,name: 'Dima',age: 29,status: true,address: {city:'Lviv',street:'Shevchenko', number: 56}},
     {id: 10,name: 'Yulia',age: 31,status: false,address: {city:'Lviv',street:'Shevchenko', number: 74}},
     {id: 11,name: 'Vova',age: 25,status: true,address: {city:'Lviv',street:'Shevchenko', number: 197}}
]
let users = [
     {name: 'vasya', age : 31, status : false},
     {name: 'petya', age : 30, status : true},
     {name: 'kolya', age : 29, status : true},
     {name: 'olya', age : 28, status : false},
     {name: 'max', age : 30, status : true},
     {name: 'anya', age : 31, status : false},
     {name: 'oleg', age : 28, status : false},
     {name: 'andrey', age : 29, status : true},
     {name: 'masha', age : 30, status : true},
     {name: 'olya', age : 31, status : false},
     {name: 'max', age : 31, status : true}
];

function iterator(arr) {
     for (const user of arr) {
          console.log(user);
     }
     console.log('-------------');
}

iterator(users);
iterator(usersWithAddress);



///////////////////////////////////////////////


function asd() {
    console.log(arguments);
}

asd(1, 2, 3, 4, 5);

//rest

function foo(x,y,...rest) {
    console.log(rest);
    console.log(x);
    console.log(y);
}

foo(1, 2, 3, 4, 5, 6, 7);


let arr = [];
function foobar() {
    arr.push(Math.round(Math.random() * 10));
    console.log(arr);
}

foobar();
foobar();
foobar();
foobar();
foobar();
foobar();
foobar();
foobar();
foobar();


console.log('---------------');


function generrateArr(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[arr.length] = (Math.round(Math.random() * 10));
    }
    return arr;
}

let g1 = generrateArr(10);
console.log(g1);
let g2 = generrateArr(5);
console.log(g2);
console.log(generrateArr(100));





