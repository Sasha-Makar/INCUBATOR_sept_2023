// console.log(22);


console.log(document.forms);
let form = document.forms.f1;
let usersArr = [];

form.onsubmit = function (ev) {
    ev.preventDefault();
    // console.log(ev.target.username.value);
    let username = ev.target.username.value;
    // console.log(this.age.value);
    let age = this.age.value;
    console.log({username, age});
    usersArr.push({username, age});

}

let btn = document.getElementById('show_all_users');

btn.onclick = function (ev) {
    console.log(usersArr);
    for (const user of usersArr) {
        let div = document.createElement('div');
        div.innerText = `USER INFO: name-${user.username}, age - ${user.age}`;
        document.body.append(div);
    }
}

btn.addEventListener('click', function () {
    console.log('qweasdfrewsdc');
})


window.onload = function () {
    console.log('load');
}

document.onreadystatechange = function (ev) {
    // console.log(ev);
    console.log(document.readyState);
    if (document.readyState === "interactive"){
        console.log('loading.....');
        btn.innerText = 'start loading';
        document.body.style.background = 'blue';
    }
    if (document.readyState === 'complete'){
        console.log('FINISH');
        btn.innerText = 'complete loading';
        document.body.style.background = 'white';
    }
}

window.onload = function () {
    btn.innerText = 'you can use btn';

}