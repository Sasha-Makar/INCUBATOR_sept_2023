// console.log(22);


console.log('********TEST*******');

// let products = [
//     { name: "Laptop", price: 1000, category: "Electronics" },
//     { name: "T-shirt", price: 20, category: "Clothing" },
//     { name: "Book", price: 15, category: "Books" },
//     { name: "Shoes", price: 50, category: "Footwear" },
//     { name: "Headphones", price: 80, category: "Electronics" },
//     { name: "Backpack", price: 40, category: "Accessories" },
//     { name: "Guitar", price: 300, category: "Musical Instruments" },
//     { name: "Watch", price: 150, category: "Accessories" },
//     { name: "Cookware Set", price: 200, category: "Kitchenware" },
//     { name: "Bicycle", price: 400, category: "Sports & Outdoors" }
// ];

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
    {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000}
];

for (let car of cars) {
    console.log(car.make);
    console.log('---');
    console.log(car.color);
}

for (let car of cars) {
    if (car.price > 25000) {
        console.log(car.model);
    }
}
console.log('======================');


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.length, ' - dovzhyna');
console.log('*****');
console.log(numbers.length - 1, ' - index');

for (let number of numbers) {
    console.log(number);
}
console.log('-----------------');
for (let i = numbers.length - 1; i >= 0; i--) {
    const number = numbers[i];
    console.log(number);
}
// console.log('-------');
// for (let i = numbers.length; i > 0; i--) {
//     let number = numbers[i];
//     console.log(number);
// }

console.log('###################');

let even = [];
let noEven = [];
for (let i = 0; i < numbers.length; i++) {
    let elem = numbers[i];
    if (elem % 2 === 0) {
        even[even.length] = elem;
    }else {
        noEven[noEven.length] = elem;
    }
}
console.log(even);
console.log(noEven);

console.log('**********');


document.write('<ul>');
for (const number of numbers) {
     document.write(`<li>${number}</li>`)
}
document.write('</ul>');

 document.write('<hr><hr><hr>')
console.log('*****************');


for (const number of numbers) {
    document.write(`<div class="box">${number}</div>`)
}







