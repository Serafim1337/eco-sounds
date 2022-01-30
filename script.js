(function () {
  const backgrounds = document.querySelectorAll(".background");
  let counter = 0;
  backgrounds.forEach((bg) => {
    counter++;
    let image = new Image();
    image.src = `assets/img/${counter}.jpg`;
  });
})(); //!backgrounds preload

//!------------------------- changing bg functions

const images = document.querySelectorAll(".bird-images");
images.forEach((image) => {
  image.addEventListener("click", imagesHandler);
  image.addEventListener("click", imageActivityHandler);
});

const logo = document.querySelector(".logo");
logo.addEventListener("click", imagesHandler);
logo.addEventListener("click", unableImagesActivity);

function imagesHandler(event) {
  changeBg(event);
}

function imageActivityHandler(event) {
  event.target.classList.add("active");
  images.forEach((image) => {
    if (image !== event.target) {
      image.classList.remove("active");
    }
  });
}

function changeBg(event) {
  const backgrounds = document.querySelectorAll(".background");
  const currentBgId = event.target.dataset.bg;
  const currentBg = document.querySelector(`#${currentBgId}`);
  currentBg.style.display = "block";
  backgrounds.forEach((bg) => {
    if (bg.id !== currentBgId) {
      bg.style.display = "none";
    }
  });
  if (isPaused()) {
    operateAudio();
  }
}

function unableImagesActivity() {
  images.forEach((image) => {
    image.classList.remove("active");
  });
}

//!---------------------------- play button

const btn = document.querySelector(".button");
btn.addEventListener("click", btnHandler);
btn.addEventListener("click", operateAudio);

function btnHandler(event) {
  event.target.classList.toggle("paused");
}

function isPaused() {
  return btn.classList.contains("paused") ? true : false;
}

//!----------------------------- audio functions

const audio = new Audio();
document.querySelector("#bg-1").style.display = "block";

function operateAudio() {
  let currentBgId = "";

  if (document.querySelector("#bg-1").style.display === "block") {
    currentBgId = "bg-1";
  } else {
    currentBgId = document.querySelector('[style="display: block;"]').id;
  }
  switch (currentBgId) {
    case "bg-1":
      audio.src = "assets/audio/forest.mp3";
      break;
    case "bg-2":
      audio.src = "assets/audio/drozd.mp3";
      break;
    case "bg-3":
      audio.src = "assets/audio/javoronok.mp3";
      break;
    case "bg-4":
      audio.src = "assets/audio/slavka.mp3";
      break;
    case "bg-5":
      audio.src = "assets/audio/solovey.mp3";
      break;
    case "bg-6":
      audio.src = "assets/audio/zaryanka.mp3";
      break;
  }

  switch (isPaused()) {
    case true:
      audio.volume = 0.1;
      audio.play();
      break;
    case false:
      audio.pause();
      break;
  }
}
