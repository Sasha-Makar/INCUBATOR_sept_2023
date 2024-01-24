// - створити функцію яка обчислює та повертає
// площу прямокутника зі сторонами а і б

function triangle(a, b) {
    return a * b;
}

let triangle1 = triangle(10, 10);
console.log(triangle1);

// - створити функцію яка обчислює та повертає
// площу кола з радіусом r
///S = pi * r^2
//
function square(radius) {
    return areaSqr = Math.PI * Math.pow(radius, 2);
}

console.log(square(2));
let square1 = square(3);
console.log(square1);
// - створити функцію яка обчислює та повертає
// площу циліндру висотою h, та радіутом r
///////////////////
// - створити функцію яка приймає масив та виводить
// кожен його елемент
//
function arrPaint(arr) {
    document.write('<ul>');
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
        console.log(item);
    }
    document.write('</ul>');
}

arrPaint([1, 2, 3, 4, 5, 'okten', {}]);


// - створити функцію яка створює параграф з текстом.
//     Текст задати через аргумент

function creator(txt) {
    document.write(`<p>${txt}</p>`);
}

creator('qwe');
creator('asd');
creator('okten');

//
// - створити функцію яка створює ul з трьома елементами li.
//     Текст li задати через аргумент всім однаковий

function ulCreator(txt) {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write('</ul>');
}

ulCreator('Okten');


//
// - створити функцію яка створює ul з трьома елементами li.
//     Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
//


function olCreator(txt, size) {
    document.write('<ol>');
    for (let i = 0; i < size; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write('</ol>');
}

olCreator('SCHOOL', 5);
// - створити функцію яка приймає масив примітивних
// елементів (числа,стрінги,булеві), та будує для них список


function primitiveList(arr) {
    document.write('<ul>');
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

primitiveList([1, 2, 'qaz', true, false, '100']);


//
// - створити функцію яка приймає масив об'єктів з наступними
// полями id,name,age , та виводить їх в документ. Для кожного
// об'єкту окремий блок.
//

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4}
];

function objCreator(arr) {
    for (const item of arr) {
        document.write(`<div>#${item.id}: ${item.name}-${item.age} years old</div>`)
    }
}

objCreator(users);


// - створити функцію яка повертає найменьше число з масиву
let nums = [1, 2, -111, 30, 11, 0, -1, '-infinity', Infinity, -Infinity];

function minNum(arr) {
    let res = nums[0];
    for (const elem of arr) {
        if (elem < res) {
            res = elem;
        }
    }
    return res;
}

let numberMin = minNum(nums);
console.log(numberMin);


//
// - створити функцію sum(arr)яка приймає масив чисел, сумує
// значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//


function sumArr(arr) {
    let res = 0;
    for (const item of arr) {
        res += item;
    }
    return res;
}

let sum = sumArr([1, 2, 3, 4, 5, 10, 25]);
console.log(sum);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями
// заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//

function swap(arr, index1, index2) {
    // console.log(arr[index1]);
    let ver1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = ver1;
    return arr;
}

console.log(swap([11, 22, 33, 44], 3, 0));


// - Написати функцію обміну валюти exchange(sumUAH,
//     currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD', value:40}, {currency:'EUR', value:42}],'USD') // => 250


function exchange(sumUAH, currencyValue, exchangeCurrency) {
    for (const currency of currencyValue) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH /currency.value
        }
    }
}

let res = exchange(10000,[{currency:'USD', value:40}, {currency:'EUR', value:42}],'USD');
console.log(res,'USD');

let resE = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR');
console.log(resE,'EUR');