plus=document.querySelector("#plus")
minus=document.querySelector("#minus")
h1=document.querySelector("h1")
let a=0;


plus.addEventListener("click",function()
{
    a++
   h1.innerText=a
})

minus.addEventListener("click",function()
{  a--
   h1.innerText=a
})