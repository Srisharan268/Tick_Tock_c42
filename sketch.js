var hr,minu,sec;
var hrAngle,minAngle,secAngle;
var minH,secH,hrH;
var img,bg;
var hrn,minn;

function preload() { 
  minH = loadImage("minHand.png");
  secH = loadImage("secHand.png");
  hrH = loadImage("hourHand.png");
  img = loadImage("background.png");
  bg = loadImage("bg.jpg")
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(bg)
  if(hour()>12){
    hr = hour()%12;
  }else{
    hr = hour();
  }

  minu = minute();
  sec = second();
  
  push();

  angleMode(DEGREES);

  secAngle = map(sec,0,60,0,360);
  minAngle = map(minu,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);
  
  hrn = hrAngle+map(minu,0,60,0,30);
  minn = minAngle+map(sec,0,60,0,6);

  translate(250,250);
  imageMode(CENTER);

  image(img,0,0,350,350);

  push();
  rotate(secAngle);
  image(secH,0,0);
  pop();
  
  push();
  rotate(minn);
  image(minH,0,0);
  pop();

  push();
  rotate(hrn);
  image(hrH,0,0);
  pop();

  stroke("#D4B090");
  strokeWeight(10);
  noFill();
  arc(0,0,400,400,270,secAngle-90);

  stroke("#8F6F59");
  strokeWeight(10);
  noFill();
  arc(0,0,375,375,270,minAngle-90);

  stroke("#44100A");
  strokeWeight(10);
  noFill();
  arc(0,0,350,350,270,hrAngle-90);

  pop();

  console.log(hr+":"+minu+":"+sec) 
  drawSprites()
}
