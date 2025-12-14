document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.getElementById("whatsappBubble");
  const button = document.getElementById("whatsappBtn");

  const whatsappLink =
    "https://wa.me/593989001762?text=Hola%2C%20necesito%20una%20consulta%20o%20informacion";

  // Mostrar mensaje al cargar
  setTimeout(() => {
    bubble.classList.add("show");
  }, 800);

  // Ocultar automáticamente
  setTimeout(() => {
    bubble.classList.remove("show");
  }, 5000);

  // Click en botón
  button.addEventListener("click", () => {
    bubble.classList.add("show");

    setTimeout(() => {
      window.open(whatsappLink, "_blank");
    }, 300);
  });
});
