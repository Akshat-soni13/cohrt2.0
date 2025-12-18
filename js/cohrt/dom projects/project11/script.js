img = document.querySelector("img")

window.addEventListener("mousemove",function(val)
{
    // console.log(val.clientX)

    img.style.left=val.clientX+"px"
    img.style.top=val.clientY+"px"


}
)