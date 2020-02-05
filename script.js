
// New Line
var img = document.getElementById("myImg");

var myImages =["img/web1.jpeg","img/web2.jpeg","img/web3.jpeg","img/web4.jpeg", "img/web5.jpeg","img/web6.jpeg",
"img/web7.jpeg","img/web8.jpeg", "img/web9.jpeg","img/web10.jpeg"];

function change_image(){
     let random = Math.floor(Math.random()* myImages.length) // assigns random numbers, so images are displayed randomly
     img.src = myImages[random];

}


// The function could also be called below but not randomly
/*
var img_index = 0;

function change_image (){
img_index = ++img_index % 10,
img.src = myImages[img_index]; 

}
*/


