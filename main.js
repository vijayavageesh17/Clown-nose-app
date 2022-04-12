nose_X=0;
nose_Y=0;

function preload(){
clownNose= loadImage("https://i.postimg.cc/3rLrNLP5/clown-nose.jpg");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);

}

function modelLoaded(){
console.log("PoseNet is initiailized");
}

function gotPoses(results){
    if(results.length>0){
       console.log(results);
       nose_X=results[0].pose.nose.x-5;
       nose_Y=results[0].pose.nose.y-5;
       console.log("Nose X = " + results[0].pose.nose.x);
       console.log("Nose Y = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clownNose,nose_X,nose_Y,30,30);
    }

function take_snapshot(){
    save('My Filter Image');
}