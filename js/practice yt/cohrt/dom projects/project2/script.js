let heart= document.querySelector("#heart");
let container= document.querySelector("#container")

container.addEventListener("dblclick",function()
{
   console.log("click")
   heart.style.transform = " translate(-50%,-50%) scale(1)";
   heart.style.opacity=0.7;

   setTimeout(function()
{
   heart.style.opacity=0;
   

},600)
})