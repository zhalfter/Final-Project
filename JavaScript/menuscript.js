const canvas = document.getElementById('menu');
const context = canvas.getContext('2d');
const image = document.querySelector('img');

let width;
let height;

let pxScale = window.devicePixelRatio;

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.style.width = width + 'px';
  canvas.style.height = (height+100) + 'px';

  canvas.width = width * pxScale;
  canvas.height = height * pxScale;

  context.scale(pxScale, pxScale);

  draw();
}

function draw() {
  context.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
}


window.addEventListener('load', setup);


//window.addEventListener('resize', setup);