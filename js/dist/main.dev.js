"use strict";

// Funciones para el slider
document.addEventListener("DOMContentLoaded", function () {
  var hero = document.getElementById("hero");
  var overlay = hero.querySelector(".overlay");
  var slides = [{
    image: "images/slide1.jpg",
    title: "Vive la experiencia OnVacation",
    subtitle: "Los mejores destinos para tus próximas vacaciones"
  }, {
    image: "images/slide2.jpg",
    title: "Viaja como mereces",
    subtitle: "Disfruta todo incluido sin preocupaciones"
  }];
  var current = 0;

  function changeSlide() {
    current = (current + 1) % slides.length;
    var slide = slides[current];
    hero.style.backgroundImage = "url('".concat(slide.image, "')");
    overlay.innerHTML = "\n        <h1>".concat(slide.title, "</h1>\n        <p>").concat(slide.subtitle, "</p>\n        ");
  }

  setInterval(changeSlide, 10000); // Cada 10 segundos
}); // Funcionalidad del menú hamburguesa

document.getElementById("menu-toggle").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  var icon = this.querySelector("i");
  nav.classList.toggle("active"); // Alternar el ícono

  if (nav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}); //Funcion para simular el envio del formulario a un api tipo Json

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var form = e.target;
  var data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    message: form.message.value
  };
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (res) {
    return res.json();
  }).then(function (json) {
    document.getElementById('form-status').innerText = 'Mensaje enviado con éxito';
    form.reset();
  })["catch"](function () {
    document.getElementById('form-status').innerText = 'Hubo un error. Intenta de nuevo';
  });
});