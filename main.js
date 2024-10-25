// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables

let myArray = [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];

for (i = 0; i < 50; i++) {
  myArray.splice(0, 0, 400);
  myArray.splice(0, 0, 200);
}

console.log(myArray);

// Random Functions

function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}

function randomInt(low, high) {
  return Math.floor(randomDec(low, high));
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// Key Events
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
  console.log(event.code);

  //   let middleIndex = Math.floor(myArray.length / 2);

  // if (event.code == "ArrowRight") {
  //   myArray.splice(middleIndex, 0, Math.random() * 600);
  // } else if (event.code == "ArrowLeft") {
  //   myArray.splice(middleIndex, 1);
  // } else
  if (event.code == "Space") {
    for (i = 0; i < myArray.length; i++) {
      myArray[i] += randomInt(-5, 5);
      if (myArray[i] <= 0) {
        myArray[i] = 0;
      }
      console.log(myArray);
    }
  } else if (event.code == "KeyR") {
    myArray = [];
    for (i = 0; i < 100; i++) {
      myArray.unshift(300);
    }
  } else if (event.code == "Digit1") {
    for (i = myArray.length - 1; i >= 0; i--) {
      if (myArray[i] == 400) {
        myArray.splice(i, 1);
      }
    }
  } else if (event.code == "Digit2") {
    for (i = myArray.length - 1; i >= 0; i--) {
      if (myArray[i] == 200) {
        myArray.splice(i, 1);
      }
    }
  }
}
