let btn = document.querySelector(".mobile-menu")
let links = document.querySelector(".nav-links")
btn.addEventListener('click',()=>{
    links.classList.toggle("show")
})