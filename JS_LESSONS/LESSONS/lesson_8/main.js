


// function User(id,name,age) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User(1,'koko',78);
// let user2 = new User(2,'qwe',45);
//
// console.log(user);
// console.log(user2);

////agregacia

// function User(id,name,age,wife) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.wife = wife;
// }
//
// let user = new User(1,'koko',78,{name:'anna',age:34});
// console.log(user);




//kompozycia

// function User(id,name,age,wifeName,wifeAge) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.wife = {
//         name:wifeName,
//         age:wifeAge
//     }
// }
//
// let user = new User(1,'koko',78,'anna',34);
// console.log(user);



let u1 = {
    id:1,
    name:'koko',
    greeting(msg){
       return `${msg} my name is ${this.name}`
    }
}

console.log(u1);
console.log(u1.greeting('hi'));




let u2 = {name:'petya'};

console.log(u1.greeting.call(u2,'olla'));
console.log(u1.greeting.apply(u2, ['herak']));


let greetingCopy = u1.greeting.bind(u2);
greetingCopy('pedro','pedrito');



// console.log(u2.greeting());
