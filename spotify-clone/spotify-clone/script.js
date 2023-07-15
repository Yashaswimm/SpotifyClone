console.log("Welcome to JavaScript");

let songIndex=0;
let audioElement=new Audio('E:/spotify-clone/songs/0.mp3');
let masterplay=document.getElementById('masterplay');
let myProgress=document.getElementById('myProgreesBar');
let giff=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Bhuvanam Gaganam", filePath:"E:/spotify-clone/songs/0.mp3", coverPath:"E:/spotify-clone/covers/vamshi.jpg"},
    {songName:"Varaharoopam", filePath:"E:/spotify-clone/songs/1.mp3", coverPath:"E:/spotify-clone/covers/kantara.jpg"},
    {songName:"Jagave-Neenu", filePath:"E:/spotify-clone/songs/2.mp3", coverPath:"E:/spotify-clone/covers/love 360.jpg"},
    {songName:"Paatashaala", filePath:"E:/spotify-clone/songs/3.mp3", coverPath:"E:/spotify-clone/covers/Patashala.jpg"},
    {songName:"Bombe-Helutaite", filePath:"E:/spotify-clone/songs/4.mp3", coverPath:"E:/spotify-clone/covers/rajakumara.jpg"},
    {songName:"Alemaariye", filePath:"E:/spotify-clone/songs/5.mp3", coverPath:"E:/spotify-clone/covers/Rathnanprapancha.jpg"},
    {songName:"Sanchariyagu-Nee", filePath:"E:/spotify-clone/songs/6.mp3", coverPath:"E:/spotify-clone/covers/lovemocktail-2.jpg"},
]


//Assinging  coverpage and songName to HTML page with elements with classname songItemplay
songItems.forEach((item,i)=>{
    //console.log(item,i);
    item.getElementsByTagName("img")[0].src=songs[i].coverPath;
    item.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
});



//Working of masterplay button
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    console.log("Today index=" +songIndex);
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        if(element.id==songIndex){
            element.classList.remove('fa-play');
            element.classList.add('fa-pause');
        }

    }) 

    giff.style.opacity="1";
}
else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    giff.style.opacity="0";
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        var eachtest=element.classList.contains('fa-pause');
        if(eachtest){
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
        
        }
    });
    giff.style.opacity="0";
}
});


//working of progressBar
audioElement.addEventListener('timeupdate',()=>{
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  // console.log(progress);
  myProgessBar.value=progress;

});


//To change the audioCurrentTime with change in 
myProgessBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgessBar.value*audioElement.duration)/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.classList.remove('fa-pause');
  element.classList.add('fa-play');
    }
)}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    var test=e.target.classList.contains('fa-play');
    if(test){
makeAllPlays();
 songIndex=parseInt(e.target.id);
//console.log("index="+index);
e.target.classList.remove('fa-play');
e.target.classList.add('fa-pause');
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
audioElement.src=songs[songIndex].filePath;
audioElement.currentTime=0;
audioElement.play();
giff.style.opacity="1";
document.getElementById("prsentSong").innerHTML=songs[songIndex].songName;
    }
    else{
        audioElement.pause();
        e.target.classList.remove('fa-pause');
        e.target.classList.add('fa-play');
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        giff.style.opacity="0";
    }
  })
})


document.getElementById("next").addEventListener("click",()=>{
    if(songIndex==6)
    songIndex=0;
    else
    songIndex +=1;
    masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
makeAllPlays();
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    if(element.id==songIndex){
        element.classList.remove('fa-play');
        element.classList.add('fa-pause');
    }
});
audioElement.src=songs[songIndex].filePath;
audioElement.currentTime=0;
audioElement.play();
giff.style.opacity="1";
document.getElementById("prsentSong").innerHTML=songs[songIndex].songName;

});

document.getElementById("back").addEventListener("click",()=>{
    if(songIndex==0)
    songIndex=6;
    else
    songIndex -=1;
    masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
makeAllPlays();
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    if(element.id==songIndex){
        element.classList.remove('fa-play');
        element.classList.add('fa-pause');
    }
});
audioElement.src=songs[songIndex].filePath;
audioElement.currentTime=0;
audioElement.play();
giff.style.opacity="1";
document.getElementById("prsentSong").innerHTML=songs[songIndex].songName;

});









