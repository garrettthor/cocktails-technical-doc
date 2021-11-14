const pin = '0316';

let pinEntry;

const submit = document.querySelector('#submit');

submit.addEventListener('click', checkPin);

function checkPin() {
    pinEntry = document.querySelector('#pin').value;
    if (pinEntry === pin) {
        document.querySelector('#main-doc').classList.remove('hide');
        document.querySelector('#login').classList.add('hide');
    } else {
        alert('Incorrect PIN');
    }
}