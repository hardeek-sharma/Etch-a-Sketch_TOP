let container = document.querySelector('#container');
let sizeBtn = document.querySelector('#size-button');
let rainbowBtn = document.querySelector('#rainbow-button');
let ratio = 16;
let rainbowMode = false;
let boxes;

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256); // Random number between 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function makeGrid(ratio) {
  for (i = 0; i < ratio**2; i++) {
    container.appendChild(document.createElement('div')).classList.add('box', i);
  }
}

makeGrid(ratio);

function addGridActions() {
  boxes = document.querySelectorAll('.box');

  boxes.forEach((box) => {
    box.style.width = `${100/ratio}%`;
    box.style.height = `${100/ratio}%`;
    box.addEventListener('mouseover', (e) => {
      box.classList.add('hovered');
      if (rainbowMode == true) {
        box.style.backgroundColor = getRandomRgbColor();
      }
    });
  });
}
addGridActions();

sizeBtn.addEventListener('click', (e) => {
  let newSize = Number(prompt('Pick Size(2-100)')); 
  if (newSize >= 2 && newSize <= 100) {
    ratio = newSize;
    boxes.forEach((box) => {
      box.remove();
    });
    makeGrid(newSize);
    addGridActions();
  }
})

rainbowBtn.addEventListener('click', (e) =>{
  if (e.target.classList.contains('clicked')) {
    return;
  }
  e.target.classList.add('clicked');
  boxes.forEach((box) => {
    box.style.backgroundColor = 'white';
  })
  rainbowMode = true;
  addGridActions();
});
