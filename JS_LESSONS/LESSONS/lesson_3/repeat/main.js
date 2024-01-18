// let a = 0;
//
// a = a + 1;
// a += 1;
//
// console.log(a);
// a = a + 100500;
// console.log(a);
// a += 100500;
// console.log(a);
// a /= 2;
// console.log(a);
//
// a--;
// console.log(a);
// a++;
// console.log(a);
// --a;
// console.log(a);
// a *= 2;
// console.log(a);
// a -= 200099;
// console.log(a);
// --a;
// console.log(a);
// a -= 899;
// console.log(a);
//
// console.log('-------');
// let x = 0;
// let y = x++;
// console.log(y, x);
// y = ++x;
// console.log(y, x);
//
// console.log('---------------------');


// for (let i = 1; i <= 10; i++){
//     console.log('#',i);
// }


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// for (let i = 0; i < users.length; i+=3) {
//     // console.log(users[i]);
//     let user = users[i];
//     console.log(user);
// }
// for (let i = 0; i < users.length; i++) {
//     // const user = users[i];
//     if (i % 2 === 0) {
//         console.log(users[i]);
//     }
// }

// for (let i = 0; i < users.length; i+=2) {
//     const user = users[i];
//     console.log(user);
// }
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     // if (!user.status){
//     //     console.log(user);
//     // }
//     if (user.status){
//         console.log(user);
//     }
// }

// for (let i = 0, x = 1; i < users.length; i++, x--) {
// }


//FOR OF

// for (const user of users) {
//     // console.log(user);
// }

// for (const user of users) {
//     console.log(user.name);
// }

//for in


let user = {
    id: 1,
    name: 'vasya',
    age: 31
}

for (const key in user) {
    console.log(key, '-', user[key]);
}


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
                    <h3>${product.title} - price : ${product.price} UAH</h3>
                    <img src="${product.image}" alt="">
                    </div>`)
    document.write('<hr>');
    document.write('<hr>');
}


document.write('<ul>');
for (const user of users) {
    document.write(`<li>`);
    for (const key in user) {
        document.write(`${key} - ${user[key]} //`);
    }
    document.write(`</li>`);
}
document.write('</ul>');


console.log('-----------');

let i = 0;
while (i < 10){
    console.log(i);
    i++;
}





