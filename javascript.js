let container = document.querySelector('#container');
let ratio = 16;

for (i = 0; i < ratio**2; i++) {
  container.appendChild(document.createElement('div')).classList.add('box');
}
let boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.style.width = `${100/ratio}%`;
  box.style.height = `${100/ratio}%`;
  box.addEventListener('mouseover', (e) => {
    box.classList.add('hovered');
  })
})
