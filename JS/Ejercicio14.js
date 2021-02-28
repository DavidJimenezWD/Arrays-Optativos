let lista = [];
let uno = 0;
let dos = 0;
let tres = 0;
let cuatro = 0;
let cinco = 0;
let seis = 0;
let siete = 0;
let ocho = 0;
let nueve = 0;

for (let i = 0; i < 20; i++) {
  lista.push(Math.floor(Math.random() * (10 - 1) + 1));
}

for (let i = 0; i < lista.length; i++) {
  if (lista[i] === 1) {
    uno++;
  } else if (lista[i] === 2) {
    dos++;
  } else if (lista[i] === 3) {
    tres++;
  } else if (lista[i] === 4) {
    cuatro++;
  } else if (lista[i] === 5) {
    cinco++;
  } else if (lista[i] === 6) {
    seis++;
  } else if (lista[i] === 7) {
    siete++;
  } else if (lista[i] === 8) {
    ocho++;
  } else if (lista[i] === 9) {
    nueve++;
  }

  
}

console.log(lista);

console.log(`Cartidad de 1: ${uno}`);
console.log(`Cartidad de 2: ${dos}`);
console.log(`Cartidad de 3: ${tres}`);
console.log(`Cartidad de 4: ${cuatro}`);
console.log(`Cartidad de 5: ${cinco}`);
console.log(`Cartidad de 6: ${seis}`);
console.log(`Cartidad de 7: ${siete}`);
console.log(`Cartidad de 8: ${ocho}`);
console.log(`Cartidad de 9: ${nueve}`);