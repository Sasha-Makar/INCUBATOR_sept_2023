// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length);
console.log('lorem ipsum'.length);

let jsStr = 'javascript is cool';
console.log(jsStr.length);

console.log('-------------------------');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let upStr = 'hello world'.toUpperCase();
console.log(upStr);

console.log('lorem ipsum'.toUpperCase());

let js = 'javascript is cool';
let upJs = js.toUpperCase();
console.log(upJs);
console.log('---');
console.log(js);

console.log('---------------------------------------');

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let world = 'HELLO WORLD';
console.log(world);
console.log(world.toLowerCase());
console.log('---');

console.log('LOREM IPSUM');
console.log('LOREM IPSUM'.toLowerCase());
console.log('---');

let jScript = 'JAVASCRIPT IS COOL';
console.log(jScript);
let lower = jScript.toLowerCase();
console.log(lower);

console.log('---------------------------------------');


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strDirty = ' dirty string   ';
console.log(strDirty);

let cleanStr = strDirty.trim();
console.log(cleanStr);

console.log('---------------------------------------');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

let stringToarray = (str) => {
    console.log(str.split(' '));
}

stringToarray(str);

console.log('---------------------------------------');


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(numArr);

let numStr = numArr.map(value => value + '');
console.log(numStr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або
// навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => {
            return a - b;
        })
    } else if (direction === 'descending') {
        arr.sort((a, b) => {
            return b - a;
        })
    }
    return arr;
}
let sortNums1 = sortNums(nums, 'ascending');
console.log(sortNums1);////[3,11,22]

let sortNums2 = sortNums(nums, 'descending');
console.log(sortNums2);///[21,11,3]

console.log('------------------------------------------------');


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let duration = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});

console.log(duration);
console.log('------');

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let month = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(month);
console.log('-------');

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newCourses = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1,...value};
})
console.log(newCourses);
console.log('-------');

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards = {
    cardSuits: ['spade', 'diamond', 'heart', 'clubs'],
    values: ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'],
    colors: ['red', 'black']
};
let currentCards = [];
for (let value of cards.values) {
    for (let cardSuit of cards.cardSuits) {
        if (cardSuit === 'diamond' || cardSuit === 'heart') {
            currentCards.push({color: 'red', cardSuit: cardSuit, value: value});
        } else {
            currentCards.push({color: 'black', cardSuit: cardSuit, value: value});
        }
    }
}
console.log(currentCards);
console.log('=========');

// - знайти піковий туз

let spadeAce = currentCards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);
console.log('---');

// - всі шістки

let six = currentCards.filter(card => card.value === '6');
console.log(six);
console.log('-----');

// - всі червоні карти

let redCards = currentCards.filter(card => card.color === 'red');
console.log(redCards);
console.log('-----');

// - всі буби

let diamond = currentCards.filter(card => card.cardSuit === 'diamond');
console.log(diamond);
console.log('-------');

// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let filter = currentCards.filter(card => card.cardSuit === 'clubs' && card.value >= '9' || card.cardSuit === 'clubs' && card.value >= 9);
console.log(filter);

console.log('-------------------');

// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================

let cardsSorted = currentCards.reduce((accum, current) => {
        switch (current.cardSuit) {
            case 'diamond':
                accum.diamonds.push(current.value);
                break;
            case 'heart':
                accum.hearts.push(current.value);
                break;
            case 'spade':
                accum.spades.push(current.value);
                break;
            case 'clubs':
                accum.clubs.push(current.value);
                break;
        }
        return accum;
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    }
)
console.log(cardsSorted);


//     взяти з arrays.js (який лежить в папці 2023 plan) масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
let filterSass = coursesArray.filter(course => course.modules.find(element => element === 'sass'));
console.log(filterSass);

console.log('--------');
// --написати пошук всіх об'єктів, в який в modules є docker

let filterDocker = coursesArray.filter(course => course.modules.find(element => element === 'docker'));
console.log(filterDocker);


console.log('==============================================');