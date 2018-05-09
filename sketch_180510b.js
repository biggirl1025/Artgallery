var img;

var i=154;
var j=205;
var k=50;
 
function preload(){
   img=loadImage("rene.jpg");
}

function setup(){
   createCanvas(1000,500);
   background(219,168,108);
   image(img,500,0);
}

function draw(){
 
  noStroke();
  fill(68,131,85);
  rect(100,255,300,350,30);
  triangle(125,255,250,175,375,255);
  
  fill(255);
  triangle(220,180,280,180,250,350);
  
  fill(209,137,55);
  ellipse(250,120,100,150);
  rect(220,180,60,20,3,3,100,100);
  ellipse(250,195,50,20);
    
  fill(0);
  rect(200,20,100,80,50,50,3,3);
  
  stroke(0);
  strokeWeight(15);
  strokeCap(ROUND);
  line(180,93,320,93);
  
  noStroke();
  fill(i,j,k);
  ellipse(250,140,60,60);
  
  strokeWeight(1.5);
  stroke(128,128,0);
  line(255,120,265,80);
  
  stroke(0);
  noFill();
  stroke(128,128,0);
  arc(255,115,30,30,QUARTER_PI,PI);  
}

function keyPressed(){
    if(keyCode==RIGHT_ARROW){
      i=0;
      j=255;
      k=0;
    }
    if(keyCode==LEFT_ARROW){
      i=34;
      j=139;
      k=34;
    }
    if(keyCode==UP_ARROW){
      i=255;
      j=0;
      k=0;
  }   
}
