form=document.querySelector("form")
main= document.querySelector("#main")
input =document.querySelectorAll("input");


form.addEventListener("submit",function(val)
{
    val.preventDefault();
    // alert("form Submited")
    let card= document.createElement("div");        
    card.setAttribute("id","card");
    
    let profile= document.createElement("div");        
    profile.setAttribute("id","profile");
    
    let img= document.createElement("img");        
    img.setAttribute("src",input[0].value);
    
    let h31= document.createElement("h3");    
    h31.textContent = input[1].value;
    
    
    let h41= document.createElement("h4");
    h41.textContent = input[2].value;    
    
    let p1= document.createElement("p");        
    p1.textContent = input[3].value;
    
    
    card.appendChild(profile);
    profile.appendChild(img);
    
    card.appendChild(h31);
    card.appendChild(h41);
    card.appendChild(p1);
    
    main.appendChild(card);

    input.forEach(function(val)
{
    if(val.type!="submit")
    val.value=""; 
})
    
    

})




