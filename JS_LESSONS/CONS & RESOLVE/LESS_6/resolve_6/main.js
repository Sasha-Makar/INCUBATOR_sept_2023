// console.log(22);
//
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];

arr.forEach(item => console.log(item.length));
///
console.log('-=-');
arr.map(value => console.log(value.length));

// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);
console.log('---');


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());
let arr1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
arr.forEach(item => console.log(item.toUpperCase()));

console.log('---');


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());
let arr2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

arr2.forEach(item => console.log(item.toLowerCase()));

console.log('---');
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її
// від зайвих пробілів.
//
let str = ' dirty string   '
console.log(str);
// let trim = str.trim();
// console.log(trim);
console.log(str.trim());


console.log('---');

// - Напишіть функцію stringToarray(str), яка перетворює рядок на
// масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//

let strStr = 'Ревуть воли як ясла повні';
console.log(strStr);
// let arr = (arr)=> {
//     return arr.split(' ');
// }
// let arr1 = arr(strStr);
// console.log(arr1);
stringToarray = (str) => str.split(' ');
let toArr = stringToarray(strStr);
console.log(toArr);


console.log('---');
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити
// всі об'єкти в масиві на стрінгові.

let ar = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(ar);

console.log(ar.map(item => item.toString()));

// let newStr = (item => {
//     return item + '';
// })
// let newStr1 = newStr(ar);
// console.log(newStr1);


console.log('---');

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його
// від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums = [11, 21, 3];

// let sortNums = ((arr,direction) => {
//     if (direction === '>') {
//         return arr.sort((a,b)=> a-b);
//     }
//     if (direction === '<'){
//         return arr.sort((a, b) => b-a);
//     }
// })
//
// let ascend = sortNums(nums, '>');
// console.log(ascend);
// let descend = sortNums(nums, '<');
// console.log(descend);

const sortNums = (arr, order) => {
    switch (order) {
        case 'ascending':
            return arr.sort((a, b) => a - b);
        case 'descending' :
            return arr.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
console.log('---');
console.log('==========================');


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);
// -- відсортувати його за спаданням за monthDuration

// let sortMonth = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortMonth);

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

console.log('---');

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = sortMonth.filter(value => value.monthDuration > 5);
// console.log(filter);

let filter = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log(filter);

console.log('---');
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let newCourses = filter.map((value, index) => {
//     return {
//         id : index +1,
//         ...value
//     }
// })
//
// console.log(newCourses);

console.log(coursesAndDurationArray.map((item, index) => ({...item, id: index + 1})));
console.log('---');
console.log('=========================');
console.log('=========================');
console.log('=========================');


//     описати колоду карт (від 6 до туза без джокерів)
let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let cardValue = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king', 'joker'];
let cardColor = ['red', 'black'];

// let deskCards = (cardSuit,cardValue,cardColor)=>{
//     let cards = [];
//     for (const suit of cardSuit) {
//         for (const value of cardValue) {
//             cards.push({
//                 suit,
//                 value
//             })
//         }
//     }
//     return cards;
// }
//
// let deskCards1 = deskCards(cardSuit, cardValue);
// console.log(deskCards1);
const cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'www', value: 'king', color: 'red'},
]
console.log(cards);

console.log('-----');

// - знайти піковий туз

// let findJoker = deskCards1.find(item => item.suit === 'spade' && item.value === 'joker');
// console.log(findJoker);

let find = cards.find(value => value.cardSuit === 'spade' && value.value === 'jack');
console.log(find);

console.log('---');
// - всі шістки

// let six = deskCards1.filter(item => item.value === 6);
// console.log(six);

let filter1 = cards.filter(value => value.value === '6');
console.log(filter1);

console.log('-------');


// - всі червоні карти
let filter2 = cards.filter(card => card.color === 'red');
console.log(filter2);

// - всі буби

console.log(cards.filter(item => item.cardSuit === 'heart'));

console.log('-----');
// - всі трефи від 9 та більше

let filter3 = cards.filter(card=> card.cardSuit==='clubs'&&['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value));
console.log(filter3);

console.log('---');
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// let reduce = cards.reduce((acc, curr)=>{
//     acc[curr.cardSuit].push(curr);
//     return acc;
// },{spade:[],diamonds:[], heart:[], clubs:[]});
//
// console.log(reduce);



let reduce = cards.reduce((acc, item)=> {
   if (!acc[item.cardSuit]){
       acc[item.cardSuit] = [];
   }
    acc[item.cardSuit].push(item);
    return acc;
},{});

console.log(reduce);


console.log('---');
console.log('=========================');

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git','sass', 'node.js']
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
console.log(coursesArray);
console.log('-=-');
// coursesArray.forEach(item=> item).filter()
// --написати пошук всіх об'єктів, в який в modules є sass

let filter4 = coursesArray.filter(value => value.modules.includes('sass'));
console.log(filter4);

console.log('-=-');

// --написати пошук всіх об'єктів, в який в modules є docker

let filter5 = coursesArray.filter(item => item.modules.includes('docker'));
console.log(filter5);


console.log('===============================');


