let circles = document.querySelectorAll('.circle');
const coords = {x: 0, y: 0};

const color = [
  '#ffff00',
  '#ffe600',
  '#ffc400',
  '#ff9900',
  '#ff7b00',
  '#ff5100',
  '#ff0800',
  '#e00053',
  '#c0006a',
  '#920066',
  '#520044',
  '#200019',
  '#200019',
  '#520044',
  '#920066',
  '#c0006a',
  '#e00053',
  '#ff0800',
  '#ff5100',
  '#ff7b00',
  '#ff9900',
  '#ffc400',
  '#ffe600',
  '#ffff00',
]

circles.forEach(function(circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = color[index];
})
document.addEventListener("mousemove", function(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
})

function animateCircle() {
  let x = coords.x;
  let y = coords.y;
  circles.forEach(function(circle, index) {
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.x = x;
    circle.y = y;
    circle.style.scale = (circles.length - index) / circles.length;
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  })
  requestAnimationFrame(animateCircle);
}

animateCircle();

document.addEventListener("doubleclick", function(){
  alert("Welcome!!")
})