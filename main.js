song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
    console.log("posenet is inisialized");
}
function gotPoses(results){
if(results.length >0){
leftwristX=results[0].pose.leftWrist.x;
leftwristY=results[0].pose.leftWrist.y;
console.log("leftWristX="+leftWristX+"leftWristY"+leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
}

}
function draw()
{
        image(video,0,0,600,500);
    }
    function play(){
     song.play();   
     song.setVolume(1);
     song.rate(1);
    }