let list = [];



for (let i = 0; i < 20; i++) {
  list.push(Math.floor(Math.random() * (101 - 1) + 1));
}

let suma=0;
let producto=list[1];


for(let i=0;i<list.length;i+=2){

    suma+=list[i];

}

for(let i=3;i<list.length;i+=2){

    producto*=list[i];

}

console.log(list);

console.log(`La suma de los numeros de posición par es: ${suma}`);
console.log(`El producto de los numeros de posición impar es: ${producto}`);

