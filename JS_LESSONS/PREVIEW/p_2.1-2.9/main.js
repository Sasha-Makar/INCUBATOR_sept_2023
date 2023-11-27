let arr = [1, 2, 3, 4, 5687, 'qwe'];
console.log(arr.length);
console.log(arr.length - 1);

arr[6] = 'okten';
console.log(arr);

arr[arr.length] = 'asd';
console.log(arr);

console.log('===========');

let array = [
    ['qwe',1,7,33],
    [111,222,333],
    ['asd','qwe',123,456,789]
]
console.log(array[1][2]);
console.log(array[2][0]);


console.log('=====================');


let user1 = {
    id:1,
    name: 'vasya',
    age :31,
    skills : ['html','css','scrum','js'],
    wife: {
        name: 'olya',
        age:31
    }
}
console.log(user1);

console.log(user1.name);
console.log(user1.skills[3]);
console.log(user1.wife.name);

console.log('===================');


let users = [
    {
        skills:['html','css','scrum','js'],
        name: 'Max',
        age: 31
    },
    {
        name:'Olya',
        age:22
    },
    {
        name: 'Kate',
        age:41
    },
    {
        name:'Vasya',
        age:44
    },
    {
        name:'Petya',
        age:33
    }
]
console.log(users);
console.log(users[0].name);

users[0].id = 1;
console.log(users[0]);

console.log(users[0].skills[3]);


console.log('================');



let user = {
    name:'vasya',
    age:31
}
console.log(user);

user.status = false;
console.log(user);

delete user.age;
console.log(user);


console.log('===============');



let color = prompt('enter color');

switch (color) {
    case 'red':
        console.log('stop');
        break;
    case 'green':
        console.log('go');
        break;
    default:
        console.log('error');
}