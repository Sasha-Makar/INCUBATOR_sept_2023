// alert(22);
////////////////forms API

// console.log(document.forms);
// console.log(document.forms.f1);
// console.log(document.forms['f2']);
// console.log(document.forms['f3'].userTxt);
// console.log(document.forms['f3']['userTxt']);


//////// dom events
//events list ---- MDN(documentation)


let target = document.getElementById('target');

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


localStorage.setItem('user',JSON.stringify({id:1,mame:'kokos'}));