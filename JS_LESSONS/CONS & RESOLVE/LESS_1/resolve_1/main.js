// alert(22);
// - Створити змінні. Присвоїти кожному з них
// значення: 'hello','owu','com', 'ua', 1, 10,
//     -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log


//
// - Створити 3 змінних firstName, middleName, lastName,
//     наповнити їх своїм ПІБ. З'єднати їх в одну змінну
// person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних
// змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова
// які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль

let name = prompt('enter your name', 'Sasha');
let sureName = prompt('enter your surname','Igorovich');
let age = +prompt('enter your age',47);

let result = `${name} ${sureName} - ${age} years old`;
console.log(result);
alert(name + '\n' + sureName + '\n' + age);