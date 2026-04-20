let botao = document.querySelector('#botao');
botao.style.backgroundColor = 'blue';
let quebrado = false;
let contador = 0;

botao.addEventListener('mouseover',Trocaverde);
botao.addEventListener('mouseout',Trocaazul);
botao.addEventListener('click', Trocavermelho);

function Trocaverde(){
    if (quebrado==false){
    botao.style.backgroundColor = 'green';
    botao.style.color = 'white';
}
}
function Trocaazul(){
     if (quebrado==false){
    botao.style.backgroundColor = 'blue';
    botao.style.color = 'black';
}
}
function Trocavermelho(){

    contador++;

    if (contador>=10){
        botao.style.backgroundColor = 'red';
        botao.innerHTML = 'Quebrei';
        quebrado = true;
}
}