let shouldContinueDrawing = false;

class circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  drawCircleOnCanvas1() {
    const canvas1 = document.getElementById("myCanvas1");
    const context1 = canvas1.getContext("2d");
    canvas1.width = 400;
    canvas1.height = 450;
    canvas1.style = "border:2px solid #d3d3d3";

    context1.beginPath();
    context1.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      this.fillColor
    );

    context1.stroke();
    context1.fillStyle = this.fillColor;
    context1.fill();
  }

  drawCircleOnCanvas2() {
    const canvas1 = document.getElementById("myCanvas1");
    const context1 = canvas1.getContext("2d");
    

    context1.beginPath();
    context1.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      this.fillColor
    );

    context1.stroke();
    context1.fillStyle = this.fillColor;
    context1.fill();
  }

  drawCircle() {
    const canvas1 = document.getElementById("myCanvas1");
    
     canvas1.width = 400;
    canvas1.height = 450;
    canvas1.style = "border:2px solid #d3d3d3"; 
    const maxRadius = 30;
    const minRadius = 4;
    const colors = [
      "aqua",
      "black",
      "blue",
      "fuchsia",
      "green",
      "cyan",
      "lime",
      "maroon",
      "navy",
      "olive",
      "purple",
      "red",
      "silver",
      "teal",
      "yellow",
      "azure",
      "gold",
      "bisque",
      "pink",
      "orange",
    ];
    const numColors = colors.length;
    
  
    setInterval(()=>{
      if (shouldContinueDrawing) {
        const x = Math.random() * canvas1.width;
        const y = Math.random() * canvas1.height;
        const radius = minRadius + Math.random() * (maxRadius - minRadius);
        let colorIndex = Math.random() * (numColors - 1);
        colorIndex = Math.round(colorIndex);
        const color = colors[colorIndex];
 
        const circle1 = new circle(x, y, radius, 0, Math.PI * 2, color);
       circle1.drawCircleOnCanvas2();
      }
    },1000)

  
  }  
}

 

const circle1 = new circle(85, 80, 40, 0, Math.PI * 2, "red");
circle1.drawCircleOnCanvas1();

circle1.drawCircle();

function stopDrawingCircles() {
  shouldContinueDrawing = false;
}

function startDrawingCircles() {
  shouldContinueDrawing = true;
}

  