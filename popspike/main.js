var spike = document.getElementById("spike");
var audio = new Audio('./asset/pop.mp3');
var scoreboard = document.getElementById('scoreboard');

if(Cookies.get('score') == 'NaN'){
    var score = 0;
    Cookies.set('score',0);
}
else{
    var score = Cookies.get('score');
    scoreboard.innerHTML = score;
}

function removecookie(){
    Cookies.set('score',0);
    console.log('removed');
    location.reload();
}

// mouseclick event
spike.addEventListener("mousedown", function(){
    spike.src = './asset/2.png';
    audio.play();
});

spike.addEventListener("mouseup", function(){
    spike.src = './asset/1.png';
    increaseScore();
});

// touch event
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
