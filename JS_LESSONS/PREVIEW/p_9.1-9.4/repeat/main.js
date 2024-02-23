// alert(22);

// let str = 'hello';
// // debugger;
// function reverce(str) {
//     let s = '';
//     for (const element of str) {
//         s = element+s;
//     }
//     return s;
// }
//
// console.log(str);
// console.log(reverce1);
// let reverce1 = reverce(str);

console.log('//////////////////DOM Об\'єктна модель документу//////////////////////');


// console.log(document);
// console.log(document.head);
// console.log(document.body);
// // console.log(document.dir);
//
// console.log(document.head.children);
// console.log(document.body.innerHTML);


// let div = document.createElement('div');
// div.innerText = 'OKTEN';
// document.body.appendChild(div);

//
// let ul1 = document.getElementById('list-1');
// console.log(ul1);
//
//
// let menu = document.getElementsByClassName('menu');
// console.log(menu);
//
//
// for (const menu1 of menu) {
//     console.log(menu1);
// }

// let ulList = document.getElementsByTagName('ul');
// console.log(ulList);
//
// let ulList1 = document.getElementById('list-1');
//
// console.log(ulList1);
// let ulList1LiCollection = ulList1.getElementsByTagName('li');
// console.log(ulList1LiCollection);


console.log('//////////////////////Маніпуляція DOM елементами/////////////');


// let target = document.getElementById('target');
// console.log(target);

// console.log(target.innerText);
//
// target.innerText = 'Okten';
//
// target.style.background = 'silver';
//
// console.log(target.classList);
//
// target.classList.add('foo');
// target.classList.add('bar');
//
//
// target.classList.toggle('asd');
// target.classList.toggle('bar');


// console.log(target.getAttribute('id'));
// console.log(target.getAttribute('class'));
//
// target.setAttribute('id', 'xxx');
//
//
// console.log(target.previousElementSibling);
//
// console.log(target.nextElementSibling);
//
//
// // console.log(target.children); html
// // console.log(target.childNodes);  nodes
//
//
// target.innerText = '<b>qwwrreqwrwrw</b>';
//
//
// target.innerHTML = 'jajfoijoprijv;ojra';
//
// console.log(target.outerHTML);


console.log('///////////Створення елементів/////////');


// let div = document.createElement('div');
// div.innerText = 'Okten';
//
// document.body.appendChild(div);




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
// let list = document.getElementsByClassName('list')[0];
// console.log(list);
// for (const user of users) {
//
//     let h2 = document.createElement('h2');
//     h2.innerText = user.name;
//
//     let p = document.createElement('p');
//     p.innerText = user.age + ' ' + user.status;
//
//     list.append(h2,p);
// }


console.log('//////////// Рекурсія додаткове/////////////');















