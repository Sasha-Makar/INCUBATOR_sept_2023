// alert(22)

let size = +prompt('enter integer',5);
let diapazone = +prompt('enter number',5);

function randomGenerator(size,diapazone) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[arr.length] = (Math.round(Math.random()*diapazone));
    }
    return arr;
}

let xxx = randomGenerator(size,diapazone);
console.log(xxx);