// alert(22);



////////----------CONSULTATION#6-------------/////////////

console.log('----------CONSULTATION#6--------------');


let cars = [
    {make: "Toyota", model: "Camry", year: 2022, color: "Blue", price: 25000},
    {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000},
    {make: "Ford", model: "Mustang", year: 2023, color: "Black", price: 40000},
    {make: "Chevrolet", model: "Silverado", year: 2022, color: "Gray", price: 35000},
    {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
    {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
    {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Black", price: 50000},
    {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000},
    {make: "BMW", model: "X7", year: 2024, color: "Red", price: 160000},
    {make: "BMW", model: "X7", year: 2024, color: "Red", price: 1600001},
    {make: "BMW", model: "X7", year: 2024, color: "Red", price: 1600010},
    {make: "BMW", model: "X7", year: 2024, color: "Red", price: 1600010222},
    {make: "BMW", model: "X7", year: 2024, color: "Red", price: 16000011},
    {make: "BMW", model: "X7", year: 2024, color: "Red", price: 16000011},
];
console.log(cars)
let fruitArr = ['apple', 'banana', 'orange', 'apple', 'orange'];
let string = 'HELLO WORLD';


// let random = ()=>Math.floor(Math.random()*100);

//
// let carsSuits = ['spade', 'diamond', 'clubs', 'heart'];
// let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
//
// let desk = (carsSuits, values) => {
//     let arr = [];
//     for (const carsSuit of carsSuits) {
//         for (const value of values) {
//             arr.push(
//                 {carsSuit: carsSuit, value: value}
//             )
//         }
//     }
//     arr.map((item) => (item.carsSuit === 'diamond' || item.carsSuit === 'heart') ? item.color = 'red' : item.color = 'black')
//     return arr
// }
// let doneDesk = desk(carsSuits, values);
// console.log(doneDesk);

// let sort = cars.sort((a, b)=> a.year - b.year);
// console.log(sort);

// let fitlerAndSort = cars
//     .filter((item) => item.price >= 50000)
//     .sort((a,b)=> a.make.localeCompare(b.make));
// console.log(fitlerAndSort)

// let findEl = cars.find(item => item.model === 'X7' && item.price === 1600010222)
// let findEl1 = cars.filter(item => item.model === 'X7').sort((a,b)=> a.price - b.price);
// console.log(findEl1);
// console.log(findEl);

// let newUser = cars.map((car, index)=>{
//    return {
//        id: random(),
//        // ...item
//        makeXXX: car.make,
//        year: car.year
//    }
// });
// console.log(newUser.filter(item=>item.year >= 2023))

let numbers = [1,2,3,4,10,100500];
let newArr = numbers.map(item=> item*2);
console.log(newArr);
let summ = numbers.reduce((acc, item)=>acc + item,0)
console.log(summ)


console.log('=====================================');



// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
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

let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let values = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king', 'joker'];

let desk = ((cardSuits,values) => {
    let arr = [];
    for (const cardSuit of cardSuits) {
        // console.log(cardSuit);
        for (const value of values) {
            arr.push({cardSuit, value})
        }
    }
    arr.map(item => item.cardSuit === 'diamond' || item.cardSuit === 'heart' ? item.color = 'red' : item.color = 'black');
    return arr;
})

let desk1 = desk(cardSuits,values);
console.log(desk1);


console.log('====================');


let names = ['Ania', 'Dima', 'Max', 'Anton'];

let sort = names.sort((a, b) => a.localeCompare(b));

console.log(sort);

let reverse = sort.reverse();
console.log(reverse);

console.log('---');

let sort1 = cars.sort((a, b) => a.make.localeCompare(b.make));
console.log(sort1);

console.log('---');

let sort2 = cars.sort((a, b) => a.year - b.year);
console.log(sort2);


console.log('=========================');


let filterCars = cars.filter(item => item.year > 2023).sort((a,b)=> a.price -b.price);
console.log(filterCars);


console.log('==========');


let find = cars.find(value => value.model === 'X7');
console.log(find);

console.log('=================');

names = ['Ania', 'Dima', 'Max', 'Anton'];

let random =()=>{
    return Math.floor(Math.random() * 100);
};
let newName = names.map((item,index)=> {
    return {
        id:random(),
        item
    }
})

console.log(newName);

console.log('===');

let newCars = cars.map((value, index) => {
    return {
        id : random(),
        ...value
    }
})

console.log(newCars);
let filter = newCars.filter(value => value.year >= 2023);
console.log(filter);


console.log('--------reduce-------');



numbers = [1,2,3,4,10];

let nums = numbers.reduce((acc,item)=> {
    if (item <=4){
        acc[0].push(item);
    }else {
        acc[1].push(item)
    }
    return acc;
},[[],[]]);

console.log(nums);

let res = numbers.reduce((acc,item)=>acc+item,0)
console.log(res);

let nms = [1, 2, 3, 45, 8, 7, 5, 4];

let mapNew = nms.map(value => value * 2);
console.log(mapNew);