// console.log(22);

console.log('CONST ADD #8');
console.log('-------------------------');

// function UserFather (name, age, order){
//     this.xxx = name;
//     this.age = age;
//     this.order = order;
//
//     this.info = function (){
//         console.log('INFO')
//     }
// }

// function UserFather(name,age) {
//     this.name=name;
//     // this.xxx = age;
//     this.age = age;
//     this.info = function () {
//         console.log('hello' + ' ' + this.name);
//     }
// }
//
//
// let user = new UserFather('vasia',111);
// console.log(user);
//
// let arr = [];
// arr.push(
//     new UserFather('kokos',777),
//     new UserFather('petia',78),
//     new UserFather('anna',87)
// );
//
// console.log(arr);
// arr[0].info();
// arr[2].info();


// let arr= [];
// arr.push(
//     new UserFather('Jhon',11, [1,2,3,4]),
//     new UserFather('MAX',22, [1,2]),
//     new UserFather('Ivan',33. [1]),
// )
// // let user1 = new UserFather('Vasia');
// console.log(arr[0].order);
// console.log(arr);


console.log('=======');
//
// function Coffee(power) {
//     this.power=power;
//     this.water = 0;
//     this.admin = 'John';
//
//     this.getWater = function () {
//         console.log('Water: ', this.water + ' ml');
//     }
//
//     this.setWater = function (adminName,value) {
//         if (adminName === 'John') {
//             this.water +=value;
//             console.log('вода додана!!!')
//         }else {
//             console.log('Ти не адмін!!!')
//         }
//     }
// }
//
//
// let late = new Coffee(1000);
// console.log(late);
// late.getWater();
// late.setWater('John', 500);
// late.getWater();

// function Coffee(power){
//     this.power = power;
//     this.water = 0;
//     this.admin = 'Jhon';
//     this.phone = 98765544;
//
//     this.getWater = function (){
//       if(this.water < 100){
//           console.log(`WARNING!!! В автоматі мало води! ${this.water} ml`)
//       }else{
//           console.log(`В автоматі залишилось ${this.water} ml води`)
//       }
//     }
//
//     this.setWater = function (adminName, value){
//         if(adminName === 'Jhon'){
//             this.water += value;
//             console.log('Вода додана!!!')
//         }else{
//             console.log('Ти не адмін! ')
//         }
//     }
//
//     this.coffeeRun = function (){
//         if(this.water){
//             this.water -= 100;
//             console.log(`Ваша кава готова! Смачного! `)
//         }else{
//             console.log(`Вибачте немає води! дзвоніть Адміну ${this.admin}`)
//         }
//     }
//
//     this.info = function (){
//         console.log('*************INFO***********')
//         console.log(`ADMIN: ${this.admin}, POWER: ${this.power}, WATER: ${this.water}`)
//         console.log('*************INFO***********');
//
//         for (const key in this) {
//             if(typeof this[key] === 'function') continue;
//             console.log(`${key}: ${this[key]}`)
//         }
//     }
// }
//
// let late = new Coffee(1000);
// console.log(late)
//
// late.getWater();
// late.setWater('Jhon', 1500);
// late.getWater();
// late.setWater('Jonh', 500);
// // late.getWater();
// late.coffeeRun();
// // late.getWater();
// late.coffeeRun();
// late.getWater();
// late.info();


console.log('======================================================================');


function UserFather(name, age) {
    this.name = name;
    this.age = age;

    this.function = function () {
        console.log('---INFO--- ' + this.age);
    }
}

let father = new UserFather('Vasia');
console.log(father);
let arr = [];
arr.push(
    new UserFather('asia', 77),
    new UserFather('Via', 44),
    new UserFather('Va', 55),
    new UserFather('asd', 33)
)

console.log(arr);

arr[1].function();
arr[2].function();
arr[0].function();


console.log('==============');

function Coffee(power) {
    this.power = power;
    this.water = 0;
    this.admin = 'John';
    this.phone= '+38955555554485127'

    this.getWater = function () {
        if (this.water <= 100) {
            console.log('WARNING!!! В автоматі мало води' + this.water + ' ml');
        } else {
            console.log('В автоматі залишилось ' + this.water + 'ml води');
        }
    }

    this.setWater = function (adminName, value) {
        if (adminName === 'John') {
            this.water += value;
            console.log('Вода додана!!! : ', this.water, 'ml');
        } else {
            console.log('Ти Не АДМІН!!!');
        }
    }
    this.coffeeRun = function () {
        if (this.water) {
            this.water -= 100;
            console.log("Ваша кава готова.Смачного!!!");
        } else {
            console.log(`Вибачте! Не має води. Дзвоніть адміну ${this.admin}`);
        }
    }

    this.info = function () {
        console.log('*****************INFO****************');
        console.log(`WATER : ${this.water}, ADMIN : ${this.admin}, POWER : ${this.power}`);
        console.log('*****************INFO****************');
        for (const key in this) {
            if (typeof this[key] === 'function') continue;
            console.log(`${key}: ${this[key]}`);
            // console.log(this);
        }
    }
}


let latte = new Coffee(1000);

console.log(latte);
//
// latte.getWater();
//
// latte.setWater('John', 500);
// latte.setWater('Jhn', 500);
// latte.getWater();

latte.coffeeRun();
latte.getWater();
// latte.coffeeRun();
// latte.coffeeRun();
// latte.coffeeRun();
//
// latte.getWater();
// latte.coffeeRun();
// latte.getWater();
//
//
// latte.coffeeRun();
// latte.getWater();
// latte.coffeeRun();
// latte.coffeeRun();
// latte.coffeeRun();
// latte.coffeeRun();
// latte.coffeeRun();
// latte.coffeeRun();
latte.setWater('John', 1500);
latte.getWater()


latte.coffeeRun();
latte.coffeeRun();
latte.coffeeRun();
latte.coffeeRun();
latte.coffeeRun();
latte.coffeeRun();

latte.getWater();

latte.info();