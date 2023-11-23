console.log('-------=1=-------');

// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого
// типу, вивести кожен елемент в консоль

let array = ['okten', 'qwe', 10, -777, 3.11, '33', false, true, 'NaN', -10];
console.log(array.length - 1);

console.log(array[0]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

console.log('--------------');


// - Створити 3 об'єкти які описують книги. Поля
// об'єкту : title ,pageCount, genre.

let book_1 = {
    title: 'The Sunlit Man',
    pageCount: 400,
    genre: 'Fantasy'
};

let book_2 = {
    title: 'Court of Mist and Fury',
    pageCount: 656,
    genre: 'Fantasy'
};

let book_3 = {
    title: '1984. George Orwell',
    pageCount: 328,
    genre: 'Science Fiction'
};
console.log(book_1, book_2, book_3);

console.log('--------------');


// - Створити 3 об'єкти які описують книги. Поля
// об'єкту : title ,pageCount, genre, authors. Поле
// "автори" - являється  масивом. Кожен автор має поля name та age.

let sciFi_Book = {
    title: 'Dune',
    pageCount: 896,
    genre: 'Science fiction',
    authors: [
        {
            name: 'Frank Herbert',
            age: 65
        }
    ]
};

let fantasy_Book = {
    title: 'Harry Potter',
    pageCount: 766,
    genre: 'Fantasy',
    authors: [
        {
            name: 'Joanne Rowling',
            age: 58
        }
    ]
};

let classic_Book = {
    title: 'Pride and Prejudice',
    pageCount: 432,
    genre: 'Classic',
    authors: [
        {
            name: 'Jane Austen',
            age: 41
        }
    ]
};

console.log(sciFi_Book, fantasy_Book, classic_Book);
// console.log(classic_Book.authors[0].name);


console.log('--------------');


// - Створити масив з 10 об'єктами які описують сутніть
// "користувач". Поля: name, username,password. Вивести в
// консоль пароль кожного користувача


let users = [
    {
        name: 'Olya',
        username: 'pipetka',
        password: 'qwe_123'
    },
    {
        name: 'Petya',
        username: 'slon',
        password: 'qwe_123789'
    },
    {
        name: 'Ira',
        username: 'iren',
        password: 'qwe_123_asd'
    },
    {
        name: 'Yura',
        username: 'shkura',
        password: 'qwe_123-123-789'
    },
    {
        name: 'Max',
        username: 'maximus',
        password: 'asdqwe_777'
    },
    {
        name: 'Aleks',
        username: 'manka',
        password: 789456123
    },
    {
        name: 'Vasya',
        username: 'virastyuk',
        password: 'zxcasdqwe-111'
    },
    {
        name: 'Vira',
        username: 'mala',
        password: 77711
    },
    {
        name: 'Natalya',
        username: 'zotina',
        password: 'qwe_555111'
    },
    {
        name: 'Volodya',
        username: 'barsuk',
        password: 111
    }

]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8]['password']);
console.log(users[9]['password']);

console.log('--------------');


console.log('-------=2=-------');

// Логічні розгалуження:

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть
// 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 7;

if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

console.log('-----');

x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

console.log('-----');

x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

console.log('-----');

//ЯКШО ПЕРЕВІРКА ЙДЕ СУТО НА 0, ТО МОЖНА В if ПРОПИСАТИ ПРОСТО x А НЕ
//if(!x==0), ТАК ЯК 0 КАСТУЄТЬСЯ ДО false.
x = -3;
if (x) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


console.log('--------------');


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати
// код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('enter number fom 0 to 59', 30);

if (time >= 0 && time <= 15) {
    console.log('the FIRST quarter of an hour');
} else if (time >= 16 && time <= 30) {
    console.log('the SECOND quarter of an hour');
} else if (time >= 31 && time <= 45) {
    console.log('the THIRD quarter of an hour');
} else if (time >= 46 && time <= 59) {
    console.log('the FOURTH quarter of an hour');
} else {
    console.log('wrongly entered number');
}


console.log('--------------');


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt('enter number from 1 to 31', 5);

if (day >= 1 && day <= 10) {
    console.log('the FIRST decade of the month');
} else if (day >= 11 && day <= 20) {
    console.log('the SECOND decade of the month')
} else if (day >= 21 && day <= 31) {
    console.log('the THIRD decade of the month');
} else {
    console.log('wrong number');
}


console.log('--------------');


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить
// порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).

let numDayOfWeek = +prompt('enter the number of the day of the week', 7);

switch (numDayOfWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
    case 7:
        console.log('Saturday -Sunday !!! ITS WEEKENDS - you can have fun');
        break;
    default:
        console.log('wrong number!!!');
}

console.log('--------------');

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num_1 = +prompt('enter number', 5);
let num_2 = +prompt('enter number', 5);

if (num_1 > num_2) {
    console.log(num_1);
} else if (num_2 > num_1) {
    console.log(num_2);
} else if (num_1 === num_2) {
    console.log('equivalent numbers');
} else {
    console.log('something went wrong');
}

console.log('--------------');


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число,
//     undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


// x = prompt('enter value', '');
//
// if (!x){
//     x = 'default';
//     console.log(x);
// }else {
//     console.log(x);          !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// }
console.log('=======================================');
let z = null;

if (z === null || z === undefined || z === '' || z === null || z === NaN || z === 0) {
    z = 'default';
    console.log(z);
} else if (z) {
    console.log(z);
} else {
    console.log('something wrong');
}


console.log('--------------');


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку
// якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
} else {
    console.log('not good');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
} else {
    console.log('not good');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
} else {
    console.log('not good');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
} else {
    console.log('not good');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
} else {
    console.log('not good');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
} else {
    console.log('not good');
}