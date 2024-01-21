//Базова інформація про функції

// function creator(msg) {
//      document.write(`<div>
//       <h2>${msg}</h2>
//       <p>${msg}</p>
//       </div>`)
// }
//
// creator('okten');
// creator('okten');
// creator('okten');
//
// // Функції з return
//
// function calc(a,b) {
//      return res = a+b;
// }
//
// let r1 = calc(10, 20);
// let r2 = calc(10, 10);
// console.log(r1, r1);


// function tax(sum) {
//      let pdv = sum / 100 * 20;
//      let warTax = sum / 100 * 1.5;
//      return  result = sum - pdv - warTax;
// }
//
// let number = tax(10000);
// console.log(number);


// function percentage(cash,percent) {
//      return cash / 100 * percent;
// }
//
// function tax(sum) {
//      let pdv = percentage(sum,20);
//      // let pdv = sum / 100 * 20;
//      warTax = percentage(sum, 1.5);
//      // let warTax = sum / 100 * 1.5;
//      return  result = sum - pdv - warTax;
// }
//
// let number = tax(10000);
// console.log(number);

// function percentage(cash, percent) {
//     return cash / 100 * percent;
// }
//
// function tax(sum) {
//     return result = sum - percentage(sum, 20) - percentage(sum, 1.5);
// }
//
// let number = tax(10000);
// console.log(number);


////////////////////////////////////

// function userFilter(users) {
//     let filteredUsers = [];
//     for (const user of users) {
//         if (user.age > 30) {
//             console.log(user);
//             filteredUsers.push(user);
//         }
//     }
//     return filteredUsers;
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let userFilter1 = userFilter(users);
// console.log(userFilter1);


//Змінна arguments у функціях


// function calc(a, b) {
//     return a + b;
// }
//
// function calc(a, b, c) {
//     return a + b + c;
// }
//
// let c = calc(10, 20);
// console.log(c);


// function foobar() {
//     console.log(arguments);
// }
//
// foobar(1, 2, 3);

// function foobar() {
//     if (arguments.length === 2){
//         return arguments[0] + arguments[1];
//     }else {
//         return arguments[0] + arguments[1] + arguments[2];
//     }
// }
//
// let foo1 = foobar(10, 20);
// console.log(foo1);
//
// let foo2 = foobar(10, 2, 30);
// console.log(foo2);


//rest argumet


function asd(y,z,...x) {
    console.log(x);
    console.log(y);
    console.log(z);
}

asd(1, 2, 3, 4, 5, true, 'asd');
