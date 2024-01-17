// alert(22);

// Інкременти та декркменти

// let x = 0;
// x = x + 1;
// console.log(x);
// x++;
// console.log(x);
// x = x - 1;
// console.log(x);
// x--;
// console.log(x);
// x+=1;
// console.log(x);
// x+=2;
// console.log(x);
// x*=5;
// console.log(x);

// let x = 0;
// // let b = x++;
// // console.log(b, x);
// //
// // b = ++x;
// // console.log(b, x);//2,2




// Цикл for



let users = [
    {name: 'vasya', age : 31, status : false},
    {name: 'petya', age : 30, status : true},
    {name: 'kolya', age : 29, status : true},
    {name: 'olya', age : 28, status : false},
    {name: 'max', age : 30, status : true},
    {name: 'anya', age : 31, status : false},
    {name: 'oleg', age : 28, status : false},
    {name: 'andrey', age : 29, status : true},
    {name: 'masha', age : 30, status : true},
    {name: 'olya', age : 31, status : false},
    {name: 'max', age : 31, status : true}
];

// for (const user of users) {
//     console.log(user);
// }
// console.log('=======');
// for (let i = 0; i < users.length; i++){
//     let user = users[i];
//     console.log(user);
// }

// for (let i = 0; i < users.length; i++) {
//     console.log([i], i);
//     let user = users[i];
//     console.log(user);
//     console.log('test',i);
// }
// console.log('-------------');
//
// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//
//     console.log(user);
// }

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    document.write(`<h3>user info - ${user.name} - ${user.age}</h3>`)
}


console.log('---------');


let products = [
    {
        title: 'milk',
        price: 30,
        image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/milk-dairy/taste-teach_prodcatcard.png?sfvrsn=fb05538d_2'
    },
    {
        title: 'juice',
        price: 28,
        image: 'https://img.freepik.com/free-vector/illustration-juce-glass_250435-779.jpg?auto=format&h=200'
    },
    {
        title: 'tomato',
        price: 45,
        image: 'https://img.freepik.com/free-vector/set-realistic-full-sliced-tomatoes-vectors_1441-834.jpg?auto=format&h=200'
    },
    {
        title: 'tea',
        price: 25,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonQ8OD5ZbGBe7c9XolRfXgQjvPU5iFvIwOQ&usqp=CAU'
    }
];


for (const product of products) {
     document.write(`<div>
                    <h2>${product.title}-price:${product.price}</h2>
                    <img src="${product.image}" alt="milk">
                    <hr>
                    </div>`)
}


//Цикл for of


for (const user of users) {
     document.write(`<div>${user.name}-${user.age}-${user.status} <hr></div>`)
}


// Цикл for in


let user = {
    id:1,
    name:'vasya',
    status:false
}
for (const key in user) {
    console.log(key);
    console.log(user[key]);
}
console.log('=======');

for (const user of users) {

    for (const key in user) {
        console.log(key, user[key]);
    }
    // console.log('---');
    console.log('');
}


//Цикл while




let i = 0;
while (i < users.length){
    let user = users[i];
    console.log(user);
    i++;
}



//do while

// do {
//     console.log('qwe');
// }while (false);