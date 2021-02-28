let lista = ["Obi-Wan Kenobi", "Luke Skywalker", "Darth Vader"];

console.log(lista);

console.log(lista.sort());

let personajeNuevo = prompt("Introduce un personaje nuevo de Star Wars");
let repetido=false;

for (let i = 0; i < lista.length && !repetido; i++) {
  if (personajeNuevo === lista[i]) {
    console.log(`El nombre introducido esta repetido en la posicion: ${i}`);
    repetido=true;
  } 
}

if(!repetido){
    lista.push(personajeNuevo);
    console.log(lista);
}


console.log(lista.length);
