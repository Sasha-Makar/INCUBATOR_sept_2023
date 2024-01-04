// console.log(document.forms);
//
// let f1 = document.forms.f1;
// console.log(f1);
//
//
// console.log(f1.username);
//
// let f2 = document.forms.f2;
// console.log(f2);
//
// console.log(f2.email);
// console.log(f2.button);
// let value = f2.button.value;
// console.log(value);
//
//
// console.log('okten');


// console.log(document.forms);
let form = document.forms['f1'];
console.log(form);
// console.log(form.username);
let nameInp = form.username;
// console.log(nameInp);
let users = [];
form.onsubmit = function (ev) {
    ev.preventDefault();
    // console.log(ev);
    let name = this.username.value;
    let age = this.age.value;
    // console.log({name,age})
    return users.push({name,age});
    // console.log('submit');
}

// console.log(users);

let btnShow = document.getElementById('btn-show-all');
btnShow.addEventListener('click',function () {
    // console.log('click');
    // console.log(users);
    for (const user of users) {
        let div = document.createElement('div');
        div.innerText = `Name - ${user.name}   and   Age - ${user.age}`;
        document.body.append(div);
    }
})




    btnShow.addEventListener('click',function (ev) {
        console.log('btn click');
    })


