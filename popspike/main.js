var img = document.getElementById("spike");
var audio = new Audio('pop.mp3');
// mouseclick event
img.addEventListener("mousedown", function(){
    img.src = '2.png';
    audio.play();
});

img.addEventListener("mouseup", function(){
    img.src = '1.png';
});
// touch event
img.addEventListener("touchstart", function(){
    img.src = '2.png';
    audio.play();
});

img.addEventListener("touchmove", function(){
    img.src = '1.png';
});
