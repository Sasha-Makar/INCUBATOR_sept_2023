// alert(22);
console.log('-------CONSULTATION#5----------');
console.log('---------------------------');

let arrow = name => console.log(name);
arrow('Json');

let foo = (name='vasya', age=30) => console.log(name, 'my age is - ' + age);
foo('kokos', 31);
foo();
let calc = (a = 10, b = 20) => console.log(a + b);
calc();
calc(10, 10);

let calc2 = (a = 100, b = 100) => a + b;

let c = calc2(10, 40);
console.log(c);

let c2 = calc2();
console.log(c2);

console.log('=============');

Math.min()

{
    console.log()
}



