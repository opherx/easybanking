const humburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-nav");
const navMenu = document.querySelector(".nav-links");

humburgerMenu.addEventListener("click", function(){
    navMenu.style.width = "300px";
    humburgerMenu.classList.add("visible");
    closeMenu.classList.remove("visible");
});

closeMenu.addEventListener("click", function(){
    navMenu.style.width = "0px";
    humburgerMenu.classList.remove("visible");
    closeMenu.classList.add("visible");
});

