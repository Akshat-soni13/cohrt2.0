body = document.querySelector("body")
body.addEventListener("mousemove",function(dets)
{
    // console.log(dets.clientX,dets.clientY)
   body.style.setProperty("--X",dets.clientX+"px");
   body.style.setProperty("--Y",dets.clientY+"px");
    

})