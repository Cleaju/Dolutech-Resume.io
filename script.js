function note() {
    alert("Welcome,it's nice having you here.")
}
note();

// scroll down
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle
    ("window-scroll", window.scrollY >0)
})

const menu=document.querySelector(".menu");
const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display ="block";
    closeBtn.style.display ="inline-block";
    menuBtn.style.display ="none";
})


// close nav menu

const closeNav =() => {
    menu.style.display ="none";
    closeBtn.style.display ="none";
    menuBtn.style.display ="inline-block";
}
 
closeBtn.addEventListener("click", closeNav)

document.querySelectorAll(".menu li").forEach(n => n.addEventListener("click", () => {
    menu.style.display ="none";
    closeBtn.style.display ="none";
    menuBtn.style.display ="inline-block";
}))