"use strict"


const tabLinks = document.querySelectorAll(".tab__el a");


if(tabLinks){
    for(let tablink of tabLinks){
        tablink.addEventListener("click",tabTrigger);
    }
}

function tabTrigger(event){

    event.preventDefault();

    const parentTab = event.currentTarget.closest(".tab");




    const activeLink = parentTab.querySelector(".tab__el--active");
    activeLink.classList.remove("tab__el--active");
    event.currentTarget.parentNode.classList.add("tab__el--active");


    const activeTab = parentTab.querySelector(".tab__content--active");
    activeTab.classList.remove("tab__content--active");


    const tabSelectID = event.currentTarget.getAttribute("href");
    const tabSelect = parentTab.querySelector(tabSelectId);
    tabSelect.classList.add("tab__content--active");







//const pour selectionner les liens de ma .tab_nav > nodelist
//boucler sur ma const

//ajouter un eventlistener sur les liens pour le click

//je lance une function

//je declare ma function
// premier chose a faire la classe de la nav

//selectionner tab__el--active

//supprimer la classe tab__el--active

//ajouter la classe tab__el--active sur celui qui a ete clique
// currentTarget

//deuxieme chose a faire

//selectionner tab__content--active

//supprimer tab__content--active





//ajouter la classe tab__content--active sur le bon div

//recuperer le contenu de l'attribut href sur le currentTarget
//selectionner le div qui a comme attribut la valeur de href
//sur cet element j'ajoute la classe tab__content--active


}


