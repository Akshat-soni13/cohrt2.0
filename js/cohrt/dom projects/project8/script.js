starter = document.querySelector(".shower button")
h1 = document.querySelector(".shower h1")

inner= document.querySelector(".inner");

let ans=0;
starter.addEventListener("click",function()
{

    x=setInterval(function()
    {
        ans++
        inner.style.width=ans+"%" 
        h1.innerText=ans+"%"
        starter.style.pointerEvents="none"
        
        
        
    }
    ,10)
    
    setTimeout(function()
    {
        starter.innerText="downloaded"
        clearInterval(x);
        starter.style.backgroundColor="gray"
        }
    ,1000)


})