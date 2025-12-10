let form = document.querySelector("form");
let name = document.querySelector("#name");
let span = document.querySelector("span")

form.addEventListener("submit",function(val)
{
    val.preventDefault();
    
    if(name.value.length<2)
    {
        span.style.display="initial";
    }
    else
    {
        span.style.display="none";

    }


    // email check use of regex 


    let regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/

    let ans= regex.test("a@a.a");
    console.log(ans)
            
})