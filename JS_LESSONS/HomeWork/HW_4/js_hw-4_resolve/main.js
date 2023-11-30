// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// S = a · b

function rectangleArea(a, b) {
    return res = a * b;
}

let rectangle = rectangleArea(15, 20);
console.log(rectangle);

console.log('-------');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// S = π r**2

function circleArea(radius) {
    return res = Math.PI * Math.pow(radius, 2)
}

let circle = circleArea(10);
console.log(circle);

console.log('-------');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// Sцил = 2πR**2 + 2πRH

function cylinderArea(height, radius) {
    return res = 2 * Math.pow(Math.PI, 2) + 2 * Math.PI * radius * height;
}

let cylinder = cylinderArea(3, 3);
console.log(cylinder);

console.log('-------');

// - створити функцію яка приймає масив та виводить кожен його елемент

function arrElement(array) {
    for (const item of array) {
        console.log(item);
    }
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'qwe', true];
arrElement(nums);
console.log('===');
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
arrElement(users);

console.log('-------');

// - створити функцію яка створює параграф з текстом.Текст задати через аргумент

function txtCreator(text) {
    document.write(`<p>${text}</p>`);
}

txtCreator('Okten is Cool');
txtCreator('Hello World');
txtCreator('qwe asd qweasd');

document.write('<hr>');

// - створити функцію яка створює ul з трьома елементами li.Текст li задати через аргумент всім однаковий

function listCreator(txt) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`);
    document.write('<hr>');
}

listCreator('Okten School');
listCreator('QWE ASD');

document.write('<hr><hr>');

// - створити функцію яка створює ul з трьома елементами li.Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)

function liCreator(txt, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${txt}</li>`)
    }
    document.write(`</ul>`);
    document.write('<hr>');
}

liCreator('qwe', 3);
liCreator('okten', 5);

document.write('<hr><hr>');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function primitiveList(arr) {
    document.write(`<ol>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ol>`);
    document.write('<hr>');
}

let arrOfPrimitive = [1, 2, 3, true, false, 'qwe', 'asd'];
primitiveList(arrOfPrimitive);

document.write('<hr><hr>');

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function objectList(obj) {
    for (let item of obj) {
        document.write(`<div>#${item.id} - ${item.name} - ${item.age} years</div>`)
    }
    document.write('<hr>');
}

let usersArr = [

    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
];
objectList(usersArr);

document.write('<hr><hr>');

// - створити функцію яка повертає найменьше число з масиву

let numArray = [11, 15, 33, 0, 77, -5, 777, 123, -17];

function minNum(arr) {
    let res = 0;
    for (const num of arr) {
        if (res > num) {
            res = num;
        }
    }
    return res;
}

let min = minNum(numArray);
console.log(min);

console.log('-------');

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let numbers = [1,2,10];

function summator(arr) {
    let res = 0;
    for (const item of arr) {
        res+=item;
    }
    return res;
}
let suma = summator(numbers);
console.log(suma);
let suma2 = summator([10,15,25]);
console.log(suma2);

console.log('-------');

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let version_1 = arr[index1];
    let version_2 = arr[index2];
    arr[index1] = version_2;
    arr[index2] = version_1;
    return arr;
}
let swap1 = swap([11,22,33,44],0,1);
console.log(swap1);

console.log('-------');

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(uah, currencies, exitCurrency) {
    for (const item of currencies) {
        if (item.currency === exitCurrency) {
            return uah / item.value;
        }
    }
}

// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'GBP', value: 43}], 'USD'));
let exchange1 = exchange(10000,
    [
        {currency: 'USD', value: 40},
        {currency: 'EUR', value: 42},
        {currency: 'GBP', value: 43}], 'USD');

console.log(exchange1);


console.log('===================END==========================');
