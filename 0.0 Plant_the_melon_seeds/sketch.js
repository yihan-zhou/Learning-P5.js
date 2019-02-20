var melonCenterX = window.innerWidth/2;
var melonCenterY = window.innerHeight/3;
var pulp = 300;
var skin = 350;
var red;



function setup() {
  background(255, 255, 255);
  createCanvas(window.innerWidth, window.innerHeight);
  
  

  fill(255, 255, 255);
  stroke(0);
  line(melonCenterX-skin/2,melonCenterY-1,melonCenterX+skin/2,melonCenterY-1);
  arc(melonCenterX, melonCenterY, skin, skin, 0, PI);

  red = 250;
  fill(red, 0, 0,70);
  stroke(0);
  arc(melonCenterX, melonCenterY, pulp, pulp, 0, PI);
}

function draw() {}

function mousePressed() {

  var allowedMouseXL = melonCenterX - pulp / 2;
  var melonR = pulp / 2
  var yOnCircle = sqrt(abs(sq(mouseX - melonCenterX) - sq(melonR))) + melonCenterY;


  if ((mouseX > allowedMouseXL + 5 && mouseX <= melonCenterX + pulp / 2 - 5) && (mouseY > melonCenterY + 10 && mouseY < yOnCircle - 10)) {
    fill(0, 0, 0);
    stroke(255);
    strokeWeight(2);
    shape();
  } else {
    fill(244, 188, 188);
    stroke(0);
    strokeWeight(0.5);
    shape();
  }

  function shape() {
    beginShape();
    for (var a = 0; a < TWO_PI; a += 0.05) {
      var r = 10;
      var x = mouseX + r * pow(cos(a), 3);
      var y = mouseY + r * sin(a);
      vertex(x, y);
    }
    endShape();
  }
}