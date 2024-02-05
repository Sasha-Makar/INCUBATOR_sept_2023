console.log('**********************RESOLVE_lesson-8*****************');

// - Створити функцію конструктор для об'єктів User з полями
// id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let someUser = new User(1, 'koko', 'sarski', 'qwe@gmail.com', '+380967474174');
console.log(someUser);

console.log('*******************************');
// створити пустий масив, наповнити його 10 об'єктами new User(....)


const users = [
    new User(5, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231'),
    new User(8, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231'),
    new User(6, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631'),
    new User(3, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111'),
    new User(1, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555'),
    new User(4, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345'),
    new User(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787'),
    new User(2, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777'),
];
console.log(users);

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user = new User(1, 'kokos', 'kokosovych', 'qwe@qwe7', '+38094782555');
// console.log(user);

// let arr = [];
// arr.push(
//     new User(1, 'kokos', 'kokosovych', 'qwe@qwe7', '+38094782555'),
//     new User(2, 'alina', 'sovych', 'qqqqqqwe@qwe7', '+359849482555'),
//     new User(3, 'polina', 'sosososovych', 'qqqqqqwe@qqw888', '+359772555'),
//     new User(7, 'polinochka', 'sosovych', 'qqqqqqwe@qqw888_7777', '+3597725559898989898'),
//     new User(4, 'petia', 'dusasdf', 'qqqqqqwe@qqw87878878', '+35977777777777777755'),
//     new User(5, 'sasha', 'ssddgdfeffh', 'qqqqqqwe@qq9', '+3548484944942555')
// );
// console.log(arr);
//
// console.log('***********');
console.log('*******************************************');


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)


let filterUsers = users.filter(user => !(user.id % 2));
console.log(filterUsers);


// let filter = arr.filter(item => item.id % 2 === 0);
// console.log(filter);
//
// console.log('************');


console.log('********************************');


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його
// по id. по зростанню (sort)

console.log(users.sort((u1, u2) => u1.id - u2.id));


// let sort = arr.sort((a, b) => {
//     return a.id - b.id;
// });
// console.log(sort);

console.log('********************************');

//
// - створити класс для об'єктів Client з полями id, name, surname , email,
// phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let client = new Client(1, 'qwe', 'asd', 'asd@gmail.com', '+3809999999999', ['qwe', 'asd', 'sasdf']);
console.log(client);

// створити пустий масив, наповнити його 10 об'єктами Client

const clients = [
    new Client(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231', ['apple', 'sandwich', 'malone']),
    new Client(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231', ['bear', 'sandwich']),
    new Client(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631', ['apple', 'sandwich']),
    new Client(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111', ['apple', 'bear', 'sandwich', 'malone']),
    new Client(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555', ['bear']),
    new Client(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345', ['apple', 'bear', 'malone']),
    new Client(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787', ['apple', 'bear', 'sandwich']),
    new Client(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777', ['bear', 'sandwich', 'malone']),
]
console.log(clients);

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client = new Client(1, 'koko', 'SASDU', 'qwer@gmail.com', '+380984745125', ['note', 'phone', 'TV']);
// console.log(client);
// let orderArr = [];
// orderArr.push(
//     new Client(1, 'koko', 'SASDU', 'qwer@gmail.com', '+380984745125', ['note', 'phone', 'qweasdr', 'TV']),
//     new Client(2, 'qwe', 'SASDU', 'qwer@gmail.com', '+380984745125', ['note', 'phone', 'TV']),
//     new Client(3, 'dddddd', 'SASDU', 'qwer@gmail.com', '+380984745125', ['TV']),
//     new Client(4, 'qwertyy', 'SASDU', 'qwer@gmail.com', '+380984745125', ['note', 'js', 'lpassd', 'phone', 'TV']),
//     new Client(5, 'asd', 'SASDU', 'qwer@gmail.com', '+380984745125', ['note', 'phone'])
// )
//
// console.log(orderArr);
//
// console.log('=========');


console.log('********************************');

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по
// кількості товарів в полі order по зростанню. (sort)


console.log(clients.sort((c1, c2) => c1.order.length - c2.order.length));

// let sort1 = orderArr.sort((a, b) => {
//     return a.order.length - b.order.length
// });
// console.log(sort1);
// //
//
// console.log('***************========*****************');
//

console.log('********************************');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з
// властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
function Car1(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
    }

    this.info = function () {
        console.log('************-INFO-************')
        for (const key in this) {
            if (typeof this[key] === 'function') continue;
            console.log(key,':', this[key]);
        }
        console.log('************-INFO-************')
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed+=newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(driver);
    }
}

let car1 = new Car1('qwe', 'taiwan', 1234, 777, 35.5);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
car1.info();
car1.changeYear(2024);
car1.info();
car1.addDriver({name:'Max', age: 33});
car1.info();


// function CarCreator(model,producer,graduation,maxSpeed,capacity) {
//
//     this.model = model;
//     this.producer = producer;
//     this.graduation = graduation;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//
// }
//
// let car = new CarCreator('BMW', 'USA', 2007, 270, 3.2);
// console.log(car);


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`     +
// function CarCreator(model,producer,graduation,maxSpeed,capacity) {

//     this.model = model;
//     this.producer = producer;
//     this.graduation = graduation;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
//     }
//
// }
// let car = new CarCreator('BMW', 'USA', 2007, 270, 3.2);
// console.log(car);
// car.drive();


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`    +

// function CarCreator(model, producer, graduation, maxSpeed, capacity) {
//
//     this.model = model;
//     this.producer = producer;
//     this.graduation = graduation;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
//     }
//
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] === 'function') continue;
//             console.log(key, this[key]);
//         }
//     };

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed  +

// this.increaseMaxSpeed = function (newSpeed) {
//     console.log(this.maxSpeed);
//     this.maxSpeed += newSpeed;
//     console.log(this.maxSpeed);
// };

// -- changeYear (newValue) - змінює рік випуску на значення newValue                                 +

// this.changeYear = function (newValue) {
//     console.log(this.graduation);
//     this.graduation = newValue;
//     console.log(this.graduation);
// };

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його        +
// в поточний об'єкт car

//     this.addDriver = function (driver) {
//         if (driver) {
//             driver = {
//                 name: 'Ivan',
//                 age: 31,
//                 status: true
//             }
//         }
//         console.log(driver);
//     }
// }
//
// let car = new CarCreator('BMW', 'USA', 2007, 270, 3.2);
// console.log(car);
// car.info();
// console.log('===');
// car.increaseMaxSpeed(100);
// console.log('===');
// car.changeYear(2015);
// console.log('---');
// car.addDriver(1);
// console.log(car);

console.log('*****************************************');
console.log('*****************************************');
console.log('*****************************************');


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed


// -- changeYear (newValue) - змінює рік випуску на значення newValue


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його
// в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`);
    }

    info() {
        console.log('************-CLASS_INFO-************')
        for (const key in this) {
            if (typeof this[key] === 'function') continue;
            console.log(key,':', this[key]);
        }
        console.log('************-CLASS_INFO-************')
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed+=newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
        console.log(driver);
    }
}

let car2 = new Car2('BMW', 'TOKIO', 2000, 355, 3.7);
console.log(car1);
car2.drive();
car2.info();
car2.increaseMaxSpeed(100);
car2.info();
car2.changeYear(2024);
car2.info();
car2.addDriver({name:'Max', age: 33});
car2.info();






console.log('*****************************************');
console.log('*****************************************');


console.log('****************CINDERELLA****************');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}



// class Cindirella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cindirella = new Cindirella('olia', 31, 32);
// console.log(cindirella);

// Створити масив з 10 попелюшок.
let cinderellas = [];
cinderellas.push(
    new Cinderella('Alina', 22, 36),
    new Cinderella('Tamara', 17, 45),
    new Cinderella('Anna', 17, 37),
    new Cinderella('Inna', 30, 38),
    new Cinderella('Rita', 30, 39),
    new Cinderella('Olga', 17, 39),
    new Cinderella('Irina', 18, 34),
    new Cinderella('Oksana', 25, 35),
    new Cinderella('Tanya', 29, 40),
    new Cinderella('Sabrina', 57, 46)
)
console.log(cinderellas);
console.log('**********');

// const cindirellasArr = [
//     new Cindirella('olga', 31, 35),
//     new Cindirella('helga', 15, 22),
//     new Cindirella('marusia', 21, 52),
//     new Cindirella('olenA', 39, 42),
//     new Cindirella('ketia', 77, 34),
//     new Cindirella('oksana', 78, 33),
//     new Cindirella('sveta', 23, 37),
//     new Cindirella('marta', 61, 39),
//     new Cindirella('lida', 22, 28),
//     new Cindirella('sofia', 19, 47)
// ];
//
// console.log(cindirellasArr);
// console.log('***************');

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, bootSize) {
        this.name = name;
        this.age = age;
        this.bootSize = bootSize;
    }
    FindCenderella(arr) {
        for (const cenderella of arr) {
            if (cenderella.footSize === this.bootSize){
                console.log(cenderella);
            }
        }
    }
}


let prince = new Prince('Yura', 18, 40);
console.log(prince);
prince.FindCenderella(cinderellas);
// class Prince {
//     constructor(name, age, shoose) {
//         this.name = name;
//         this.age = age;
//         this.shoose = shoose;
//     }
// }
//
// let prince1 = new Prince('petia', 33, 42);
// console.log(prince1);
//
// console.log('***************8');

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


// for (const cindirella of cindirellasArr) {
//     // console.log(cindirella);
//     if (cindirella.footSize === prince1.shoose){
//         console.log(cindirella);
//     }
// }
// console.log('*******');
console.log('***************');

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let find = cindirellasArr.find(value => value.footSize === prince1.shoose);
// console.log(find);

console.log(cinderellas.find(value => value.footSize === prince.bootSize));


console.log('***********FINE***********');