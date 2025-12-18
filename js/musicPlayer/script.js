var arr=[
    {
        name:"GehraHua",
        image:"./images/gehr.webp",
        song:"./song/gehr.mp3"

    },
    {
        name:"Dewana",
        image:"./images/dewn.webp",
        song:"./song/dewn.mp3"

    },
    {
        name:"pal-pal",
        image:"./images/pal.webp",
        song:"./song/pal.mp3"

    },
    {
        name:"iskh hua",
        image:"./images/image.png",
        song:"./song/isk.mp3"

    },

]


var audi = new Audio();

var songer = document.querySelector("#songer")

function SongDisplayer()
{
    var clutter="";
arr.forEach(function(val,idx)
{
var ran = Math.floor(Math.random()*60);

    clutter+=` <div class="song-card" id=${idx}>
                            <div id="one">
                                <img src="${val.image}">
                                <p>${val.name}</p>
                            </div>
                            <div id="two">3:${ran}min</div>
                        </div> `

})

songer.innerHTML=clutter
}

SongDisplayer();
var selectedSong=0;
left=document.querySelector("#left")


play=document.querySelector("#pause")
back=document.querySelector("#back")
forth=document.querySelector("#for")







songer.addEventListener("click",function(dets)
{

   selectedSong=dets.target.id;
   left.style.backgroundImage=`url("${arr[selectedSong].image}") `
   // console.log(arr[dets.target.id].song)
    audi.src=arr[selectedSong].song
    audi.play();
    flager=1;
    playing();

})
var flager=0;


function playing()
{
    play.addEventListener("click",function()
    {
        console.log("hjel")
        if(flager==1)
            {
                play.innerHTML = `<i class="ri-play-line"></i>`
                flager=1;
                audi.play();
            }
            else
                {
                    play.innerHTML = `<i class="ri-pause-line"></i>`
                    flager=0;
                    audi.pause();
                }
                
            })
        }
        

play.addEventListener("click",function()
{
    console.log("hjel")
    if(flager==0)
    {
        play.innerHTML = `<i class="ri-pause-line"></i>`
        flager=1;
        audi.play();
    }
    else
    {
        play.innerHTML = `<i class="ri-play-line"></i>`
        flager=0;
        audi.pause();
    }

})

forward.addEventListener("click",function()
{

    if(selectedSong<arr.length -1)
    {
        selectedSong++; 
        console.log(selectedSong)
    }
        // if(selectedSong <arr.length -1)
    // {
    //     selectedSong++;
    //     playing();
    //     audi.play();
    // }
})