// console.log(22);


let arr = [
    [1,2,3],
    ['qwe','123',7],
    ['asd','zxc','100']
]

console.log(arr.length);
console.log(arr);

console.log('---');

console.log(arr[1][0]);

console.log('---');
arr[arr.length] = 'qweasdz';
arr[arr.length] = [789,456,123];

console.log(arr);

console.log('---');

delete arr[3];
console.log(arr);


console.log('===================');


let user = {
    id:1,
    name:'Vasya',
    age : 31,
    status : false
}

console.log(user);


let xxx = {};
let yyy = [];


console.log(typeof xxx);
console.log(typeof yyy);


console.log(Array.isArray(xxx));
console.log(Array.isArray(yyy));

console.log('-------');





