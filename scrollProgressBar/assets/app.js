"use strict"

const progressBar = document.querySelector(".scrollBar__progress");

if(progressBar){
    window.addEventListener("scroll",updateScrollProgress);

}

function updateScrollProgress(){

    /* 
        calcul
        document.body.scrollHeight - scroll totale de la page
        window.scrollY - votre valeur de scroll
        window.innerHeight - hauteur di viewport
    */ 

    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    const readPercentage = (currentScroll/maxScroll) * 100 ; /* mon pourcentage de scroll*/ 

    progressBar.style.setProperty("--scrollbar-width",  readPercentage +   "%")
}