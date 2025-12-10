// Select all elements matching the selector and attach a mousemove listener to each
const containers = document.querySelectorAll(".conati");
containers.forEach(function(val)
   {

         val.addEventListener("mouseenter",function(ele)
      {
           val.childNodes[3].style.opacity=1;
            // image.style.left=ele.clientX;
            // image.style.top=ele.clientY;
         // val.style.backgroundColor="green"

      })
       val.addEventListener("mouseleave",function(ele)
      {
            // image.style.opacity=0
           val.childNodes[3].style.opacity=0;
      })
       val.addEventListener("mousemove",function(ele)
      {
         
            // image.style.opacity=0
           val.childNodes[3].style.left=ele.clientX+"px";
         //   val.childNodes[3].style.top=ele.finalY+"px"; doubt


      })
   }
)