// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

//- створити функцію яка обчислює та повертає
//площу прямокутника зі сторонами а і б
// S = a · b

let rectangleArea = (a, b) => a * b;

let rectangle = rectangleArea(10, 20);
console.log(rectangle);

console.log('-------');


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// S = π r**2

let circleArea = (radius) => Math.PI * Math.pow(radius, 2);
let circle = circleArea(10);

console.log(circle);

console.log('-------');


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Sцил = 2πR**2 + 2πRH

let cylinderArea = (height, radius) => 2 * Math.pow(Math.PI, 2) + 2 * Math.PI * radius * height;

let cylinder = cylinderArea(3, 3);

console.log(cylinder);

console.log('-------');


// - створити функцію яка приймає масив та виводить кожен його елемент

let loop = (arr) => {
    for (const item of arr) {
        console.log(item);
    }
}

loop([1, 2, 3, 4, 5]);


console.log('-------');


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let pCreator = (txt) => {
    document.write(`<p>${txt}</p>`);
    document.write('<hr>');
}

pCreator('hello');
pCreator('what is your name?');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент
// всім однаковий

let ulCreator = (txt) => {
    document.write('<ul>');
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write('</ul>');
    document.write('<hr>');
}

ulCreator('okten');




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент
// всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulLoopCreator = (txt, size) => {
    document.write('<ul>');
    for (let i = 0; i < size; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write('</ul>');
    document.write('<hr>');
}

ulLoopCreator('hello friend', 3);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та
// будує для них список

let primitive = [1, 2, 3, true, false, 'qwe', 'asd'];

let primitiveList = (arr) => {
    document.write('<ol>');
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ol>');
    document.write('<hr>');
}

primitiveList(primitive);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та
// виводить їх в документ. Для кожного об'єкту окремий блок.

let usersArr = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true}
];

let objectList = (arr)=> {
    for (let item of arr) {
        document.write(`<div>#${item.id} - ${item.name} - ${item.age} years</div>`)
    }
    document.write('<hr>');
}

objectList(usersArr);



// - створити функцію яка повертає найменьше число з масиву

let numArray = [11, 15, 33, 0, 77, -5, 777, 123];

let minNum = (arr) => {
    let res = numArray[0];
    for (const num of arr) {
        if (res > num) {
            res = num;
        }
    }
    console.log(res);
}

minNum(numArray);

console.log('--------');



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та
// повертає його. Приклад sum([1,2,10]) //->13

let numbers = [1,2,10];

let summator = (arr)=> {
    let res = 0;
    for (const item of arr) {
        res+=item;
    }
    console.log(res);
}

summator(numbers);

console.log('-------');



// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у
// відgповідних індексах.Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr,index1,index2) => {
    let version1 = arr[index1];
    let version2 = arr[index2];
    arr[index1] = version2;
    arr[index2] = version1;
    console.log(arr);
}

swap([11,22,33,44,],0,1);

console.log('-------');



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (uah, currencies, exitCurrency) => {
    for (const item of currencies) {
        if (item.currency === exitCurrency) {
            console.log(uah / item.value);
        }
    }
}

exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');



console.log('------------------------------------------------');