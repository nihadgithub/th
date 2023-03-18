
menu = document.querySelector(".menu-btn");
nav = document.querySelector("nav");
header = document.querySelector("header");
menu_btn_bar_1 = document.querySelector(".menu-btn-bar-1");
menu_btn_bar_2 = document.querySelector(".menu-btn-bar-2");

menu.addEventListener("click",function(){
    nav.classList.toggle("nav-active");
    menu_btn_bar_1.classList.toggle("menu-btn-bar-1-active");
    menu_btn_bar_2.classList.toggle("menu-btn-bar-2-active");
    header.classList.toggle("header-bg-change");
});

var headerOnScroll = function () {
    var y = window.scrollY;
    if (y >= 70) {
        header.classList.add("header-on-scroll");
    }  else {
        header.classList.remove("header-on-scroll");
    }
};

window.addEventListener("scroll", headerOnScroll);