const songObj = [
    {
        songLink: "/music/track1.mp3",
        poster: "/images/J&GLogo.png",
        title: "I'm On My Way"
    },
]

/////

var songs = ["/music/track1.mp3", "/music/track2.mp3", "/music/track3.mp3", "/music/track4.mp3", "/music/track5.mp3", "/music/track6.mp3", "/music/track7.mp3"];
var poster = ["/images/J&GLogo.png", "/images/J&GLogo.png", "/images/J&GLogo.png", "/images/J&GLogo.png", "/images/J&GLogo.png", "/images/J&GLogo.png", "/images/J&GLogo.png"];
var titles = ["I'm On My Way", "Rolling In The Deep", "Mad World", "Too Close", "Feelin' Good", "I Will Wait", "All These Things That I've Done"];

var song = new Audio();
var currentSong = 0;


//Selectors
var playBtn = document.querySelector('#play');
var nextBtn = document.querySelector('#next');
var preBtn = document.querySelector('#pre');
var fillBar = document.getElementById("fill");
var songTitle = document.getElementById("songTitle");





//Run on load - easier to assign one at start instead of dynamically doing it
(function () {
    song.src = songs[0];
    updatePoster(poster[0])
    updateTitle(titles[0])

    // songTitle.textContent = songs[currentSong];

})();



function playSong() {
    $("#play img").attr("src", "/images/pause.png");
    song.play();
}

function pauseSong() {
    song.pause();
    $("#play img").attr("src", "/images/play.png");
}


function changeSong() {
    song.src = songs[currentSong];
}


function playOrPauseSong() {
    if (song.paused) {
        playSong();
    }
    else {
        pauseSong();
    }
}

playBtn.addEventListener('click', function () {
    playOrPauseSong();
});

nextBtn.addEventListener('click', function () {
    next();
})
preBtn.addEventListener('click', function () {
    pre();
})

function next() {
    console.log('next')
    currentSong++;
    if (currentSong > 6) {
        currentSong = 0;
    }
    changeSong();
    playSong();
    updatePoster(poster[currentSong])
    updateTitle(titles[currentSong])
}

function pre() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = 6;
    }
    changeSong();
    playSong();
    updatePoster(poster[currentSong])
    updateTitle(titles[currentSong])
}

function updatePoster(newPoster) {
    $("#image img").attr("src", newPoster);
    $("#bg img").attr("src", newPoster);
}

function updateTitle(songTitleValue){
    console.log('run')
    songTitle.innerHTML = songTitleValue;
}

song.addEventListener('ended', function(){
    nextSong();
});

song.addEventListener('timeupdate', function () {

    var position = song.currentTime / song.duration;

    fillBar.style.width = position * 100 + '%';
});
