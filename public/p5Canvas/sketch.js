const canvasXLength = 750;
const canvasYLength = 750;
let mySnake; // Declare a variable to hold the Snake instance
let pressedKeys = {};
const parentDivName = "Game"
const parentElement = document.getElementById(parentDivName)
const fr = 10
let gameStarted = false
 function preSetup() {
//   var x = document.getElementById().parentNode.nodeName;
  canvasXLength = windowHeight
 }
function setup() {
  const myCanvas = createCanvas(canvasXLength, canvasYLength);
  myCanvas.parent(parentDivName)
  background(50, 190, 50);
  frameRate(fr);

  mySnake = new Snake(canvasXLength, canvasYLength);
}

function draw() {
  // Call the Snake's draw method
  grass(canvasXLength, canvasYLength);
  mySnake.draw();
  textSize(50);
  text("width: " + parentElement.offsetWidth + " height: " + parentElement.offsetHeight, 50, 50);
  text("width: " + canvasXLength + " height: " + canvasYLength, 50, 120);
  wait(300)
}

function keyPressed() {
  pressedKeys[key] = true;
}
function keyReleased() {
  delete pressedKeys[key];
}
function wait(time)
{
  start = millis()
  do
  {
    current = millis();
  }
  while(current < start + time)
}