function preLoad(){

}

function setup(){
    canvas = createCanvas(420,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color ="";
}

function draw(){
    image(video,0,0,420,480);
    tint(tint_color);
}

function take_snapshot(){
    save('photo.png');
}

function change_tint(){
    tint_color = document.getElementById("tint_name").value;
}