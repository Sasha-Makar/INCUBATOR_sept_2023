

let form = document.forms.f1;
let userStorage = localStorage.getItem('user');
let users = JSON.parse(userStorage) || [];

form.onsubmit=function (ev) {
    ev.preventDefault();
    let name = this.name.value;
    let age = this.age.value;
    let data = {name, age};
    console.log(data);
    users.push(data)
    localStorage.setItem('user', JSON.stringify(users));
}