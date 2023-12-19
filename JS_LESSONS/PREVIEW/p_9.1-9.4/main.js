//
// //// DOM Об'єктна модель документу
//
// console.log(document);
// console.log(document.head);
// console.log(document.head.children);
// console.log('====');
//
// console.log(document.body);
// console.log(document.body.innerHTML);
//
//
// console.log('--------');
//
// let ul1 = document.getElementById('list-1');
// console.log(ul1);
// console.log('---');
//
// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
//
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement);
// }
//
// console.log('---');
//
//
// let ulList = document.getElementsByTagName('ul');
// console.log(ulList);
// console.log('-');
// let liList = document.getElementsByTagName('li');
// console.log(liList);
//
// console.log('---');
//
//
// let list1 = document.getElementById('list-1');
// console.log(list1);
// let liList1Collection = list1.getElementsByTagName('li');
// console.log(liList1Collection);
//
//
// console.log('=======================');


// let menu1 = document.querySelector('ul');
// console.log(menu1);
//
// let listUl = document.querySelectorAll('ul');
// console.log(listUl);

// let element = document.querySelector('#list-1');
// console.log(element);
//
// let elementNodeListOf = document.querySelectorAll('.menu');
// console.log(elementNodeListOf);


/////////////// Маніпуляція DOM елементами


// let target = document.getElementById('target');
// console.log(target);
//
// console.log(target.innerText);
//
// target.innerText = 'okten';
// console.log(target.innerText);
//
// target.style.background = 'silver';
//
//
// console.log(target.classList);
//
// target.classList.add('foo');
// target.classList.add('bar');
// console.log(target.classList.keys());
// console.log(target.classList.item(0));
// console.log(target.classList.contains('sss'));
// console.log(target.classList.contains('bar'));
//
// console.log(target.classList.toggle('bar'));
// console.log(target.classList.toggle('basd'));
//
//
// console.log(target.getAttribute('id'));
// console.log(target.getAttribute('class'));
// console.log(target.getAttribute('foo'));
// console.log(target.getAttribute('style'));
//
// console.log(target.getAttribute('id'));
// target.setAttribute('id', 'xxx');




////Створення елементів


// let title = document.createElement('h2');
// title.innerText = 'Title - Okten';
// document.body.appendChild(title);

// let wrap = document.getElementsByClassName('wrap')[0];
// console.log(wrap);
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
// ];///{id,name,age}
//
// for (const user of users) {
//     let div = document.createElement('div');
//     div.classList.add('user');
//     div.innerText = `${user.name} - ${user.age}`;
//     wrap.append(div);
// }




////Рекурсія додаткове





