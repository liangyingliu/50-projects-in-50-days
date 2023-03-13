const prev=document.getElementById("b");
const next=document.getElementById("c");
const garden=document.querySelectorAll('.garden');
//将hdList用Array.from（）方法转换为数组，并用list变量接收
let list = Array.from(garden);
console.log(list)
const circle=document.getElementById("a");
let currentActive=1;
next.addEventListener('click',()=>{
    currentActive++
    if(currentActive>4){
        currentActive=4
    }
    update()
} )
prev.addEventListener('click',()=>{
    currentActive--
    if(currentActive<0){
        currentActive=1
    }
    update()
} )
function update(){
    list.forEach((garden,idx) => {
        if(currentActive>idx){
            garden.classList.add('active')
        }
        else{
            garden.classList.remove('active')
        }
    })
    const actives=document.querySelectorAll('.active')
    circle.style.width=(actives.length-1)/(list.length-1)*100+'%'
    if(currentActive<=1){
        prev.classList.add('disabled')
        next.classList.remove('disabled')
        prev.disabled=true
    }
    else if(currentActive===2||currentActive===3){
        prev.classList.remove('disabled')
        next.classList.remove('disabled')
    }
    else if(currentActive===4){
        prev.classList.remove('disabled')
        next.classList.add('disabled')
    }
}

