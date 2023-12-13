//
// // Дата та час
//
//
// let now = new Date();
// console.log(now);
//
// console.log(now.getFullYear());
// console.log(now.getTime());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log('---');
// console.log(now.getUTCMonth());
// let month = now.getMonth();
// console.log(month);
//
// console.log('-------------');
//
// // let date1 = new Date(1000000000731);
// // console.log(date1);
// //
// // let date2 = new Date('October 02 1981 20:00:01');
// // console.log(date2);
// //
// // let date3 = new Date(1981,10,2,20,1,0);
// // console.log(date3);
// //
// //
// // let user = {
// //     id : 1,
// //     dBirth : new Date('October 02 1981 20:00:01')
// // }
// //
// // console.log(user);
// // console.log(user.dBirth);
//
//
//
//
//
// //////////////////////////- Обробка помилок-/////////////////////
//
// // console.log(a);
// console.log('start');
// try {
//     console.log(a);
// }catch (e) {
//     console.log(e);
// } finally {
//     console.log('hello');
// }
// console.log('end');
// console.log('-----------------');
// try {
//     console.log(b);
// } catch (e) {
//     console.log(Error(e));
// } finally {
//     console.log('!!!');
// }
// console.log('-------------');
// try {
//     console.log(b);
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log('!!!');
// }
//
// console.log('======================');
//
//
// function divide(a,b) {
//     try {
//         if (b === 0) {
//             throw new Error('b is 0')
//         }
//         return a / b;
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// console.log(divide(10, 0));
// console.log(divide(10, 2));
//
//
// console.log('------------------------------');
//
// // let user = {};
// let user = undefined;
//
// user?.foo();
//
// // ? --- optional chain operator(oco)-оператор опціональної послідлвності
// // if undefined or null/
// console.log('------------------------------------');
//
// let name = 'kokos';
// let age = 31;
// let user1 = {
//     name,
//     age,
//     greeting(){
//         console.log('hi');
//     }
// }
//
// console.log(user1);
// console.log(user1.name);
// user1.greeting();
// // user1.greeting(this);
//
// console.log('---');
//
// let user2 = {
//     names: 'vasya',
//     ages : 32,
//     foo(){
//         console.log('foo');
//     }
// }
//
// let {ages,names,foo} = user2;
// console.log(ages);
// foo();
// console.log(names);
// console.log('---');
//
//
// function asd({name}) {
//     console.log(name);
// }
//
// let qwe = {
//     name:'jas',
//     age : 77
// }
//
// asd(qwe);
//
// console.log('-----');
//
//
//
// let use = {
//     name : 'vasya',
//     age : 78,
//     foo(){
//         console.log('hi');
//     },
//     wife: {
//         name : 'olya',
//         age : 37
//     }
// }
//
// console.log(use);
//
// let {name:useName,age:useAge,wife,wife:{age:useWifeAge}} = use;
//
// console.log(useName);
// console.log(useAge);
// console.log(wife);
// console.log(useWifeAge);
//
// console.log('---');
//
//
//
// let numbers = [11,22,33];
// let [a,b] = numbers;
// console.log(a);
// console.log(b);
//
// let [c, ,d] = numbers;
// console.log(c,d);
// console.log(d);
//
//
// console.log('---');
//
//
// let users = [
//     {name: 'vasya', age : 31, status : false},
//     {name: 'petya', age : 30, status : true},
//     {name: 'kolya', age : 29, status : true},
//     {name: 'olya', age : 28, status : false},
//     {name: 'max', age : 30, status : true},
//     {name: 'anya', age : 31, status : false},
//     {name: 'oleg', age : 28, status : false},
//     {name: 'andrey', age : 29, status : true},
//     {name: 'masha', age : 30, status : true},
//     {name: 'olya', age : 31, status : false},
//     {name: 'max', age : 31, status : true}
// ];
//
// console.log(users);
//
//
// let [{name:user1Name,age:user1Age,status},user_2] = users;
// console.log(user_2);
// console.log(user1Name);



////SPRED OPERATOR//////




// let users = [
//     {name: 'vasya', age : 31, status : false},
//     {name: 'petya', age : 30, status : true},
//     {name: 'kolya', age : 29, status : true},
//     {name: 'olya', age : 28, status : false},
//     {name: 'max', age : 30, status : true},
//     {name: 'anya', age : 31, status : false},
//     {name: 'oleg', age : 28, status : false},
//     {name: 'andrey', age : 29, status : true},
//     {name: 'masha', age : 30, status : true},
//     {name: 'olya', age : 31, status : false},
//     {name: 'max', age : 31, status : true}
// ];


// let usersCopy = {...users};
//
// console.log(usersCopy);
//
// console.log(usersCopy === users);
//
//
// console.log(usersCopy[0].age);
// console.log(users[0].age);
// console.log('---');
//
// usersCopy[0].age = 0;
// console.log(usersCopy[0].age);
// console.log(users[0].age);
// console.log(users);



// let user = {
//     name: 'kokos',
//     age:31
// }
//
// let userCope = {...user};
//
// console.log(userCope);
//
// console.log(userCope === user);
//
// userCope.age = 0;
// console.log(userCope);
// console.log(user);



/////////Поверхнева та глибока копії та JSON//////////////


user = {
    name:'kokos',
    skills : ['html','js']
}

let userCopy = {...user};

console.log(userCopy === user);
console.log(userCopy.skills === user.skills);

let s = JSON.stringify(user);
console.log(s);
let b = JSON.parse(s);
console.log(b);


console.log(b === user);

console.log(b.skills === user.skills);


console.log('---');

let copy = Object.assign({},user);
console.log(copy);


let copy2 = Object.assign({},copy);

console.log(copy2);

console.log(copy2 === copy);
console.log(copy2.skills === copy.skills);
console.log(copy2.skills === user.skills);














