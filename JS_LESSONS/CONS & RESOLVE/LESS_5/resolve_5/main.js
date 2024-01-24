// alert(22);

// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let square = (a, b) => a + b;
let triangle = square(10, 20);
console.log(triangle);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleSqr = r => {
    return Math.PI * Math.pow(r, 2);
}
let circle = circleSqr(2);
console.log(circle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// - створити функцію яка приймає масив та виводить кожен його елемент
let loop = (arr) => {
    for (const loopElement of arr) {
        console.log(loopElement);
    }
}
loop([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = txt => document.write('<p>' + txt + '</p>');
paragraph('okten');
paragraph('is cool');
paragraph('school');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ulCreator = txt => {
    document.write(`<ul>
                    <li>${txt}</li>
                    <li>${txt}</li>
                    <li>${txt}</li>
                    </ul>`)
}
ulCreator('Octen');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let olCreator = (txt, size) => {
    document.write('<ol>');
    for (let i = 0; i < size; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write('</ol>');
}
olCreator('School', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primList = arr => {
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write('</ul>');
}

primList([1, 2, 3, 'qwe0', 'asd', true, 100, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let array = [
    {
        id: 1,
        name: 'kokos',
        age: 31
    },
    {
        id: 2,
        name: 'vasya',
        age: 33
    },
    {
        id: 3,
        name: 'olya',
        age: 77
    }
]
let objList = arr => {
    for (const item of arr) {
        document.write(`<div>#${item.id}_Name:${item.name}-${item.age} years old</div>`);
    }
}
objList(array);

// - створити функцію яка повертає найменьше число з масиву
let minNum = arr => {
    let res = arr[0];
    for (const num of arr) {
        if (res > num) {
            res = num;
        }
    }
    return res;
}

let minNum1 = minNum([0, 1, 2, -77, 3, 4, 5]);
console.log(minNum1);


let minNumber = array => console.log(Math.min(...array));
minNumber([0, 1, 2, -77, 3, 4, 5, -100500]);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let sumArr = arr => {
    let res = null; /*let res = 0;*/
    for (const num of arr) {
        res += num;
    }
    return res;
}
let sum = sumArr([1, 2, 3, 1]);
console.log(sum);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr,index1,index2)=> {
    let ver1 = arr[index1];
    arr[index1] =arr[index2];
    arr[index2] = ver1;
    console.log(arr);
}
swap([11, 22, 33, 44,55,77], 0, 5);



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let exchange = (sumUAH,currencyValues,exchangeCurrency)=>{
    let res = 0;
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency){
            res = sumUAH / currency.value;
            return res;
        }
    }
}

let number = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(number, 'USD');

let number1 = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR');
console.log(number1, 'EUR');
