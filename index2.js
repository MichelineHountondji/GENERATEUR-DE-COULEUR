




let body = document.querySelector(".body");
let rgb = document.querySelector(".rgb");

function changecouleur() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let couleur = `rgb(${r},${g},${b})`;  

  body.style.backgroundColor = couleur;
  rgb.textContent = couleur;
}

setInterval(changecouleur, 1000);
