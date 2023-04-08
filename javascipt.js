let left=document.getElementById("slide-btn-left")
let right=document.getElementById("slide-btn-right")
let imgitem=document.querySelectorAll(".image-item");
let start=0;
let end=(imgitem.length-1)*100;
console.log(end);
right.addEventListener("click",()=>
{
    if(start>=-end+100){ start=start-100;}
   

imgitem.forEach(element=>{
    element.style.transform=`translateX(${start}%)`;
})
})
left.addEventListener("click",()=>
{
   
    if(start<0) {start=start+100;}
    

imgitem.forEach(element=>{
    element.style.transform=`translateX(${start}%)`;
}) 
})
const sidebarnavigation=document.getElementById("sidebar-container-navigation-id");

const sidebaropennavigation=document.getElementById("open-nav-sidebar");
const sidebarclosenavigation =document.getElementById("sidebar-navigation-close");
sidebaropennavigation.addEventListener("click",()=>{
    sidebarnavigation.classList.toggle("slidebar-show")
})
sidebarclosenavigation.addEventListener("click",()=>{
    sidebarnavigation.classList.toggle("slidebar-show")
})