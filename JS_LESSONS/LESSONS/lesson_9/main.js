
// let obj = {
//     key1 : 'value'
// }
//
// function ObjCreator(value1) {
//     this.key1 = value1;
// }
//
// let object = new ObjCreator('qweasd');
//
// console.log(object);

// function explorer(element) {
//     console.log(element);
//     let children = element.children;
//     if (children.length !== 0){
//         for (const child of children) {
//             // console.log(child);
//             explorer(child)
//         }
//     }
// }
// explorer(document.body)

// function explorer(element) {
//     console.log(element);
//     let children = element.children;
//     if (children.length !== 0){}
//     for (const child of children) {
//         explorer(child);
//     }
// }

// explorer(document.body);


// console.log(document);
// document.title = 'hello okten';


// let divWrap = document.getElementsByClassName('wrap');
// console.log(divWrap);
let wrap = document.getElementsByClassName('wrap')[0];
console.log(wrap);

let pointList = wrap.getElementsByClassName('point');
console.log(pointList);

let target = document.getElementById('target');
console.log(target);

let h1 = document.getElementsByTagName('h1');
console.log(h1);


console.log(wrap.children);

for (const child of wrap.children) {
    console.log(child.innerText);
    child.style.background = 'blue';
    // child.innerText = 'XXX';
}



let point = document.querySelectorAll('.point');
console.log(point);
