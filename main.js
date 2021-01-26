noseX=0
noseY=0;
leftwristx=0;
rightwristx=0;
difference=0;




function preload(){

}

function setup(){
canvas=createCanvas(550,550);
canvas.position(750,150);
video=createCapture(VIDEO);
video.size(550,550);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotposes)

}

function gotposes(results){
if(results.length > 0);
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    difference=leftwristx-rightwristx;

}
}

function modelLoaded(){
    console.log("Yay! I learned how to load a model without anyones help!");
}

function draw(){
background('#F1F7A5');
fill('#A160FF');
stroke('#A160FF');
text("Shriya",noseX,noseY);
textSize(difference);
document.getElementById("side").innerHTML="Font Size= "+ floor(difference)+"px"

}

