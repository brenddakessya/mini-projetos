const campo1 = document.querySelector('#campo1');
const campo2 = document.querySelector('#campo2');
const seletor = document.querySelector('#operacao');
const resposta = document.querySelector('#resposta');

seletor.addEventListener("change", calcular);
campo1.addEventListener("keydown",calcular);
campo2.addEventListener("keydown",calcular);

function calcular(){


    if(campo1.value!='' && campo2.value!=''){
//         resposta.classList.add('problema');
//         resposta.innerHTML="Campo vazio";
//         setTimeout(()=>{
//           resposta.classList.remove("problema");
//           resposta.innerHTML='';

//         },3000);
     const valor1 = parseInt(campo1.value);
     const valor2 = parseInt(campo2.value);
     const operacao = seletor.value;

          if(operacao==='somar'){
               resposta.innerHTML= valor1 + valor2;
          }

          if(operacao==='subtracao'){
               resposta.innerHTML= valor1 - valor2;
          }
          if(operacao==='multiplicacao'){
               resposta.innerHTML= valor1 * valor2;
          }
          if(operacao==='divisao'){
               resposta.innerHTML= valor1/valor2;
}
}
}