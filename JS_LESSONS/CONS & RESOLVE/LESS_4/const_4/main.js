// let array = [1, 2, 3, 4, 5];
// function arFn(arr) {
//     let newArr = []
//     for (const item of arr) {
//         newArr.push(item * 2);
//     }
//     return newArr;
// }
//
// console.log(array);
//
// let arFn1 = arFn(array);
// console.log(arFn1);
//
//
//
//  /////////////////////////
//
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         arr[i] = 'OKTEN';
//     }
// }
// console.log(arr);
//
//
// //////////////////
//
//
//
// function arg() {
//     let sum = 0;
//     if (arguments.length === 1) {
//         console.log(arguments);
//     }else {
//         for (const argument of arguments) {
//             sum += argument
//         }
//         return sum;
//     }
// }
//
// arg(2);
//
// let number = arg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(number);
//
//
// ///////////////////
//
//
// function random(size,limit) {
//     let randomArrs = [];
//     for (let i = 0; i < size; i++) {
//         randomArrs.push(Math.round(Math.random() * limit));
//     }
//     return randomArrs;
// }
//
// let numbers = random(10,100);
// console.log(numbers);
//
//
// for (const item of numbers) {
//     document.write(`<div>${item}</div>`);
// }



function calc(arr1,arr2) {
    if (arr1.length !== arr2.length){
        console.log('not ARR');
    }
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i] + arr2[i]);
    }
    return res;

}

let calc1 = calc([1, 2, 3], [4, 5, 6]);
console.log(calc1);
