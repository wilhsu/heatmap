class CursorHeatmap {
    constructor() {
      this.prevX = null;
      this.prevY = null;
    //   this.circleTimer = null;
    //   this.circleElement = null;
    //   this.isHeatmapVisible = true;
    }
  
    handleMouseMove(event) {  
      const { clientX: x, clientY: y } = event;

      if (x !== this.prevX || y !== this.prevY) {
        this.createCircle(x, y);
        this.prevX = x;
        this.prevY = y;
      }
    }

  
    createCircle(x, y) {
      if (this.circleTimer) {
        clearInterval(this.circleTimer);
        this.circleElement = null;
      }
  
      let myCanvas = document.getElementById('map-canvas');
  
      const circle = document.createElement("div");
      circle.className = "circle";
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.width = "10px";
      circle.style.height = "10px";
      myCanvas.appendChild(circle);
  
      this.circleElement = circle;
  
      let size = 10;
      this.circleTimer = setInterval(() => {
        size += 2;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${x - size / 2}px`;
        circle.style.top = `${y - size / 2}px`;
      }, 100);
    }
  }
  
  // function showHide() {
  //   var canvasVis = document.getElementById("map-canvas");
  //   if (canvasVis.style.display === "none") {
  //     canvasVis.style.display = "block";
  //   } else {
  //     canvasVis.style.display = "none";
  //   }
  // }
  
  
  new CursorHeatmap();