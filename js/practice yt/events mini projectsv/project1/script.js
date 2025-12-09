select = document.querySelector("select");
h1 = document.querySelector("h1");

select.addEventListener("change",function(val)
{

    h1.classList.add("changeColor");
    h1.textContent = `${val.target.value} you have selected `;
    console.log(val.target.value);
})