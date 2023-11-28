
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let array = [];
for (let i = 0; i < 100; i++){
    let num = i;
    if (num%2 ===0){
        array.push(num);
    }
}
console.log(array);

console.log('=========');

//     b. заповнити його 50 непарними числами за допомоги циклу.

 array = [];
for (let i = 0; i < 100; i++){
    let num = i;
    if (!(num%2 ===0)){
        array.push(num);
    }
}
console.log(array);

console.log('=========');

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

array = [];
let count = 20;
for (let i = 0; i < count; i++){
    let num = i;
    array.push(Math.floor(Math.random() * count))
}
console.log(array);

console.log('=========');

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

array = [];
count = 20;
for (let i = 0; i < count; i++){
    let num = i;
    array.push(Math.floor(Math.random(8) * 732))
}
console.log(array);

console.log('=========');

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 1; i < array.length-1; i++){
    let element = array[i];
    if (!(i%3)){
        array.push(element);
    }
}
console.log(array);
console.log('============');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 1; i < array.length-1; i++){
    let element = array[i];
    if (!(i%3) && !(element%2)){
        console.log(element,`index#`+ i);
        array.push(element);
    }
}
console.log(array);
console.log('============');

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newArr = [];
for (let i = 1; i < array.length-1; i++){
    let element = array[i];
    if (!(i%3) && !(element%2)){
        newArr.push(element);
    }
}
console.log(newArr);
console.log('============');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let pairArr = [1,2,3,5,7,9,56,8,67];
let newPair = [];
console.log(pairArr);
for (let i = 0 ; i  < pairArr.length; i++) {
    if (!(pairArr[i]%2)){
        newPair.push(pairArr[i-1]);
    }
}
console.log(newPair);

console.log('============');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати
// середній чек.

let box = [100,250,50,168,120,345,188];
let sum =0;
for (const number of box) {
    sum += number / box.length;
}
console.log(sum);

console.log('========');


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let randomArr = [1,2,3];
console.log(randomArr);
let emptyArr = [];
for (const number of randomArr) {
    emptyArr.push(number*5);
}
console.log(emptyArr);

console.log('=======');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є
// числом - додати його в інший масив.

let arr2 = [1,'qwe', '123',false,true,2,7];
let numsArr = [];
for (const element of arr2) {
    if (typeof element === 'number'){
        numsArr.push(element);
    }
}
console.log(numsArr);

console.log('=====');

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let usersWithCities = usersWithId;

for (let i = 0; i < usersWithId.length; i++){
    for (let j = 0; j < citiesWithId.length; j++){
        if (usersWithId[i].id === citiesWithId[j].user_id){
            usersWithCities[i].address = citiesWithId[j];
        }
    }
}

console.log(usersWithCities);

console.log('========');

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let numsArray = [1,2,3,4,5,6,7,8,9,10];
console.log(numsArray);

for (const number of numsArray) {
    if (number%2 === 0){
        console.log(number);
    }
}

console.log('========');

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.

let newNumsArray = [];
for (const number of numsArray) {
    if (number%2 === 0){
        newNumsArray.push(number)
    }
}
console.log(newNumsArray);

console.log('========');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let strWord = [ 'a', 'b', 'c'];
let word = [];

for (let i = 0; i < strWord.length; i++){
    let char = strWord[i];
    word += char;
}
console.log(word);

console.log('========');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let word2 = [];
let i = 0;
while (i < strWord.length){
    word2+=strWord[i];
    i++;
}
console.log(word2);

console.log('========');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let word3 = [];
for (const char of strWord) {
    word3+=char;
}
console.log(word3);