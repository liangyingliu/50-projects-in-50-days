const btn=document.querySelector(".btn")
const input=document.querySelector(".input")
let a=1
btn.addEventListener('click',()=>{
    
    console.log(a)
    console.log(input.style.width)
    if(a===1){
        input.style.width="200px"
        btn.classList.add('active')
        a--
    }else if(a===0){
        btn.classList.remove('active')
        input.style.width=0
        a++
    }
})