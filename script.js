const listaPersonagens = document.querySelector('.personagens-lista')

const height = listaPersonagens.scrollHeight;
const personagensTop = listaPersonagens.offsetTop;
console.log(personagensTop);

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft;




//getBoundingClientRect()
//metodo que retorna um objeto com valores de width, height, distancias do elemento, e mais

const rect = primeiroh2.getBoundingClientRect(); 
console.log(rect)//retorna um objeto, portanto pode ter .elementos