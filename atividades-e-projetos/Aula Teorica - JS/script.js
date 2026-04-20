// Exemplos da aula teórica que estou estudando.

// console.log('Olá mundoooo!');
// console.log('Bom dia.');

// let idade;
// let nome = 'Mario';

// idade = 10;

// idade = idade+1;
// nome = 'Luigi';

// console.log(nome)
// console.log(typeof nome)

// // let mensagem = `Olá ${nome}, sua idade é: ${idade}.`
// // console.log(mensagem)

// // if(idade>=18){
// //     console.log('Seja bem vindo, ' +  nome)
// // }
// // else{
// //     console.log('Acesso bloqueado.')
// // }


// let pessoa = {nome:'Mario' , 
//               idade: 30};

// pessoa.nome = 'Luigi';
// console.log(pessoa['nome'])

// lista = ['Xícara','Carro','Lençol'];

// console.log(lista[0])

// Principais comandos:

let paragrafo = document.querySelector('#para1');

paragrafo.addEventListener('mouseover',Trocacor2)
paragrafo.addEventListener('mouseout',Trocacor1)

// function Trocatexto(){
//     paragrafo.innerHTML='TTT'
// }

function Trocacor2(){
    paragrafo.style.background ='blue';
}

function Trocacor1(){
    paragrafo.style.background ='pink';
}