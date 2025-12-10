arr=
[
    {
        team:"Csk",
        captain:"MSD",
        trophy:5,
        cimage:"https://i.pinimg.com/1200x/62/d9/f7/62d9f78be67e18710d1c97e683cb3b4b.jpg",
        tlogo:"https://i.pinimg.com/736x/4e/e7/ac/4ee7ac144c048d64edcb30d3129a895f.jpg,"

    },

  {
    team: "SRH",
    captain: "Pat Cummins",
    trophy: 1,
    cimage: "https://i.pinimg.com/1200x/2c/f7/8f/2cf78fdb777813aa601769834b3d19f5.jpg",
    tlogo: "https://i.pinimg.com/736x/e3/51/42/e3514291459535563cf7445b19d5dea4.jpg"
  },

  {
    team: "DC",
    captain: "Rishabh Pant",
    trophy: 1,
    cimage: "https://i.pinimg.com/1200x/b9/2d/97/b92d9730272d6c6640a43f0a1ca8afc6.jpg",
    tlogo: "https://i.pinimg.com/736x/09/49/16/094916793828ffd24f9e3b6e4fd9c02b.jpg"
  },

  {
    team: "PBKS",
    captain: "Shikhar Dhawan",
    trophy: 0,
    cimage: "https://i.pinimg.com/736x/0d/93/52/0d9352eac1c25bcb579a53f4025b98b1.jpg",
    tlogo: "https://i.pinimg.com/736x/c7/31/da/c731dae998ec06de0047afd102d7e8e0.jpg"
  },

  {
    team: "RCB",
    captain: "King Kohli",
    trophy: 1,
    cimage: "https://i.pinimg.com/736x/45/f3/0c/45f30c6f6d7f40e25756c3d288144440.jpg",
    tlogo: "https://i.pinimg.com/736x/98/bc/f5/98bcf50cf019517f1ffb1014d46e3cf9.jpg"
  }

]

main = document.querySelector("main");
box= document.querySelector(".box");
button = document.querySelector("button");
h1=document.querySelector(".box h1")
p1=document.querySelector(".inner .trop")
p2=document.querySelector(".inner .cap");
img=document.querySelector("img")


button.addEventListener("click",function()
{
        var val= arr[Math.floor(Math.random()*arr.length)]
        // console.log(val)
        h1.innerText=val.team;
        p1.innerText=`trophy-${val.trophy}`;
        p2.innerText=val.captain;
        img.src=val.tlogo;
        main.style.backgroundImage=`url("${val.cimage}")`

})