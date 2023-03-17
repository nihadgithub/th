var menu = document.querySelector(".menu-btn");
var nav = document.querySelector("nav");
var menu_btn_bar_1 = document.querySelector(".menu-btn-bar-1");
var menu_btn_bar_2 = document.querySelector(".menu-btn-bar-2");
menu.addEventListener("click",function(){
    nav.classList.toggle("nav-active");
    menu_btn_bar_1.classList.toggle("menu-btn-bar-1-active");
    menu_btn_bar_2.classList.toggle("menu-btn-bar-2-active");
});