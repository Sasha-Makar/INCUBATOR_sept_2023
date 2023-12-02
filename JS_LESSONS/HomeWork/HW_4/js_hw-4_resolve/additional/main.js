// - створити функцію яка приймає три числа та
// виводить найменьше. (Без Math.min!)

// let num1 = +prompt('enter number#1',1);
// let num2 = +prompt('enter number#2',2);
// let num3 = +prompt('enter number#3',3);
// function minNumber(n1,n2,n3) {
//     let res;
//     if ((n1 === n2)||(n1===n3)||(n2===n3)){
//         return res = 'error';
//     }else if ((n1 < n2)&&(n1 < n3)){
//         return res = n1;
//     }else if ((n2 < n1)&&(n2<n3)){
//         return res = n2;
//     }
//     return res = n3;
// }
// let min = minNumber(num1,num2,num3);
// console.log(min);

////////MATH>MIN////////////
// function minNum(n1,n2,n3) {
//     return  res = Math.min(n1,n2,n3);
// }
// let number = minNum(num1,num2,num3);
// console.log(number);

console.log('-------------------------------');

// - створити функцію яка приймає три числа та
// виводить найбільше. (Без Math.max!)

// function maxNumber(n1,n2,n3) {
//     let res;
//     if ((n1 === n2)||(n1===n3)||(n2===n3)){
//         return res = 'error';
//     }else if ((n1 > n2)&&(n1 > n3)){
//         return res = n1;
//     }else if ((n2 > n1)&&(n2>n3)){
//         return res = n2;
//     }
//     return res = n3;
// }
// let max = maxNumber(num1,num2,num3);
// console.log(max);

////////////MATH>MAX/////////////////
// function maxNum(n1,n2,n3) {
//     return res= Math.max(n1,n2,n3);
// }
// let number = maxNum(num1,num2,num3);
// console.log(number);

console.log('-------------------------------');

// - створити функцію яка повертає найбільше число з масиву
let numArr = [-3, 0, 1, 2, 3, 7, 8, 777, 1777, -33333, 0];

function maxNumInArr(arr) {
    let res = numArr[0];
    for (const num of numArr) {
        if (res < num) {
            res = num;
        }
    }
    return res;
}

let number = maxNumInArr(numArr);
console.log(number);

console.log('-------------------------------');

// - створити функцію яка приймає масив чисел та
// повертає середнє арифметичне його значень.

function middleArr(arr) {
    let res = 0;
    for (const num of arr) {
        res += num;
    }
    return res / arr.length;
}

let middleArr1 = middleArr(numArr);
console.log(middleArr1);

console.log('-------------------------------');

// - створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function simpleNum() {
    let res = arguments[0];
    for (const num of arguments) {
        // console.log(num);
        if (res < num) {
            res = num;
        }
    }
    return res;
}

let simple = simpleNum(1, 155, 2, 3, 4, 5, 8);
console.log(simple);

console.log('-------------------------------');


// - створити функцію яка заповнює масив рандомними числами
let randomNumArr = [];

function randomizer(arr, size) {
    for (let i = 0; i < size; i++) {
        arr[arr.length] = Math.floor(Math.random(i) * size)
    }
    return arr;
}

let randomizer1 = randomizer(randomNumArr, 15);
console.log(randomizer1);

console.log('-------------------------------');


// (цей код генерує рандомні числа в діапазоні від 0 до 100
// - Math.round(Math.random()*100)) та виводить його.

// the same sing

console.log('-------------------------------');

// - створити функцію яка заповнює масив рандомними числами в
// діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// the same thing

console.log('-------------------------------');

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку.
// [1,2,3] -> [3, 2, 1].

let simpleArr = [1, 2, 3];

function reverseArr(arr) {
    let emptyArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const item = arr[i];
        emptyArr.push(item);
    }
    return emptyArr;
}

let rev = reverseArr(simpleArr);
console.log(rev);


console.log('-------------------------------');


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.

function simpleArg() {
    if (arguments.length === 1) {
        console.log(arguments)
    } else if (arguments.length >= 2) {
        let res;
        for (let i = 0; i < arguments.length; i++) {
            res = arguments[i] + arguments[i];
        }
        return res;
    }
}

let simpleArg1 = simpleArg('qwe', 'asd');
console.log(simpleArg1);
let simpleArg2 = simpleArg(1, 2, 3);
console.log(simpleArg2);

console.log('-------------------------------');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з
// однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//[1,2,3,4]
//[2,3,4,5]
// результат
//[3,5,7,9]

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];
let emptyArr = [];
console.log(arr1,arr2);

function indexIter(arr1,arr2) {
    if (arr1.length === arr2.length){
        for (let i = 0; i < arr1.length; i++) {
            emptyArr.push(arr1[i]+arr2[i]);
        }
    }
    console.log(emptyArr);
}

indexIter(arr1,arr2);


console.log('-------------------------------');


// - Створити функцію яка приймає масив будь яких объектів, та повертає
// масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


let simpleObj = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
];
let arrayOfKeys = [];
function keyArr(array) {
    for (const item of array) {
        for (const key in item) {
            arrayOfKeys.push(key);
        }
    }
    console.log(arrayOfKeys);
}

keyArr(simpleObj);


console.log('-------------------------------');


//     - Створити функцію яка приймає масив будь яких объектів, та повертає
// масив значень всіх обєктів
// EXAMPLE:
//[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]



let arrayOfValue = [];

function valueArr(array) {
    for (const item of array) {
        for (const key in item) {
            arrayOfValue.push(item[key]);
        }
    }
    console.log(arrayOfValue);
}


valueArr(simpleObj);


console.log('-------------------------------');