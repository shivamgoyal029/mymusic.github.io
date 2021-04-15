var divlenght = document.querySelectorAll('.song').length;
console.log(divlenght);

for(var i=0; i<divlenght; i++) {
 var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);

 var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
}

var song1 = new Audio();
song1.src = "Birthday(PaglaSongs).mp3";

var song2 = new Audio();
song2.src = "Coz I Miss You(PaglaSongs).mp3";

var song3 = new Audio();
song3.src = "Raat(PaglaSongs).mp3";

var song4 = new Audio();
song4.src = "Raat(PaglaSongs).mp3";

var song5 = new Audio();
song5.src = "Birthday(PaglaSongs).mp3";

var song6 = new Audio();
song6.src = "Coz I Miss You(PaglaSongs).mp3";

var song7 = new Audio();
song7.src = "Raat(PaglaSongs).mp3";

var song8 = new Audio();
song8.src = "Raat(PaglaSongs).mp3";

var song9 = new Audio();
song9.src = "Raat(PaglaSongs).mp3";


function playsong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "a":
   song1.play();
   break;

  case "b":
   song2.play();
   break;

  case "c":
   song3.play();
   break;

  case "d":
   song1.play();
   break;

  case "e":
   song2.play();
   break;

  case "f":
   song3.play();
   break;

  case "g":
   song1.play();
   break;

  case "h":
   song2.play();
   break;

  case "i":
   song3.play();
   break;

  default:
   console.log("wrong input");
   break;
 }
}

function pausesong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "a":
   song1.pause();
   break;

  case "b":
   song2.pause();
   break;

  case "c":
   song3.pause();
   break;

  case "d":
   song1.pause();
   break;

  case "e":
   song2.pause();
   break;

  case "f":
   song3.pause();
   break;

  case "g":
   song1.pause();
   break;

  case "h":
   song2.pause();
   break;

  case "i":
   song3.pause();
   break;

  default:
   console.log("wrong input");
   break;
 }
}
