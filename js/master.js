// sort color in local storage 

let maincolor=localStorage.getItem("color-option")
if(maincolor!=null)
{
    
    document.documentElement.style.setProperty("--main--color", maincolor)
    document.querySelectorAll(".color-list li").forEach(elem=>{
        elem.classList.remove("active")
        
        if(elem.dataset.color==maincolor)
        {
            elem.classList.add("active")
        }
    })
}

//seting toggel icon spin
document.querySelector(".setting-box .fa-gear"  ).onclick=function(){
    this.classList.toggle("fa-spin")
    document.querySelector(".setting-box").classList.toggle("open")
}


//land imag background
let landbackground=document.querySelector(".landing-page")
let arrimag=["card1.png","card2.png","card3.png","card4.png","card5.png","card6.png"]
setInterval(function(){
    let Randonum= Math.floor(Math.random()* arrimag.length)
    landbackground.style.backgroundImage='url("imges/'+arrimag[Randonum]+'")'
},3000)
 
 


//color -list

let colorli=document.querySelectorAll(".color-list li")
colorli.forEach(li=>{
     li.addEventListener("click",(e)=>{
     
       document.documentElement.style.setProperty("--main--color",e.target.dataset.color)
       localStorage.setItem("color-option",e.target.dataset.color)
  e.target.parentElement.querySelectorAll(".active").forEach(element=>{
      element.classList.remove("active")
  })        
e.target.classList.add("active")
     })
 })


 //switch random background color
 let randomBckel=document.querySelectorAll(".random-background span")
  
colorli.forEach(span=>{
     span.addEventListener("click",(e)=>{
     
       
  e.target.parentElement.querySelectorAll(".active").forEach(element=>{
      element.classList.remove("active")
  })        
e.target.classList.add("active")
     })
 })




