let alumnos = [];
let notas = [];
let media = 0;

for (let i = 0; i < 5; i++) {
  let nota = prompt("Introduce una nota entre 0 y 10");

  if (nota >= 0 && nota <= 10) {
    notas.push(Number(nota));
    alumnos.push(prompt("Introduce el nombre y apellidos del alumno"));
  }
}

for (let i = 0; i < alumnos.length; i++) {
  media += notas[i];
}

console.log(`La media es ${media / notas.length}`);

for (let i = 0; i < notas.length; i++) {
  if (notas[i] > media / notas.length) {
    console.log(`Alumno por encima de la media: ${alumnos[i]}`);
  }
}

let maxima = notas[0];
let minima = notas[0];

for (let i = 0; i < notas.length; i++) {
  if (maxima < notas[i]) {
    maxima = notas[i];
  }
}
for (let i = 0; i < notas.length; i++) {
  if (minima>notas[i]) {
    minima=notas[i];
  }
}

for(let i=0;i<alumnos.length;i++){

    if(notas[i]===maxima){
        console.log(`Este alumno tiene la maxima nota: ${alumnos[i]}`);
    }

}

for(let i=0;i<alumnos.length;i++){

    if(notas[i]===minima){
        console.log(`Este alumno tiene la minima nota: ${alumnos[i]}`);
    }

}

for(let i=0;i<alumnos.length;i++){

    console.log(`Alumno: ${alumnos[i]} y su nota es: ${notas[i]}`);

}
