'use strict'

const bnt = document.querySelector('.bnt');
const body = document.querySelector('body');

bnt.addEventListener('click',function() {

    if (body.classList.contains ('light-theme')) {
        body.classList.replace ('light-theme','dark-theme');
        bnt.textContent = 'Light';
        console.log('Dark mode ativado');

}
    else{
        body.classList.replace('dark-theme','light-theme');
        bnt.textContent = 'Dark';
        console.log('Light mode ativado');
}

});