let slider = document.getElementById("comentariosSlider");
let cards = document.querySelectorAll(".comentario-card");

let index = 0;

function moveSlider() {
  index++;
  if (index >= cards.length) index = 0;

  let move = index * 320; // ancho card + gap
  slider.style.transform = `translateX(-${move}px)`;
}

setInterval(moveSlider, 3000); // cada 3 segundos

// FLECHAS EN MÓVIL
document.querySelector(".arrow-left").onclick = () => {
  index--;
  if (index < 0) index = cards.length - 1;
  slider.style.transform = `translateX(-${index * 320}px)`;
};

document.querySelector(".arrow-right").onclick = () => {
  index++;
  if (index >= cards.length) index = 0;
  slider.style.transform = `translateX(-${index * 320}px)`;
};
