"use strict";

const tabLinks = document.querySelectorAll(".tab__el a");

if(tabLinks.length > 0){
   for (let tabLink of tabLinks) {
       tabLink.addEventListener("click", tabTrigger);
   }
}



function tabTrigger(event){
   
   event.preventDefault();

   const parentTab = event.currentTarget.closest(".tab");
  
   const activeLink = parentTab.querySelector(".tab__el--active");
   activeLink.classList.remove("tab__el--active");
  
   event.currentTarget.parentElement.classList.add("tab__el--active")

   const tabActive = parentTab.querySelector(".tab__content--active");

   tabActive.classList.remove("tab__content--active");
  
   const tabID = event.currentTarget.getAttribute("href");
   const tabSelect = parentTab.querySelector(tabID);
   tabSelect.classList.add("tab__content--active");
}




