function setup(){
    canvas = createCanvas(650,480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,40,40,580,400);
    fill("green");
    stroke("green");
    rect(40,440,590,10);
    rect(40,40,590,10);
    rect(40,40,10,400);
    rect(610,40,10,400);
    fill("red");
    stroke("red");
    circle(40,40,60);
    circle(40,440,60);
    circle(610,40,60);
    circle(610,440,60);
}



function take_snapshot(){
    save('photo.jpeg');
}