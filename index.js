"use strict";

function sayHello() {
    console.log('Bienvenue à vous, cher maître');
    return;
}

window.addEventListener('load', sayHello);

window.addEventListener('load', function () {
    console.log('Bienvenue à vous, maître suprême !');
});

window.addEventListener('load', () => {
    console.log('Bienvenue à vous, Robin vous salue !');
});