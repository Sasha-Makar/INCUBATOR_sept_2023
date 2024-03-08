// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
//     При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими
// словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.forms.creator;
// console.log(form);

form.onsubmit = function (ev) {
    ev.preventDefault();
    let wrapper = document.createElement('div');
    let name = document.createElement('div');
    let surname = document.createElement('div');
    let age = document.createElement('div');

    name.innerText = `${this.name.value}`;
    surname.innerText = `${this.surname.value}`;
    age.innerText = `${this.age.value}`;


    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';

    // let btn = document.getElementsByTagName('button')[0];
    // btn.addEventListener('click',()=>{
    //     btn.disabled = true;
    // })
    wrapper.classList.add('item', 'wrapper');
    wrapper.append(name, surname, age);
    document.body.appendChild(wrapper);
}