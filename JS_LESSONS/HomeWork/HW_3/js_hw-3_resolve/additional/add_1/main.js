//
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


let num = [1, 2, 3, 4, 5];
console.log(num);
let str = ['qwe', 'asd', 'hello', 'true', '123'];
console.log(str);
let arr = [1, false, true, 'hello', 777];
console.log(arr);

console.log('----------------------------');

// -- Створити пустий масив. Наповнити його будь-якими значеннями
// звертаючись до конкретного індексу. Вивести в консоль

let emptyArr = [];
emptyArr[0] = 789;
emptyArr[1] = 'qwe';
emptyArr[2] = false;
console.log(emptyArr);

console.log('----------------------------');

// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

console.log('=======');

//     2. перебрати його циклом for

for (let j = 0; j < array.length; j++) {
    const element = array[j];
    console.log(element);
}

console.log('=======');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let j = 0;
while (j < array.length) {
    let element = array[j];
    if (!(j % 2 === 0)) {
        console.log(element);
    }
    j++;
}

console.log('=======');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let k = 0; k < array.length; k++) {
    const element = array[k];
    if (!(k % 2 === 0)) {
        console.log(element);
    }
}

console.log('=======');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let k = 0;
while (k < array.length) {
    let element = array[k];
    if (element % 2 === 0) {
        console.log(element);
    }
    k++;
}

console.log('=======');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let l = 0; l < array.length; l++) {
    const element = array[l];
    if (element % 2 === 0) {
        console.log(element);
    }
}

console.log('=======');

// 7. замінити кожне число кратне 3 на слово "okten"

for (let number of array) {
    if (number % 3 === 0) {
        number = 'okten';
        // console.log(number);
    }
    console.log(number);
}

console.log('=======');

// 8. вивести масив в зворотньому порядку.

for (let l = array.length - 1; l >= 0; l--) {
    let element = array[l];
    console.log(element);
}

console.log('=======');
console.log('=======');
console.log('=======');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while

let z = array.length - 1;
while (z >= 0) {
    console.log(array[z]);
    z--;
}

console.log('=======');

//     2. перебрати його циклом for

for (let l = array.length - 1; l >= 0; l--) {
    const element = array[l];
    console.log(element);
}

console.log('=======');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let q = array.length - 1;
while (q >= 0) {
    let element = array[q];
    if (!(q % 2 === 0)) {
        console.log(element);
    }
    q--;
}

console.log('=======');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let l = array.length - 1; l >= 0; l--) {
    const element = array[l];
    if (!(l % 2 === 0)) {
        console.log(element);
    }
}

console.log('=======');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let x = array.length - 1;
while (x >= 0) {
    let element = array[x];
    if (element % 2 === 0) {
        console.log(element);
    }
    x--;
}

console.log('=======');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let l = array.length - 1; l >= 0; l--) {
    const element = array[l];
    if (element % 2 === 0) {
        console.log(element);
    }
}

console.log('=======');

// 7. замінити кожне число кратне 3 на слово "okten"

for (let l = array.length - 1; l >= 0; l--) {
    let element = array[l];
    if (element % 3 === 0) {
        element = 'okten'
    }
    console.log(element);
}

console.log('=======');
console.log('=======');
console.log('=======');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numArr) {
    console.log(number);
}

console.log('=======');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let strArr = ['qwe', 'asd', 'com', 'ua', 'max', 'false', '123', 'okten', 'school'];
for (const item of strArr) {
    console.log(item);
}

console.log('=======');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let difTypeArr = [1, 2, 3, true, false, 'qwe', 'asd', [1, 2, 3], 'error', 777];
for (let l = 0; l < difTypeArr.length; l++) {
    const item = difTypeArr[l];
    console.log(item);
}

console.log('=======');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки булеві елементи

difTypeArr = [1, 2, 3, true, false, 'qwe', 'asd', [1, 2, 3], 'error', 777];
for (const element of difTypeArr) {
    if (typeof element === 'boolean') {
        console.log(element);
    }
}

console.log('=======');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
//     вивести тільки числові елементи

difTypeArr = [1, 2, 3, true, false, 'qwe', 'asd', [1, 2, 3], 'error', 777];
for (const element of difTypeArr) {
    if (typeof element === 'number') {
        console.log(element);
    }
}

console.log('=======');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof
//     вивести тільки рядкові елементи

difTypeArr = [1, 2, 3, true, false, 'qwe', 'asd', [1, 2, 3], 'error', 777];
for (const element of difTypeArr) {
    if (typeof element === 'string') {
        console.log(element);
    }
}

console.log('=======');
console.log('=======');
console.log('=======');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let typeArr = [];
typeArr[0] = 'qwe';
typeArr[1] = 3 > 5;
typeArr[2] = 2 === 2;
typeArr[3] = '777';
typeArr[4] = 'str';
typeArr[5] = 123;
typeArr[6] = 777;
typeArr[7] = true;
typeArr[8] = 'hello';
typeArr[9] = 321;

console.log(typeArr);

for (const element of typeArr) {
    console.log(element);
}

console.log('=======');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку
// через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`${i} `);
}

console.log('=======');
document.write('<hr>');

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку
// через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i} `);
}

console.log('=======');
document.write('<hr>');

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку
// через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`${i} `);
}

console.log('=======');
document.write('<hr>');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки.
//     через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`${i} `);
    }
}

console.log('=======');
document.write('<hr>');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки.
//     через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (!(i % 2 === 0)) {
        console.log(i);
        document.write(`${i} `);
    }
}

console.log('=======');
console.log('=======');
console.log('=======');
document.write('<hr>');
document.write('<hr>');
document.write('<hr>');


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

let booksArr = [
    {
        title: 'QWERT',
        page: 333,
        genre: ['Fantasy','Fantasy', 'SCI-FI'],
        author: ['Kolya','Tamara']
    },
    {
        title: 'QWERTQWT',
        page: 123,
        genre: ['Fantasy', 'SCI-FI'],
        author: ['Kolya','Petya']
    },
    {
        title: 'ASDQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ',
        page: 740,
        genre: ['Classic'],
        author: ['Yulia','Sveta']
    },
    {
        title: 'QWERTASDQWEEEEEEE',
        page: 5333,
        genre: ['SCI_FI'],
        author: ['Petya']
    }
];


console.log(booksArr);
console.log('---------------------------------------------');

// // -знайти наібльшу книжку.

let resultBook = booksArr[0];
for (let book of booksArr) {
    if (book.page > resultBook?.page){
        resultBook = book;
    }
}
console.log(resultBook);
console.log('-----------------------');


// - знайти книжку/ки з найбільшою кількістю жанрів

let resultBook1 = booksArr[0];
for (let book of booksArr) {
    if (book.genre.length > resultBook1?.genre.length){
        resultBook1 = book;
    }
}
console.log(resultBook1);
console.log('------------------');

// - знайти книжку/ки з найдовшою назвою

let resultBook2 = booksArr[0];
for (let book of booksArr) {
    if (book.title.length > resultBook2?.title.length){
        resultBook2 = book;
    }
}
console.log(resultBook2);
console.log('--------------------------');

// - знайти книжку/ки які писали 2 автори

let resultBook3 = [];
for (let book of booksArr) {
    if (book.author.length === 2){
        // resultBook3.push(book);
        resultBook3[resultBook3.length] = book;
    }
}
console.log(resultBook3);


// - знайти книжку/ки які писав 1 автор

let resultBook4 = [];
for (let book of booksArr) {
    if (book.author.length === 1){
        // resultBook3.push(book);
        resultBook4[resultBook4.length] = book;
    }
}
console.log(resultBook4);



