// - Створити функцію конструктор для об'єктів User з полями id, name,
// surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = new User(1, 'koko', 'chicken', 'chik@gmail.com', '+3809900-00-111');
console.log(user);

console.log('----------------------------');
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let usersArray = [];

let randomIdFiller = () => Math.floor(Math.random() * 100);

usersArray.push(new User(randomIdFiller(), 'koks', 'qwe', 'shupa@gmail.com', '+380.........'));
usersArray.push(new User(randomIdFiller(), 'akdkdkf', 'gggg', 'jdjd@gmail.com', '+380.........'));
usersArray.push(new User(randomIdFiller(), 'kkkkk', 'vmof', 'qwedc@gmail.com', '+380.........'));
usersArray.push(new User(randomIdFiller(), 'hkhkhkh', 'cvbc', 'djvpdvj@gmail.com', '+380.........'));
usersArray.push(new User(randomIdFiller(), 'yuyuyu', 'zzzz', 'qqqqq@gmail.com', '+380.........'));
usersArray.push(new User(randomIdFiller(), 'kkl;l', 'xxxxx', 'ssdcc@gmail.com', '+380.........'));
usersArray.push(new User(randomIdFiller(), 'fnifj', 'qwere', 'dpvkpk@gmail.com', '+380.........'));
usersArray.push(new User(randomIdFiller(), 'qqqqwe', 'rrrrr', 'aaaaa@gmail.com', '+380.........'));
usersArray.push(new User(randomIdFiller(), 'asdsasd', 'wwwwww', 'cmojf@gmail.com', '+380.........'));
usersArray.push(new User(randomIdFiller(), 'xcvbnnm', 'qqqqq', 'kdkpojrjv@gmail.com', '+380.........'));

console.log(usersArray);

console.log('-----------------------------');

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
//залишивши тільки об'єкти з парними id (filter)

console.log(usersArray.filter(({id}) => id % 2 === 0));

console.log('--------------------------');


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(usersArray.sort(((a, b) => a.id - b.id)));

console.log('----------------');


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)створити пустий масив, наповнити його 10 об'єктами Client

class Cllient {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

console.log(Cllient);

let clientsArr = [];

clientsArr.push(new Cllient(randomIdFiller(), 'qqqqqq', 'riririr', 'qwe@gmail.com', '+38067.......', ['milk', 'bread']));
clientsArr.push(new Cllient(randomIdFiller(), 'aaaaa', 'nbnbnb', 'ert@gmail.com', '+38067.......', ['parrot', 'cat']));
clientsArr.push(new Cllient(randomIdFiller(), 'qaqa', 'kglgl', 'yui@gmail.com', '+38067.......', ['tea']));
clientsArr.push(new Cllient(randomIdFiller(), 'zzzz', 'mglglglglgl', 'opi@gmail.com', '+38067.......', ['horse', 'duck']));
clientsArr.push(new Cllient(randomIdFiller(), 'azaza', 'lllll', 'piopio@gmail.com', '+38067.......', ['chupa-chups', 'boblegum']));
clientsArr.push(new Cllient(randomIdFiller(), 'qwe', 'bnbnbnb', 'asd@gmail.com', '+38067.......', ['qwe', 'asd', 'zxc']));
clientsArr.push(new Cllient(randomIdFiller(), 'asd', 'zxcbvnb', 'fgh@gmail.com', '+38067.......', []));
clientsArr.push(new Cllient(randomIdFiller(), 'qweasd', 'fffff', 'jkl@gmail.com', '+38067.......', []));
clientsArr.push(new Cllient(randomIdFiller(), 'zxc', 'maodzedunych', 'dfghj@gmail.com', '+38067.......', []));
clientsArr.push(new Cllient(randomIdFiller(), 'ert', 'tytytytyt', 'cvvbc@gmail.com', '+38067.......', ['nokia', 'samsung']));

console.log(clientsArr);

console.log('=======================');

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в
// полі order по зростанню. (sort)

console.log(clientsArr.sort((a, b) => a.order.length - b.order.length));

console.log('=========----------------=================');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна.

function Car(model, manufacturer, manufactureYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.manufactureYear = manufactureYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    // додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        let info = []

        for (let [key, value] of Object.entries(this)) {
            if (typeof value === 'object') {
                let objectName = key;
                let objectInObject = value;
                for (let [key, value] of Object.entries(objectInObject)) {
                    info.push(`${objectName}: ${key} - ${value}`);
                }
            } else {
                info.push(`${key} - ${value}`);
            }
        }
        console.log(info);
    };
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    };
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.manufactureYear = newValue;
        console.log(this.manufactureYear);
    };
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
    // поточний об'єкт car
    this.addDriver = function (driver) {
        this.driver = {};
        for (const [key, value] of Object.entries(driver)) {
            this.driver[key] = value;
        }
        console.log(this.driver);
        // return this.driver
    };


}

let carToyota = new Car('toyota', 'corola', 1999, 200, 4.5);
console.log(carToyota);
console.log('---');

carToyota.addDriver({name: 'Johny', age: 99});
console.log(carToyota);
console.log('---');
carToyota.drive();
console.log('---');
carToyota.info();
console.log('---');
carToyota.increaseMaxSpeed(100);
console.log('---');
carToyota.changeYear(100500);


console.log('=====-----========------======----##########');


// - (Те саме, тільки через клас)

class CarsClass {
    constructor(model, manufacturer, manufactureYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.manufactureYear = manufactureYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        let info = [];

        for (let [key, value] of Object.entries(this)) {
            if (typeof value === 'object') {
                let objectName = key;
                let objectInObject = value;
                for (let [key, value] of Object.entries(objectInObject)) {
                    info.push(`${objectName}: ${key} - ${value}`);
                }
            } else {
                info.push(`${key} - ${value}`);
            }
        }

        console.log(info);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    };
    changeYear(newValue) {
        this.manufactureYear = newValue;
        console.log(this.manufactureYear);
    };
        addDriver(driver) {
        this.driver = {};
        for (const [key, value] of Object.entries(driver)) {
            this.driver[key] = value;
        }
        console.log(this.driver);
    };
}

let carGyguli = new CarsClass('kopiyka', 'bestCar)', 1970, 120, 1.4);

console.log(carGyguli);
console.log('###');
carGyguli.addDriver({name: 'uncle Petya', age: 67});
console.log(carGyguli);
console.log('###');
carGyguli.drive();
console.log('#-#');
carGyguli.info();
console.log('#-#');
carGyguli.increaseMaxSpeed(50);
console.log('#-#');
carGyguli.changeYear(1980);


console.log('#########################################3');





// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.



class Popelushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let popelushka1 = new Popelushka('olya', 33, 47);
let popelushka2 = new Popelushka('qwe', 15, 22);
let popelushka3 = new Popelushka('asd', 78, 47);
let popelushka4 = new Popelushka('papa', 23, 22);
let popelushka5 = new Popelushka('qweasd', 110, 23);
let popelushka6 = new Popelushka('zzxxx', 33, 41);
let popelushka7 = new Popelushka('XXX)', 78, 40);
let popelushka8 = new Popelushka('vbvbv', 32, 29);
let popelushka9 = new Popelushka('llll', 45, 27);
let popelushka10 = new Popelushka('asdqwer', 56, 49);

let popelushkaArr = [];
popelushkaArr.push(popelushka1,
    popelushka2,
    popelushka3,
    popelushka4,
    popelushka5,
    popelushka6,
    popelushka7,
    popelushka8,
    popelushka9,
    popelushka10)

console.log(popelushkaArr);

console.log('###########@@@@@@@@@@@@@@@@@@@@@@@################');


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Princee {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Princee('Dodik', 100, 49);
console.log(prince);

console.log('#-#-#-@@@');

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let popeluha of popelushkaArr) {
    if (popeluha.footSize === prince.shoeSize) {
        console.log(`${popeluha.name} - its your destiny man)))`)
    }
}
console.log('#########-@@@@@@@@@@@-#############');

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(`${(popelushkaArr.find(({footSize}) => footSize === prince.shoeSize)).name} - the END!!!)))`);



