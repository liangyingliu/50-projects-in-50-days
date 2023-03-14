const liebiao=document.getElementById("a")
const guanbi=document.getElementById("b")
const content=document.querySelector(".content")
const menu=document.querySelector(".menu")
liebiao.addEventListener('click',()=>{
    content.classList.add('active')
    menu.style.left=20+'px'
    menu.style.transitionDelay= 0.2+'s';
})
guanbi.addEventListener('click',()=>{
    content.classList.remove('active')
    menu.style.left=-200+'px'
    menu.style.transitionDelay=-0+'ms'
    content.style.transitionDelay= 0+'s';
})