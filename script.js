/*const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
// la funcion innerHTML nos permite realizar cambios en el codigo de html desde javascript
h1.innerHTML = 'patito <br> feo';
//la funcion innertext sirve para escribir texto plano
h1.innerText = 'patito <br> feo';

//getAttribute lee los atributos de una classe desde javas
//console.log(h1.getAttribute('class'))
//setAttribute permite alterar los atributos de una classe
//h1.setAttribute('class', 'rojo')

h1.classList.add('rojo');
h1.classList.remove('verde');
//con input podemos entrar directamente al value que tiene para modificarlo
input.value = "456"

const img = document.createElement('img')
img.setAttribute('src' , 'https://i.pinimg.com/564x/76/89/7a/76897a789d0f265359beb51625bbe3c4.jpg')

console.log(img)
//append sirve para insertar en un contenedor elementos nuevos
pid.innerHTML ="";
pid.append(img)*/

const h1 = document.querySelector('h1');
const form= document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#result');
//creamos una funcion cada vez qe le damos click a un boton 
//parseInt convierte un string en dato numerico 
btn.addEventListener('click', sumarInputValues);
//addEventListener es un escuchador dde eventos

function sumarInputValues(event){
    //console.log({event});
    event.preventDefault();
    const sumaInputs = Number(input1.value) + parseInt(input2.value);
    //number permite convertir el string del imput por medio de la funcion Number a un numero 
    presult.innerText ="Resultado: "+sumaInputs;
}
