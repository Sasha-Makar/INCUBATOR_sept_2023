// alert(22);


function writer(product,price,description) {
     document.write(`
                    <div>
                    <h3>${product} - ${price}</h3>
                    <p>${description}</p>
                    </div>
                    `)
}
writer('Juice',27,'Lorem ipsum1');
writer('Bread',23,'Lorem ipsum2');
writer('Tea',32,'Lorem ipsum3');

console.log('-------------');

function printArray(array) {
    for (let item of array) {
        console.log(item);
    }
}

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
let products = [
    {
        title: 'milk',
        price: 30,
        image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/milk-dairy/taste-teach_prodcatcard.png?sfvrsn=fb05538d_2'
    },
    {
        title: 'juice',
        price: 28,
        image: 'https://img.freepik.com/free-vector/illustration-juce-glass_250435-779.jpg?auto=format&h=200'
    },
    {
        title: 'tomato',
        price: 45,
        image: 'https://img.freepik.com/free-vector/set-realistic-full-sliced-tomatoes-vectors_1441-834.jpg?auto=format&h=200'
    },
    {
        title: 'tea',
        price: 25,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonQ8OD5ZbGBe7c9XolRfXgQjvPU5iFvIwOQ&usqp=CAU'
    }
];

printArray(users);
console.log('-------------');
printArray(products);
console.log('-------------');



function calculator(a,b) {
    return a+b;
}
let calc = calculator(10,20);
console.log(calc);


console.log('-------------');


// function foobar() {
//     console.log(arguments);
// }
//
//
// foobar(1,2,3,4,5);


function foobar() {
    // console.log(arguments);
    if (arguments.length === 2){
        return arguments[0]+arguments[1];
    }else if (arguments.length === 3){
        return arguments[0]+arguments[1]+arguments[2];
    }
}

let foobar1 = foobar(1,2);
let foobar2 = foobar(1,2,3);
console.log(foobar1,'///',foobar2);

console.log('-------------');


function foo(...x) {
    console.log(x);
    console.log(Array.isArray(x));
}

foo(1,2,3,4,5,6,7);

console.log('===');

function foo1(y,z,...x) {
    console.log(x);
    console.log(Array.isArray(x));
    console.log(y);
    console.log(z);
}

foo1(1,2,3,4,5,6,7);





