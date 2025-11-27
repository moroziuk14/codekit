"use strict";

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__el a");

if(menuToggle){
    menuToggle.addEventListener("click", menuOpen);
    for(let menuLink of menuLinks){
        menuLink.addEventListener("click", closeMenu);
    }
}

function menuOpen(){
    menu.classList.toggle("menu--open");
}

function closeMenu(){
    menu.classList.remove("menu--open");
}
