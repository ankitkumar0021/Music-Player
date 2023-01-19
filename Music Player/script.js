let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let artist = document.querySelector('#artist');
let slider = document.querySelector('#duration_slider');
let track_image = document.querySelector('#track_image');

let timer;
let autoplay=1;

let index_no = 0;
let playing_song = false;



let track = document.createElement('audio');

let all_song = [
    { 
        name : "Hanuman Chalisa",
        path : "music/hanumanchalisa.mp3",
        img : "img/first.jpg",
        artist: "Ankit Kumar"
    },
    {
        name : "Hanuman chalisa",
        path : "music/hanuman chalisa.mp3",
        img : "img/download.jpg",
        artist: "Gulashan Kumar"
    },
    {
        name : "Ram Siya Ram",
        path : "music/Ram Siya Ram Lyrics  Slowed  Reverb Lofi Remix.mp3",
        img : "img/second.jpg",
        artist: "Ankit Kumar"
    }
];

function load_track(index_no){
    clearInterval(timer);
    reset_slider();

    track.src = all_song[index_no].path;
    title.innerHTML = all_song[index_no].name;
    track_image.src = all_song[index_no].img;
    artist.innerHTML = all_song[index_no].artist;

    timer = setInterval(range_slider ,1000);
    total.innerHTML = all_song.length;
    present.innerHTML = index_no + 1;

}

load_track(index_no);

function justplay(){
    if(playing_song==false){
        playsong();
    }
    else{
        pausesong();
    }
}

function reset_slider(){
    slider.value = 0;
}

function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>'
}

function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>'
}

function next_song(){
    if(index_no<all_song.length-1){
        index_no+=1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

function previous_song(){
    if(index_no > 0){
        index_no-=1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = all_song.length;
        load_track(index_no);
        playsong();
    }
}

function change_duration(){
    slider_position = track.duration * (slider.value/100);
    track.currentTime = slider_position;
}

