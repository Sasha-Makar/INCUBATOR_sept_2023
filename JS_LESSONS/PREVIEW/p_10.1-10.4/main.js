// alert(22);
////////////////forms API

// console.log(document.forms);
// console.log(document.forms.f1);
// console.log(document.forms['f2']);
// console.log(document.forms['f3'].userTxt);
// console.log(document.forms['f3']['userTxt']);


//////// dom events
//events list ---- MDN(documentation)


// let target = document.getElementById('target');

// target.onclick = function (event) {
//     console.log('click');
//     console.log(event);
// }

// target.onmousemove = function (ev) {
//     console.log('move');
//     console.log(ev.clientX,ev.clientY);
//     let r = ev.clientX;
//     let g = ev.clientX;
//     let b = ev.clientY;
//     this.style.background = `rgb(${r},${g},${b})`;
// }


// target.addEventListener('click', function (ev) {
//     console.log('another click');
//     console.log(ev);
// })


// target.onmouseover =function () {
//     console.log('over');
// }
// target.onmouseleave = function () {
//     console.log('leave');
// }

// let i1 = document.getElementById('i1');
// console.log(i1);
//
// i1.oninput =function () {
//     // console.log(this.value);
//     target.innerText = this.value;
// }

// let s1 = document.forms.s1;
// // let iUsername = s1.username;
// s1.onsubmit = function (ev) {
//     ev.preventDefault();
//     console.log('hello');
//     let user = {name: this.username.value};
//     console.log(user);
//
// }


//////////Локальне сховище

// localStorage.setItem('asd','qwe');

// let item = localStorage.getItem('asd');
// console.log(item);
// localStorage.clear();


// localStorage.setItem('user',JSON.stringify({id:1,mame:'kokos'}));




////////////////REPEAT//////////////////////////////////////
/////forms////

// console.log(document.forms);
//
// console.log(document.forms.f1);
// console.log(document.forms.f1.userName);
// console.log(document.forms['f2']);
// console.log(document.forms['f2']['userEmail']);

//////events/////

// let target = document.getElementById('target');
// console.log(target);

// target.onclick = function () {
//     console.log('click');
// }

// target.onmousemove = function (ev) {
//     console.log('move');
//     console.log(ev);
//     let r = ev.clientY;
//     let g = ev.clientX;
//     let b = ev.clientX;
//     target.style.background = `rgb(${r},${g},${b})`;
//
// }
//
// target.onmouseleave = function (ev) {
//     console.log('leave');
// }

// target.addEventListener('click',function (ev) {
//     console.log('qwerewerew');
// })



// let i1 = document.getElementById('i1');
//
// i1.oninput = function () {
//     // console.log(this.value);
//     target.innerText = this.value;
// }


// let f1 = document.forms.f1;
// f1.onsubmit = function (ev) {
//     ev.preventDefault();
//     console.log('hello');
//     let user = {name:this.userName.value};
//     console.log(user);
//     target.innerText = user.name
// }
// f1.userName


///stan documentu---zavantagennya wikna


// window.onload = function () {
//     console.log('load');
// }
//
//
// document.onreadystatechange = function () {
//     // console.log(document.readyState);
//     if (document.readyState === 'interactive') {
//         document.body.innerText = '......loading START';
//     }
//     if (document.readyState === 'complete') {
//         document.body.innerText = '......loading COMPLETE';
//     }
// }




/////////////localstorage////////



// localStorage.setItem('qwe','asd');


// let item = localStorage.getItem('qwe');
// console.log(item);


// localStorage.clear();


// localStorage.setItem('user', JSON.stringify({id:1,name:'Petya'}));
//
// let user = localStorage.getItem('user');
// console.log(user);
// let parseUser = JSON.parse(user);
// console.log(parseUser);


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

// localStorage.setItem('users',JSON.stringify(users));


// let users = localStorage.getItem('users');
// console.log(users);
//
// let parseUsers = JSON.parse(users);
// console.log(parseUsers);
//
// parseUsers.push({});
// console.log(parseUsers);
//
//
// localStorage.setItem('users',JSON.stringify(parseUsers));




///////////////Локальне сховище приклад//////////////////////





