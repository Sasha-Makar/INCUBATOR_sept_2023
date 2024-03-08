// console.log(22);

console.log('CONST ADD #10');
console.log('-------------------------');

let cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        color: "Blue",
        price: 25000,
        image: 'https://img.freepik.com/free-photo/3d-car-with-vibrant-colors_23-2150796934.jpg?size=626&ext=jpg'
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2021,
        color: "Red",
        price: 22000,
        image: 'https://img.freepik.com/free-photo/3d-car-with-vibrant-colors_23-2150797034.jpg?size=626&ext=jpg'
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2023,
        color: "Black",
        price: 40000,
        image: 'https://img.freepik.com/free-photo/sport-car-on-the-road-with-motion-blur-background_90220-1685.jpg?size=626&ext=jpg'
    },
    {
        make: "Chevrolet",
        model: "Silverado",
        year: 2024,
        color: "Gray",
        price: 350000,
        image: 'https://img.freepik.com/free-photo/3d-car-on-vibrant-city-at-night_23-2150796972.jpg?size=626&ext=jpg'
    },
    // {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
    // {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
    // {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Black", price: 50000},
    // {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
    // {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    // {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000}
];
console.log(cars);

// let minus = document.getElementById('minus');
// let plus = document.getElementById('plus');
// let countEl = document.getElementById('count');
//
// console.log(minus, plus, countEl);

// let counter = 0;

// plus.addEventListener('click',function () {
//     count++;
//     countEl.innerText = count;
// })
// minus.addEventListener('click',function () {
//     count--;
//     countEl.innerText = count;
// })

// let counter = localStorage.getItem('counter')||0;
//
// plus.addEventListener('click',()=>{
//     let count = JSON.parse(localStorage.getItem('counter'));
//     count++;
//     localStorage.setItem('counter', count);
//     countEl.innerText = count;
//
// })
//
// minus.addEventListener('click',()=>{
//     let count = JSON.parse(localStorage.getItem('counter'));
//     count--;
//     localStorage.setItem('counter', count);
//     countEl.innerText = count;
//
// })
//
// let clear = document.getElementById('clear');
// clear.addEventListener('click',(ev)=>{
//     ev.preventDefault();
//     localStorage.clear();
//     location.reload();
// })

// let countEl = document.getElementById('count')
// let minus = document.getElementById('minus')
// let plus = document.getElementById('plus')

// let count = 0;
// plus.addEventListener('click', () => {
//     count++;
//     countEl.innerText = count
// })
// minus.onclick = function () {
//     count--;
//     countEl.innerText = count
// }

// let counter = localStorage.getItem('counter') || 0;
//
// plus.addEventListener('click', () => {
//     let count = JSON.parse(localStorage.getItem('counter'))
//     count++;
//     localStorage.setItem('counter', count)
//     countEl.innerText = count;
// })
//
// minus.addEventListener('click', () => {
//     let count = JSON.parse(localStorage.getItem('counter'))
//     count--;
//     localStorage.setItem('counter', count)
//     countEl.innerText = count;
// })
//
// let clear = document.getElementById('clear');
// clear.addEventListener('click', (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     location.reload();
// })
//
// // let form = document.forms[0];
// let form = document.forms.form1;
// console.log(form);
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//
//     let username = e.target.xxx.value;
//     let password = e.target.password.value;
//     console.log(username);
//     console.log(password);
//
//     console.log({username, password})
//
//     // e.target.username.value = '';
//     // e.target.password.value = '';
//
//     e.target.reset();
// }
//
// let carsBtn = document.getElementById('cars');
// console.log(carsBtn);
//
// let fav = JSON.parse(localStorage.getItem('fav')) || [];
// carsBtn.addEventListener('click', () => {
//     let carsDiv = document.createElement('div');
//     document.body.appendChild(carsDiv)
//     for (const car of cars) {
//         let div = document.createElement('div');
//         let btn = document.createElement('button');
//         btn.innerText = 'to fav';
//
//         btn.addEventListener('click', () => {
//             fav.push(car)
//             localStorage.setItem('fav', JSON.stringify(fav))
//             btn.disabled = true;
//         })
//
//         div.innerText = `${car.make} - ${car.year}`
//         carsDiv.append(div, btn)
//     }
//     carsBtn.disabled = true;
// })
//
// const json = localStorage.getItem('sesions')
//
// const sessions = json ? JSON.parse(json) : [];

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let countEl = document.getElementById('count');
console.log(countEl, plus, minus);

let counter = localStorage.getItem('counter')||0;
plus.addEventListener('click',()=>{
    let count = JSON.parse(localStorage.getItem('counter'));
    count++;
    localStorage.setItem('counter', count);
    countEl.innerText = count;
})
minus.addEventListener('click',()=>{
    let count = JSON.parse(localStorage.getItem('counter'));
    count--;
    localStorage.setItem('counter', count);
    countEl.innerText = count;
})
let clear = document.getElementById('clear');
clear.onclick = function (ev) {
    ev.preventDefault();
    localStorage.clear();
    location.reload();
}

console.log('===================================');

let form = document.forms.f1;

form.onsubmit = function (ev) {
    ev.preventDefault();
    let username = ev.target.username.value;
    let password = ev.target.password.value;
    console.log({username,password})
    // ev.target.username.value = '';
    // ev.target.password.value = '';
    ev.target.reset();
}

console.log('=======================');

let carBtn = document.getElementById('cars');
let fav = JSON.parse(localStorage.getItem('fav')) || [];
carBtn.addEventListener('click',(ev)=>{
    let divBlock = document.createElement('div');
    document.body.appendChild(divBlock)
    for (const car of cars) {
        // console.log(car);
        let div = document.createElement('div');
        div.innerText = `${car.make} - ${car.year}`;
        let btn = document.createElement('button');
        btn.innerText = 'to fav';
        btn.addEventListener('click',()=>{
            fav.push(car);
            localStorage.setItem('fav', JSON.stringify(fav));
            btn.disabled=true;
        })
        divBlock.append(div,btn);
    }
    carBtn.disabled = true;
})











