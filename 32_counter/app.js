const countel=document.getElementById('count')
const saveel=document.getElementById('save')
const incrementBtn=document.querySelector('.increment-btn')
const saveBtn=document.querySelector('.save-btn')

let count=0;

incrementBtn.addEventListener('click',()=>{
    count += 1
    countel.textContent=count;
})

saveBtn.addEventListener('click',()=>{
    let countStr=count + " , "
    saveel.textContent += countStr
    countel.textContent=0
    count = 0
})









