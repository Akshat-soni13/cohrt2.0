let input = document.querySelector("input");
let span = document.querySelector("h1 span")

input.addEventListener("input",function(val)
{

        let len=  val.target.value.length;
        span.textContent=len


})