const videoEl = document.querySelector(".video");
// console.log(videoEl);
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((output) => {
      videoEl.src = output;
      videoEl.play();
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  console.log("getUserMedia is not supported");
}
