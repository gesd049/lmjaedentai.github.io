var spike = document.getElementById("spike");
var audio = new Audio('./asset/pop.mp3');
var scoreboard = document.getElementById('scoreboard');

var score = Cookies.get('score');
scoreboard.innerHTML = score;

if(scoreboard.innerHTML == 'NaN' || scoreboard.innerHTML == 'undefined'){ //if no cookie
    Cookies.set('score',0);
    location.reload();
}

// mouseclick & touchscreen event
spike.addEventListener("mousedown", function(){
    spike.src = './asset/2.png';
    audio.play();
});
spike.addEventListener("mouseup", function(){
    spike.src = './asset/1.png';
    increaseScore();
});
spike.addEventListener("touchstart", function(){
    spike.src = './asset/2.png';
    audio.play();
});
spike.addEventListener("touchmove", function(){
    spike.src = './asset/1.png';
    increaseScore();
});

function increaseScore(){
    score++;
    scoreboard.innerHTML = score;
    Cookies.set('score', score);
}
