divi = document.querySelector("#main div");
input = document.querySelector("#main input");
divi.addEventListener("click",function()
{
    input.click();  

})

input.addEventListener("change",function(val)
{
    let ans = val.target.files[0];
    if(ans)
    divi.textContent = ans.name;

})