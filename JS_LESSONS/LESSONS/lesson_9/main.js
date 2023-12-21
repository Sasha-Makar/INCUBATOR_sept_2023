
let obj = {
    key1 : 'value'
}

function ObjCreator(value1) {
    this.key1 = value1;
}

let object = new ObjCreator('qweasd');

console.log(object);

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