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
        if (dots[index]) dots[index].classList.remove("active");

        index = (index + 1) % images.length;

        images[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
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

      const mensaje = `Hola! Me gustaría reservar una cita para el servicio: ${serviceName}.%0A¿Podrían ayudarme con disponibilidad?`;
      const url = `https://wa.me/593989001762?text=${mensaje}`;

      window.open(url, "_blank");
    });
  });

  /* ================================
     LIGHTBOX GALERÍA DE CARDS
  ================================= */

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-arrow.left");
  const nextBtn = document.querySelector(".lightbox-arrow.right");

  let currentImages = [];
  let currentIndex = 0;

  // Click en imagen del card
  document.querySelectorAll(".service-image").forEach((container) => {
    container.addEventListener("click", () => {
      currentImages = Array.from(container.querySelectorAll("img"));
      currentIndex = currentImages.findIndex((img) =>
        img.classList.contains("active")
      );

      if (currentIndex < 0) currentIndex = 0;

      openLightbox();
    });
  });

  function openLightbox() {
    lightbox.classList.add("active");
    updateImage();
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function updateImage() {
    lightboxImg.src = currentImages[currentIndex].src;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateImage();
  }

  function prevImage() {
    currentIndex =
      (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateImage();
  }

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);
  closeBtn.addEventListener("click", closeLightbox);

  // Cerrar haciendo click fuera
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Teclado (PC)
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeLightbox();
  });

  // Swipe móvil
  let startX = 0;

  lightbox.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  lightbox.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
  });
});
