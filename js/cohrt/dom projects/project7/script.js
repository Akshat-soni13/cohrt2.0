body=document.querySelector("body")
main=document.querySelector("main")
start = document.querySelector(".Start");
Stop = document.querySelector(".Stop");
var x;
start.addEventListener("click",function()
{

  x= setInterval(function()
{
  
  div=document.createElement("div");
  c1=Math.floor(Math.random()*266);
  c2=Math.floor(Math.random()*266);
  c3=Math.floor(Math.random()*266);
  div.style.backgroundColor=`rgb(${c1},${c2},${c3})`
  size=Math.floor(Math.random()*50);
  div.style.height=`${size}px`;
  div.style.width=`${size}px`;
  div.style.position="absolute"
  div.style.borderRadius="50%"
  randX=Math.random()*100
  randY=Math.random()*100
  
  div.style.left=randX+"%";
  div.style.top=randY+"%";
  
  body.appendChild(div)


},100)

})

Stop.addEventListener("click",function()
{
    clearInterval(x);


})

