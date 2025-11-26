"use strict";

const tabLinks = document.querySelectorAll(".tab__el a");

if(tabLinks.length > 0){
   for (let tabLink of tabLinks) {
       tabLink.addEventListener("click", tabTrigger);
   }
}

function tabTrigger(event){
   // 1. Забороняємо стандартну дію (перехід по href)
   event.preventDefault();

   // 2. Знаходимо батьківський контейнер .tab
   const parentTab = event.currentTarget.closest(".tab");

   // 3. Перемикаємо активний елемент навігації
   const activeLink = parentTab.querySelector(".tab__el--active");
   if(activeLink){
      activeLink.classList.remove("tab__el--active");
   }
   event.currentTarget.parentElement.classList.add("tab__el--active");

   // 4. Перемикаємо активний контент
   const activeTab = parentTab.querySelector(".tab__content--active");
   if(activeTab){
      activeTab.classList.remove("tab__content--active");
   }

   const tabID = event.currentTarget.getAttribute("href");
   const tabSelect = parentTab.querySelector(tabID);
   if(tabSelect){
      tabSelect.classList.add("tab__content--active");
   }
}



