let x = 0;
let y = 0;
let spacing = 10;
var height;
var width;
var lines = [];
var backgroundY = 0;
var foregroundVideo;
var backgroundVideo;
var frame;

function setup() {
  createCanvas(1200, 1000);
  backgroundVideo = createVideo(['./assets/11.mp4']);
  foregroundVideo = createVideo(['./assets/5.mp4']);
  foregroundVideo.hide(); 
  backgroundVideo.hide();
  foregroundVideo.loop();
  backgroundVideo.loop();
  graphic = createGraphics(1200, 1000);
  height = displayHeight;
  width = displayWidth;
  graphic.stroke('rgba(0,255,0, 1)');
  frame = createGraphics(1200,1000);

}
function drawLine(lineData) {
  graphic.line(lineData.x,lineData.y,lineData.width,lineData.height);

}
// create new graphic instance, draw a video to graphic, call image on that graphic,

function draw() {
  // clear();
  // fill(0, 102, 153);
  noStroke();

  // rect(0,backgroundY, width, height);
  // frame.image(Video);
  // frame.blend;
  // image(frame);
  

  var lineData;
  if (random(1) < 0.3) {
    // line(x, y, x + spacing, y + spacing);
      lineData = {
        x: x,
        y: y,
        width: x + spacing,
        height:  y + spacing
    }
  } else {
    // line(x, y + spacing, x + spacing, y);
      lineData = {
        x: x,
        y: y + spacing,
        width: x + spacing,
        height:  y 
    }
  }

  lines.push(lineData);
  for  (var i = 0; i < lines.length; i++){
    drawLine(lines[i]);
    // var currentLine = lines[i];
    // line(currentLine.x,currentLine.y,currentLine.width,currentLine.height);

  }
  frame.image(foregroundVideo.get(), 0, 0);
  // frame.mask(graphic);
  graphic.blend(frame.get(), 0, 0, width, height, 0, 0, width, height, DARKEST);
  // image(frame, 0, 0);
  image(foregroundVideo.get(0,0, 100, 100),0,0);
  image(backgroundVideo, 10, 10);
  image(graphic, 0, 0);

  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
    height = height - spacing;
    backgroundY = y;
  }

}