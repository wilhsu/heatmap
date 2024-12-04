let timePassed = 0;
let a = [0,0,0,0,true, true]
let milliseconds = a[0];
let seconds = a[1];
let minutes = a[2];
let hrs = a[3];
let mouseAct = a[4];
let resetTime = 0;
let starter = a[5];
let timeInt;
let intRadio;

let morningR = [255, 150, 252];
let morningG = [251, 255, 93, 151];
let morningB = [0, 90, 255, 107];

let timeNow = new Date().getHours();

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("canvasHTML");
  // colorMode(HSB, 360, 100, 100, 100);
  // colorMode(HSB, 100);
  // blendMode(MULTIPLY);

  colorMode(RGB, 255, 255, 255, 1);
  
  button = select("#save-image");
  button.mousePressed(saveJPG);

  intRadio = createRadio();
  intRadio.parent('#timeInt');
  
  intRadio.option('s', '1s'); //value, label
  intRadio.option('m', '1m');
  intRadio.option('h', '1h');

  intRadio.selected('minutes');

  console.log(timeNow);



  background(225, 0, 0, 0);
}

function draw() {

  if (mouseAct) {

    if(intRadio.value() === "s"){
      timePassed = seconds;
    } else if (intRadio.value() === "m"){
      timePassed = minutes;
    } else if (intRadio.value() === "h"){
      timePassed = hrs;
    }
    // timePassed = seconds;
    // let gradientOpacity = map(timePassed, 0, 60, .5, 0.1); 
    let gradientOpacity = .1;

    fillGradient('radial', {
      // from : [mouseX, mouseY, 0],
      // to : [mouseX, mouseY, timePassed*10],
      from : [mouseX, mouseY, 0],
      to : [mouseX, mouseY, timePassed*10],
      steps : [

          // color("hsba(40, 100%, 100%, 0.5)"),
          // color("hsba(300, 100%, 100%, 0.2)"),
          // color("hsba(60, 100%, 100%, .1)"),

          // color(255, 255, 0, .1),
          // color(200, 100, 164, .1),
          // color(255, 255, 0, .1),
          // color(0, 255, 0, .1)

          // color(100, 100, 100, 10),
          // color(20, 100, 100, 80),
          // color(30, 100, 100, 100),
          // color(40, 100, 100, 50),

          color(255, 255, 0, gradientOpacity),
          color(200, 100, 164, gradientOpacity),
          color(255, 255, 0, gradientOpacity),
          color(0, 255, 0, gradientOpacity)

          
          // color(random(morningR), random(morningG), random(morningB), 1),
          // color(random(morningR), random(morningG), random(morningB), 1),
          // color(random(morningR), random(morningG), random(morningB), 1),
          // color(random(morningR), random(morningG), random(morningB), 0.1)
      ]
    });
    noStroke();
    // stroke(0);
    // strokeWeight(1);
    ellipse(mouseX, mouseY, timePassed*10);
    // ellipse(mouseX, mouseY, map(timePassed, 0, 60, 20, 200));
    
    if (int(millis() / 100) % 10 != milliseconds) {
      milliseconds++;
    }
    if (milliseconds >= 10) {
      milliseconds -= 10;
      seconds++;
    }
    if (seconds >= 60) {
      seconds -= 60;
      minutes++;
    }
  }

  timeDisplay = select('#stopwatch');
  timeDisplay.html(`${hrs} h ${minutes} m ${seconds} s spent @ x:${mouseX} y:${mouseY}`);

}

// function mouseClicked() {
//   fill('red');
//   text(`${hrs} hours ${minutes} minutes ${seconds} seconds spent here`, windowWidth/2, windowHeight/2);
// }

function mouseMoved(){
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hrs = 0;
}

function saveJPG(){
  console.log("saving")
  save();
  console.log("saved...?") 
}

// Stopwatch p5.js demo by MSingh10 https://editor.p5js.org/MSingh10/sketches/JyeMsf9Wk

function showHide() {
  var x = document.getElementById("canvasHTML");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// to do:
// + ability to change interval of ellipse placing based on time/slider value
// - integrate interface to chrome extension
// - fix show/hide display properties
// - link colors with time API
// - randomizing colors