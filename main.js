song = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log("posenet is inisialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scorerightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+scoreLleftWris+"scoreLeftWrist="+scoreLeftWrist);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("leftWristX=" + leftWristX + "leftWristY" + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);
    }

}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreRightWrist)
    circle(rightWristX,rightWristY,20)
    if(righhtWrist >0 &&rightwristY <=100)
    {
        document.getElementById("speed").innerHtml="speed=0.5x"
        song.rate(0.5);
    }
    else if(rightWristY>100&&rightWristY<=200)
if(scoreLeftwrist>0.2)
{
    document.getElementById("speed").innerHtml="speed=1x";
song.rate(1);
}
else if(rightwristY>200&&rightwristY<=300)
{
    document.getElementById("speed").innerHtml="speed=1.5x";
song.rate(1.5);
}
else if(rightwristY>300&&rightWristY<=400)
{
    document.getElementById("speed").innerHtml="speed=2x";
song.rate(2);
}
else if(rightWristY>400&&rightWristY<=500)
{
    document.getElementById("speed").innerHtml="speed=2x";
song.rate(2);
}
if(scoreLeftWrist>0.2)
{
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    leftWristY_divide_1000 = remove_decimals / 1000;
    volume = leftWristY_divide_1000 * 2;
    document.getElementById("volume").innerHtml = "volume=" + volume;
    song.setVolume(volume);
}
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}