function showHide() {
    var x = document.getElementById("canvasHTML");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

const startTime = new Date();
const endTime = new Date();

const elapsedTime = endTime - startTime;

const elapsedSeconds = elapsedTime / 1000;
const elapsedMinutes = elapsedSeconds / 60;
const elapsedHours = elapsedMinutes / 60;

let timeSpent = document.querySelector('#stopwatch');
let pageTitle = document.querySelector("title");
let sec = 

timeSpent.innerHTML = `spent on ${pageTitle}`;

// document.getElementById('saveButton').addEventListener("click", function(e) {
//     var canvas = document.querySelector('#canvasHTML');
//     var dataURL = canvas.toDataURL("image/jpeg", 1.0);
//     downloadImage(dataURL, 'my-canvas.jpeg');
// });

// function downloadImage(data, filename = 'untitled.jpeg') {
//     var a = document.createElement('a');
//     a.href = data;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
// }