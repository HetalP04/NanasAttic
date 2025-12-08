document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");

  function openLightbox(src, caption) {
    lightboxImage.src = src;
    lightboxImage.alt = caption || "";
    lightboxCaption.textContent = caption || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }

  document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  document.querySelector(".lightbox-backdrop").addEventListener("click", closeLightbox);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  const historyItems = document.querySelectorAll(".history-item");

  historyItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const imgSrc = item.getAttribute("data-image");
      const historyText = item.getAttribute("data-history") || "";
      if (imgSrc) openLightbox(imgSrc, historyText);
    });
  });

  const funFactBtn = document.getElementById("fun-fact-btn");
  const funFactText = document.getElementById("fun-fact");

  const funFacts = [
    "The term “vintage” refers to clothing that is at least 20 years old, but can be up to 100 years old or more.",
    "Vintage clothing is often more durable than modern clothing due to the use of higher-quality materials and construction techniques.",
    "Vintage clothing from the 1940s was often made with shorter hemlines due to restrictions on fabric use during World War II.",
    "Vintage sizes are often much smaller; a modern size 10 might be a vintage 14.",
    "Buying vintage reduces the carbon footprint and waste from new garment production."
  ];

  funFactBtn.addEventListener("click", function () {
    const index = Math.floor(Math.random() * funFacts.length);
    funFactText.textContent = funFacts[index];
  });

  const visitForm = document.querySelector(".visit-form");
  const formMessage = document.getElementById("form-message");

  visitForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = visitForm.querySelector("#email").value.trim();
    const era = visitForm.querySelector("#era").value;

    if (!email) return;

    formMessage.textContent =
      "Thanks, " + email + "! We’ll let you know when new " + era + " pieces arrive.";
    visitForm.reset();
  });

  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
