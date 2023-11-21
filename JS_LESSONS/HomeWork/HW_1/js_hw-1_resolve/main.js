console.log('-------=task#1=------');

let str = 'hello';
console.log(str);

let str1 = 'owu';
console.log(str1);

let str2 = 'com';
console.log(str2);

let str3 = 'ua';
console.log(str3);

let num = 1;
console.log(num);

let num1 = 10;
console.log(num1);

let num2 = -999;
console.log(num2);

let num3 = 123;
console.log(num3);

const PI = 3.14;
console.log(PI);

let num4 = 2.7;
console.log(num4);

let num5 = 16;
console.log(num5);

let bool = true;
console.log(bool);

let bool1 = false;
console.log(bool1);


console.log('-------=task#2=------');


let firstName = 'Oleksandr';
let middleName = 'Igorovich';
let lastName = 'Makar';

let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
console.log('-------interpolation-------');
let person1 = `${firstName} ${middleName} ${lastName}`;
console.log(person1);



console.log('-------=task#3=------');

let a = 100;
console.log(typeof a);//number//

let b = '100';
console.log(typeof b);//string//

let c = true;
console.log(typeof c);//boolean//


console.log('-------=task#4=------');

let name = prompt('enter your name...','Okten');
let middle = prompt('enter your middle name...','Is');
let last = prompt('enter your last name...','Cool');

let fullName = `${name} ${middle} ${last}`;
console.log(fullName);
alert(`${name}\n${middle}\n${last}`);

console.log('--------------------END----------------------------');