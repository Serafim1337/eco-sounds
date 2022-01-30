(function () {
  const backgrounds = document.querySelectorAll('.background');
  let counter = 0; 
  backgrounds.forEach((bg) => {
    counter++;
    let image = new Image();
    image.src = `assets/img/${counter}.jpg`
  })
})(); //!backgrounds preload

const images = document.querySelectorAll('.bird-images')
images.forEach((image) => {
  image.addEventListener('click', imagesHandler);
  image.addEventListener('click', imageActivityHandler);
})

const logo = document.querySelector('.logo');
logo.addEventListener('click', imagesHandler);
logo.addEventListener('click', unableImagesActivity)

function imagesHandler (event) {
changeBg(event);
}

function imageActivityHandler(event) {
  event.target.classList.add('active');
  images.forEach((image) => {
    if(image !== event.target) {
      image.classList.remove('active');
    }
  })
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

function unableImagesActivity() {
  images.forEach((image) => {
      image.classList.remove('active');
  })
}

//!----play button
// (function() {
//   var btn = document.querySelector(".button");
//   btn.click(function() {
//     btn.toggleClass("paused");
//     return false;
//   });
// })(); 

const btn = document.querySelector(".button");
btn.addEventListener('click', btnHandler);

function btnHandler (event) {
  event.target.classList.toggle('paused')
}


