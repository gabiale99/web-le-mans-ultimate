const svgButtonMenu = document.querySelector("#svg-menu");
const navBar = document.querySelector("#navbar");
const buttonsNav = document.querySelector("#buttons-nav");

svgButtonMenu.addEventListener("click", () => {
  if (navBar.classList.contains("navbar-close")) {
    navBar.classList.add("navbar-open");
    navBar.classList.remove("navbar-close");
    buttonsNav.classList.remove("container-buttons-nav-close");
    buttonsNav.classList.add("container-buttons-nav");
  } else {
    navBar.classList.remove("navbar-open");
    navBar.classList.add("navbar-close");
    buttonsNav.classList.add("container-buttons-nav-close");
    buttonsNav.classList.remove("container-buttons-nav");
  }
});
