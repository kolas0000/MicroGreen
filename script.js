const BtnChooseGreens = document.getElementById('chooseGreens');

function checkScreenSize() {
 
  if (window.matchMedia("(max-width: 768px)").matches) {
    
BtnChooseGreens.addEventListener('click', () => {
    BtnChooseGreens.classList.add('chooseGreensActive');
    BtnChooseGreens.style.cursor = 'pointer'
    setTimeout(() => {
        BtnChooseGreens.classList.remove('chooseGreensActive');
    }, 1000);
})

  } else {
    BtnChooseGreens.addEventListener('mouseenter', () => {
    BtnChooseGreens.classList.add('chooseGreensActive');
    BtnChooseGreens.style.cursor = 'pointer'
    setTimeout(() => {
        BtnChooseGreens.classList.remove('chooseGreensActive');
    }, 1000);
})
  }
}

checkScreenSize();