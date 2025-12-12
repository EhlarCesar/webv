document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado correctamente");

  /* ======================
     CARRUSEL AUTO 2 SEG
  ======================= */
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll("img");
    const dots = carousel.querySelectorAll(".dot");
    let index = 0;

    if (images.length > 1) {
      setInterval(() => {
        images[index].classList.remove("active");
        dots[index].classList.remove("active");

        index = (index + 1) % images.length;

        images[index].classList.add("active");
        dots[index].classList.add("active");
      }, 2000);
    }
  });

  /* ================================
     BOTONES "QUIERO RESERVAR"
  ================================= */
  const reserveBtns = document.querySelectorAll(".service-btn");

  reserveBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".service-card");
      const serviceName = card.dataset.service;

      console.log("Servicio seleccionado:", serviceName);

      const mensaje = `Hola! Me gustaría reservar una cita para el servicio: ${serviceName}.%0A¿Podrían ayudarme con disponibilidad?`;

      const url = `https://wa.me/593989001762?text=${mensaje}`;

      window.open(url, "_blank");
    });
  });
});
