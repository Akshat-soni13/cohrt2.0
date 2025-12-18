var aud1 = new Audio("./28.mp3")
var aud2 = new Audio("./29.mp3")
var aud3 = new Audio("./30.mp3")
var aud4 = new Audio("./31.mp3")
var aud5 = new Audio("./32.mp3")
var aud6 = new Audio("./33.mp3")
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");
var box7= document.querySelector("#box7");
var box8 = document.querySelector("#box8");
var box9 = document.querySelector("#box9");

box1.addEventListener("click",function()
{
   {
    aud1.currentTime = 0;   // reset audio position
    aud1.play();  
     

   }
    

})

window.addEventListener("keydown", function (val) {

    if(val.key==="a")
    {
         aud1.currentTime = 0;   // reset audio position
        aud1.play();  
        box1.style.scale=1.2
    }
    if(val.key==="b")
    {
         aud2.currentTime = 0;   // reset audio position
        aud2.play();  
        box2.style.scale=1.2
    }
    if(val.key==="c")
    {
         aud3.currentTime = 0;   // reset audio position
        aud3.play();  
        box3.style.scale=1.2
    }
    if(val.key==="d")
    {
         aud4.currentTime = 0;   // reset audio position
        aud4.play();  
        box4.style.scale=1.2
    }
    if(val.key==="e")
    {
         aud1.currentTime = 0;   // reset audio position
        aud1.play();  
        box5.style.scale=1.2
    }
    if(val.key==="f")
    {
         aud4.currentTime = 0;   // reset audio position
        aud4.play();  
        box6.style.scale=1.2
    }
    if(val.key==="m")
    {
         aud5.currentTime = 0;   // reset audio position
        aud5.play();  
        box7.style.scale=1.2
    }
    if(val.key==="p")
    {
         aud6.currentTime = 0;   // reset audio position
        aud6.play();  
        box8.style.scale=1.2
    }
    if(val.key==="n")
    {
         aud1.currentTime = 0;   // reset audio position
        aud1.play();  
        box9.style.scale=1.2
    }
    


});
window.addEventListener("keyup", function (val) {

    if(val.key=="a")
    {
        box1.style.scale=1
    }
     if(val.key==="b")
    {
        box2.style.scale=1
        
    }
      if(val.key==="c")
    {
          
        box3.style.scale=1
    }
    if(val.key==="d")
    {
         
        box4.style.scale=1
    }
    if(val.key==="e")
    {
          
        box5.style.scale=1
    }
    if(val.key==="f")
    {
        
        box6.style.scale=1
    }
    if(val.key==="m")
    {
         
        box7.style.scale=1
    }
    if(val.key==="p")
    {
       
        box8.style.scale=1
    }
    if(val.key==="n")
    {
         
       box9.style.scale=1
    }
});


