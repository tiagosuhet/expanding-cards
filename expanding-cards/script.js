const panels = document.querySelectorAll('.panel');

const loneDiv = document.querySelector('.loneDiv');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
    panel.style.border = '6px solid #333';

    // const h3El = [...document.getElementsByTagName('h3')];
    // console.log(h3El.map((x, i) => `${x.innerHTML} ${[i + 1]}`));
    // console.log(document.querySelector('.active').textContent);
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
    panel.style.border = '0';
  });
}

console.log(loneDiv.innerHTML);
