let container = document.querySelector('#container');
let sizeBtn = document.querySelector('#size-button');
let ratio = 16;
let boxes;

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
    })
  });
}
addGridActions();

sizeBtn.addEventListener('click', (e) => {
  let newSize = Number(prompt('Pick Size(2-100)')); 
  if (newSize >= 2 && newSize <= 100) {
    ratio = newSize;
    boxes.forEach((box) => {
      box.remove();
    })

    makeGrid(newSize);
    addGridActions();
  }
})
