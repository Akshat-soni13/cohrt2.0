arr=
[
   {
      dp:"https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
      story:"https://plus.unsplash.com/premium_photo-1666278379788-681acac1fab4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
   },
   {
      dp:"https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1590787996529-a542c86ca267?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
      dp:"https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1616129511121-4f413c5b1ddd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
      dp:"https://images.unsplash.com/photo-1574870111867-089730e5a72b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1612975921855-a5af89c90a27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
      dp:"https://images.unsplash.com/photo-1504006833117-8886a355efbf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1648866330757-513254b4dd56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   {
      dp:"https://images.unsplash.com/photo-1486578077620-8a022ddd481f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1759013077480-6402159971d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
      {
         dp:"https://plus.unsplash.com/premium_photo-1693724097398-a8db943f5cb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         story:"https://plus.unsplash.com/premium_photo-1764502168236-c44c0503322d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },

   

]

cluter="";

arr.forEach(function(elem,id)
{

   cluter += `<div class="story">
                        <img src="${elem.dp}" id=${id} class="img${id}">
                    </div>`
})

document.querySelector("#stories").innerHTML= cluter;  

stories=document.querySelector("#stories");

stories.addEventListener("click",function(dets)
{
   // var val=
   console.log(arr[dets.target.id].story);

})


stories.addEventListener("click",function(dets)
{
      console.log(`.img${dets.target.id}`);
document.querySelector(`.img${dets.target.id}`).style.borderColor = "gray";
     document.querySelector("#full_screen").style.display="block"
  
         document.querySelector("#full_screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

      setTimeout(function()
   {
      document.querySelector("#full_screen").style.display="none"

   },2000)

})