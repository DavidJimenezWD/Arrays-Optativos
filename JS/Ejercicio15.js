let num;
let enteros = [];
let decimales = [];
let suma = 0;
let sumaDecimal = 0;

do {
  num = Number(prompt("Introduce un numero"));

  if (num % 1 === 0) {
    enteros.push(num);
  } else {
    decimales.push(num);
  }
} while (num > 0);

for (let i = 0; i < enteros.length; i++) {
  if (enteros[i] >= 0) { // Controlo que no sume el numero negativo cuando se quiera salir
    suma += enteros[i];
  }
}

for (let i = 0; i < decimales.length; i++) {
  if(decimales[i]>=0){
    sumaDecimal += decimales[i];
  }  
}

// Como añade el numero negativo a este array se lo resto 
console.log(`El numero de enteros introducidos es: ${enteros.length-1}`); 

console.log(`El numero de decimales introducidos es: ${decimales.length}`);
console.log(`La suma de los enteros es: ${suma}`);
console.log(`La media de todos los numeros es: ${(suma + sumaDecimal) / (enteros.length + decimales.length)}`);
