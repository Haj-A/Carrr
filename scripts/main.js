// JavaScript source code
// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.color-button');
  const car = document.querySelector('#car');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const color = button.getAttribute('data-color');
      changeCarColor(car, color);
    });
  });
});

function changeCarColor(carEntity, color) {
  carEntity.getObject3D('mesh').traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color);
    }
  });
}
