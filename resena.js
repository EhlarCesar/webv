document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.getElementById("resenaBubble");
  const button = document.getElementById("resenaBtn");

  const resenaLink =
    "https://g.page/r/CdLeVRJnYEZ8EAE/review";

  // Mostrar mensaje al cargar
  setTimeout(() => {
    bubble.classList.add("show");
  }, 1200);

  // Ocultar automáticamente
  setTimeout(() => {
    bubble.classList.remove("show");
  }, 5500);

  // Click en botón
  button.addEventListener("click", () => {
    bubble.classList.add("show");

    setTimeout(() => {
      window.open(resenaLink, "_blank");
    }, 300);
  });
});
