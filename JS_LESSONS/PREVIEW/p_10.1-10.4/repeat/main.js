// console.log(22);

console.log('//////////////// Forms API/////////////');

// console.log(document.forms);
// console.log('-------');
//
// console.log(document.forms.f1);
// console.log('-----');
// console.log(document.forms['f2']);
//
// console.log('-----------');
//
//
// console.log(document.forms.f1.userName);
// console.log('---');
// console.log(document.forms['f2']['userEmail']);

// let line = document.createElement('hr');
// document.body.appendChild(line);




console.log('//////Події-DOM EVENTS////////');


// let target = document.getElementById('target');

// target.onclick = function (ev) {
//     console.log('click-1');
//     // console.log(ev);
// }

// target.onmousemove = function (ev) {
//     console.log('move');
//     // console.log(ev);
//     // console.log(ev.clientX);
//     // console.log(ev.clientY);
//     let r = ev.clientX;
//     let g = ev.clientY;
//     let b = ev.clientX;
//     this.style.background = `rgb(${r},${g},${b})`;
// }

// target.addEventListener('click', function (ev) {
//     console.log('click-2');
// })

// target.onmouseover = function (ev) {
//     console.log('over');
// }
//
// target.onmouseleave = function (ev) {
//     console.log('leave');
//     // console.log(ev);
// }

// let i1 = document.getElementById('i1');

// i1.oninput = function () {
//     // console.log(this.value);
//     target.innerText = this.value;
// }


// let f3 = document.forms.f3;
//
// f3.onsubmit = function (ev) {
//     ev.preventDefault();
//     // console.log('hello');
// // f3.userName;
//     let user = {name: this.userName.value}
//     console.log(user);
// }
//
//
// console.log(window);
//
// window.onload = function () {
//     console.log('load');
// }
//
// document.onreadystatechange = function () {
//     console.log(document.readyState);
// }
//
//
// document.onreadystatechange = function () {
//     if (document.readyState === 'interactive'){
//         document.body.innerText = 'load start......';
//     }
//     if (document.readyState === 'complete'){
//         document.body.innerText = 'load finish';
//     }
// }


console.log('/////////////////Локальне сховище/////////////');


// localStorage.setItem('qwe', 'asd');


// let item = localStorage.getItem('qwe');
// console.log(item);

// localStorage.clear();



// localStorage.setItem('user',JSON.stringify({id:1, name: 'vasya'}));


// let userJson = localStorage.getItem('user');
//
// console.log(userJson);
//
// let userParse = JSON.parse(userJson);
//
// console.log(userParse);
//
// userParse.status = true;
// userParse.age = 31;
//
//
// localStorage.setItem('user', JSON.stringify(userParse));


let users = [
    {name: 'vasya', age : 31, status : false},
    {name: 'petya', age : 30, status : true},
    {name: 'kolya', age : 29, status : true},
    {name: 'olya', age : 28, status : false},
    {name: 'max', age : 30, status : true},
    {name: 'anya', age : 31, status : false},
    {name: 'oleg', age : 28, status : false},
    {name: 'andrey', age : 29, status : true},
    {name: 'masha', age : 30, status : true},
    {name: 'olya', age : 31, status : false},
    {name: 'max', age : 31, status : true}
];


// localStorage.setItem('users', JSON.stringify(users));

let usersJson = localStorage.getItem('users');
console.log(usersJson);


let usersParse = JSON.parse(usersJson);

console.log(usersParse);

usersParse.push({});
console.log(usersParse);


localStorage.setItem('users', JSON.stringify(usersParse));