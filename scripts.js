// Ejercicio 1
document.getElementById("gen-1").innerText = "Generasión 1 Pokimon"

//Ejercicio 2
let infocard = document.querySelectorAll("#gen-1 + div .infocard")
for (const pokemon of infocard) {
  pokemon.style.backgroundColor = "red"
}

// Ejercicio 3
console.log(window.location.href);

//Ejercicio 4
console.log(document.domain);

// Ejercicio 5
const images = document.querySelectorAll(".img-sprite");
console.log(images);

//Ejercicio 6
const todasLasImagenes = document.querySelectorAll("img");

todasLasImagenes.forEach((img) => {
  img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
});

// Ejercicio 7
const flying = document.querySelectorAll(".flying")

for (const fly of flying) {
  fly.style.backgroundColor = 'black'
  
}