console.log("Hello Word");
console.log (1)
//Tarea queryselector
const nombre1 = prompt('Ingresa el primer nombre:');
const nombre2 = prompt('Ingresa el segundo nombre:');
const nombre3 = prompt('Ingresa el tercer nombre:');

document.querySelector('.card1 .card-title').innerText = nombre1;
document.querySelector('.card2 .card-title').innerText = nombre2;
document.querySelector('.card3 .card-title').innerText = nombre3;