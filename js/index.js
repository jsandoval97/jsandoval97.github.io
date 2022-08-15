
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//Hace que se marque en la barra de navegación en que sección me encuentro
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

    if (entry.isIntersecting) {
      menuLink.classList.add("selected");
    } else {
      menuLink.classList.remove("selected");
    }
  })
  //agrego margen para que no seleccione mas de una sección al mismo tiempo
}, {rootMargin: "-50% 0px -50% 0px"})

//Hace que el menú se cierre cuando selecciono una sección
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function() {
    menu.classList.remove("menu_opened");
  })

  //aplico el observer
  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if(target) {
    observer.observe(target);
  }
})