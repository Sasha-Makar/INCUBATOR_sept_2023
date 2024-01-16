// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого
// типу, вивести кожен елемент в консоль

// let arr = [1, 2, 3, 4, true, 5 > 6,{name:'js',age:31},[1,2,3],'okten','100'];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);

//
// - Створити 3 об'єкти які описують книги. Поля
// об'єкту : title ,pageCount, genre.

// let book1 = {
//     title : 'qwe',
//     pageCount : 345,
//     genre : 'qwer'
// };
// let book2 = {
//     title : 'asd',
//     pageCount : 543,
//     genre : 'dsaa'
// };
// let book3 = {
//     title : 'qweasd',
//     pageCount : 555,
//     genre : 'dsaewq'
// };
//
// console.log(book1, book2, book3);
// console.log(book3.genre);


// - Створити 3 об'єкти які описують книги. Поля
// об'єкту : title ,pageCount, genre, authors. Поле
// "автори" - являється  масивом. Кожен автор має поля name та age.
//
// let book3 = {
//     title : 'qweasd',
//     pageCount : 555,
//     genre : 'dsaewq',
//     authors : [{name:'oleg',age:33},{name:'dima',age:77}],
//     pages: null
// };
// console.log(book3);
// console.log(book3['authors'][1].age);
// console.log(book3.authors[0].name);
//
// console.log(book3.pages);
// book3.pages = 333;
// console.log(book3);
// console.log(book3.pages);


// - Створити масив з 10 об'єктами які описують сутніть
// "користувач". Поля: name, username,password. Вивести в
// консоль пароль кожного користувача
//
// let arrOfUsers = [
//     {
//         name :'qwe',
//         username : 'johny',
//         password : 123
//     },
//     {
//         name :'asdqwe',
//         username : 'dima',
//         password : 123789
//     },
//     {
//         name :'yura',
//         username : 'batman',
//         password : 'okten123'
//     }
// ];
// console.log(arrOfUsers);
//
// console.log('password : ' + arrOfUsers[0].password);
// console.log(arrOfUsers[1].password);
// console.log(arrOfUsers[2]['password']);

//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть
// 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = 123;
// let x = 1;
// let x = 0;
// let x = -3;
//
// if (x !== 0){
//     console.log('virno');
// }else {
//     console.log('nevirno');
// }

// let x = 7;
// let x = 0;
// x !== 0 ? console.log(true) : console.log(false);


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати
// код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('enter num', 1);
//
// if (time > 0 && time <= 15) {
//     console.log('chvert#1');
// } else if (time > 15 && time <= 30) {
//     console.log('chvert#2');
// } else if (time > 30 && time <= 45){
//     console.log('chvert#3');
// }else if (time > 45 && time <= 60){
//     console.log('chvert#4');
// }else {
//     console.log('erorra');
// }
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
//     у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

// let day  = +prompt('enter num');
//
// if (day >=1 && day <=10){
//     console.log('first');
// } else if (day > 10 && day <= 20){
//     console.log('second');
// } else if (day > 20 && day <= 31){
//     console.log('third');
// } else {
//     console.log('erorra');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить
//     порядковий номер дня тижня і на екрані відображається інфа що заплановано
//     на цей день (можна замість плану на день, назву дня англійською).
//

// let numOfDay = +prompt('enter num of day', 7);
//
// switch (numOfDay){
//     case 1 :
//         console.log('ponedilok');
//         break;
//     case 2 :
//         console.log('vivtorok');
//         break;
//     case 3 :
//         console.log('sereda');
//         break;
//     case 4 :
//         console.log('chetverg');
//         break;
//     case 5:
//         console.log('piatnycia');
//         break;
//     case 6:
//     case 7:
//         console.log('subota & nedilya---SLEEP');
//         break;
//     default : {
//         console.log('erorra');
//     }
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

// let num1 =+prompt('num#1', 5);
// let num2 = +prompt('num#2',7);
//
// if (num1 > num2){
//     console.log(num1);
// }else if (num2 > num1){
//     console.log(num2);
// }else if (num1 === num2){
//     console.log('rivni chysla');
// }else {
//     console.log('erorra');
// }

// Var#2

// if (num1 === num2){
//     console.log('rivni');
// }else if (num1 > num2){
//     console.log(num1);
// }else {
//     console.log(num2);
// }


//
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число,
//         undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//

// let x = {};
// x = null;
// x = x || 'default';
// console.log(x);

// Ver#2

// let x = null;
// x = 1;
//
// if (!x){
//     x = 'default';
//     console.log(x);
// } else {
//     console.log(x);
// }



//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//         За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку
//     якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let arr = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of arr) {
    if (item.monthDuration > 5){
        console.log(item.title + ' SUPER');
    }else {
        console.log('tak sobi)))');
    }
}