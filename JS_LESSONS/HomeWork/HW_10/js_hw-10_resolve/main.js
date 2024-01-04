// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні
// з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою
// з'явився блок з вашим об'єктом

(() => {
    const formElement = document.createElement('form');
    formElement.setAttribute('name', "user_info");
    formElement.style.display = 'flex';
    formElement.style.flexDirection = 'column';
    formElement.style.gap = '1rem';
    formElement.style.margin = '0 auto';
    formElement.style.maxWidth = '400px';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', "text");
    nameInput.setAttribute('name', "firstName");

    const surnameInput = document.createElement('input');
    surnameInput.setAttribute('type', "text");
    surnameInput.setAttribute('name', "lastName");


    const ageInput = document.createElement('input');
    ageInput.setAttribute('type', "number");
    ageInput.setAttribute('name', "age");

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', "submit");
    submitButton.innerText = 'Submit';
    submitButton.style.display = 'block';

    const userInfoDiv = document.createElement('div')

    function onSubmitHandler(e) {
        e.preventDefault();
        const nameLi = nameInput.value ? `<li>Name: ${nameInput.value}</li>` : '';
        const surnameLi = surnameInput.value ? `<li>Surname: ${surnameInput.value}</li>` : '';
        const ageLi = ageInput.value ? `<li>Age: ${ageInput.value}</li>` : '';

        userInfoDiv.innerHTML = `<ul>${nameLi}${surnameLi}${ageLi}</ul>`;
    }

    formElement.addEventListener('submit', onSubmitHandler);

    formElement.append(nameInput, surnameInput, ageInput, submitButton, userInfoDiv);

    document.body.appendChild(formElement);

    const lineElement = document.createElement('hr');
    document.body.appendChild(lineElement);
})();




// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1



// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію



// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
//щоб при натисканні на кнопку зникав елемент з id="text".


//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//


//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//



// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!

//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.

//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається