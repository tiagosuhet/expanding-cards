const panels = document.querySelectorAll('.panel');
const loneDiv = document.querySelector('.loneDiv');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
    panel.style.border = '6px solid #333';
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
    panel.style.border = '0';
  });
}
