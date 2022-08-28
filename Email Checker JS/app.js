
function validate() {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email.value.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
    } else {
        form.classList.add('invalid');
        form.classList.remove('valid');
    }

    if (email.value == "") {
        form.classList.remove('invalid');
        form.classList.remove('valid');
    }
}

// const form = document.getElementById('form');
// const email = document.getElementById('email');
// const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

// form.onkeyup = function () {
//     if (email.value.match(pattern)) {
//         form.classList.add('valid');
//         form.classList.remove('invalid');
//     } else {
//         form.classList.add('invalid');
//         form.classList.remove('valid');
//     }

//     if (email.value == "") {
//         form.classList.remove('invalid');
//         form.classList.remove('valid');
//     }
// }