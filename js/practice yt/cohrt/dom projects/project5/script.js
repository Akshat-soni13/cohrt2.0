button = document.querySelector("button");
box = document.querySelector("#box")



button.addEventListener("click",function()
{

    const val1=  Math.floor(Math.random()*256);
    const val2=  Math.floor(Math.random()*256);
    const val3=  Math.floor(Math.random()*256);


    box.style.backgroundColor=`rgb(${val1},${val2},${val3})`

})