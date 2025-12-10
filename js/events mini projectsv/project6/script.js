div = document.querySelector("div");

window.addEventListener("mousemove",function(val)
{
    div.style.left=val.clientX + "px";
    div.style.top=val.clientY + "px";
    console.log(val.clientX);
    console.log(val.clientY)

})
