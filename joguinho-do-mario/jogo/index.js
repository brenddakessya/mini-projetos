// Seleciona o elemento HTML com a classe 'mario'
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
// Define a função jump
const jump = () => {
    // Adiciona a classe 'jump' ao elemento mario
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500 );
}

const loop = setInterval (() => {

    console.log(loop)

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); 

console.log(marioPosition);

if (pipePosition < 120 && pipePosition> 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src='./images/gameover.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop)
    }


}, 10);

// Adiciona um evento de escuta para quando uma tecla for pressionada
document.addEventListener('keydown', jump);