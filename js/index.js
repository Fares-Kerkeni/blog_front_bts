var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document
  .getElementById("slide_html")
  .addEventListener("mouseenter", function () {
    // Rend le bloc de texte visible lorsque la souris survole l'image
    document.querySelector(".container_langages_html").style.display = "flex";
    document.querySelector(".container_langages_css").style.display = "none";
    document.querySelector(".container_langages_js").style.display = "none";
    document.querySelector(".container_langages_php").style.display = "none";
  });
document
  .getElementById("slide_css")
  .addEventListener("mouseenter", function () {
    // Rend le bloc de texte visible lorsque la souris survole l'image
    document.querySelector(".container_langages_css").style.display = "flex";
    document.querySelector(".container_langages_html").style.display = "none";
    document.querySelector(".container_langages_js").style.display = "none";
    document.querySelector(".container_langages_php").style.display = "none";
  });

document.getElementById("slide_js").addEventListener("mouseenter", function () {
  // Rend le bloc de texte visible lorsque la souris survole l'image
  document.querySelector(".container_langages_js").style.display = "flex";
  document.querySelector(".container_langages_css").style.display = "none";
  document.querySelector(".container_langages_html").style.display = "none";
  document.querySelector(".container_langages_php").style.display = "none";
});
document
  .getElementById("slide_php")
  .addEventListener("mouseenter", function () {
    // Rend le bloc de texte visible lorsque la souris survole l'image
    document.querySelector(".container_langages_php").style.display = "flex";
    document.querySelector(".container_langages_css").style.display = "none";
    document.querySelector(".container_langages_js").style.display = "none";
    document.querySelector(".container_langages_html").style.display = "none";
  });
