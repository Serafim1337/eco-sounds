const images = document.querySelectorAll('.bird-images')
images.forEach((image) => {
  image.addEventListener('click', imagesHandler);
})

const logo = document.querySelector('.logo');
logo.addEventListener('click', imagesHandler);

function imagesHandler (event) {
changeBg(event);
}

function changeBg (event) {
const backgrounds = document.querySelectorAll('.background'); 
const currentBgId = event.target.dataset.bg;
const currentBg = document.querySelector(`#${currentBgId}`);
currentBg.style.display = 'block';
backgrounds.forEach((bg) => {
  if(bg.id !== currentBgId) {
    bg.style.display = 'none';
  }
})
}



