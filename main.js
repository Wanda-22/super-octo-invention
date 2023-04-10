x="";
status1="";
Obj=[];

function preload() {
    x=loadImage("dog_cat.jpg");
}
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    po=ml5.objectDetector('cocossd',op);
    document.getElementById('status').innerHTML="Status - Detecting Objects";
}

function op() {
    console.log("activeted");
    status1=true;
    po.detect(x,yu);
}

function yu(error,result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
    Obj=result;
}

function draw() {
    image(x,0,0,600,500);
    if (status1!="") {
    for (var i = 0; i < Obj.length; i++) {
    document.getElementById('status').innerHTML="Status -  Objects Detected";
    fill("#B22222");
    noFill();
    stroke("#B22222");
    textSize(20);
    p=floor(Obj[i].confidence*100);
    text(Obj[i].label + " " + p + "%", Obj[i].x + 10, Obj[i].y + 20);
    rect(Obj[i].x, Obj[i].y,Obj[i].width, Obj[i].height);
    }
}
}