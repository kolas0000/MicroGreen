const BtnChooseGreens = document.getElementById('chooseGreens');
const HAShover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

 
  if (HAShover != true) {
    
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


 