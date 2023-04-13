/* const videoEl = document.querySelector(".video");
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
 */

// canvas
/* const canvas = document.querySelector(".my-canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");
const particles = [];

const numOfParticle = 1000;
for (let i = 0; i < numOfParticle; i++) {
  const particle = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 5,
    color: `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(
      Math.random() * 255 + 1
    )}, ${Math.floor(Math.random() * 255 + 1)})`,
    velocity: {
      x: Math.random() * 7 - 3,
      y: Math.random() * 7 - 3,
    },
  };

  particles.push(particle);
}

function drawParticle(particle) {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  ctx.fillStyle = particle.color;
  ctx.fill();
  ctx.closePath();
}

function updateParticle(particle) {
  particle.x += particle.velocity.x;
  particle.y += particle.velocity.y;

  if (
    particle.x + particle.radius > canvas.width ||
    particle.x - particle.radius < 0
  ) {
    particle.velocity.x = -particle.velocity.x;
  }
  if (
    particle.y + particle.radius > canvas.height ||
    particle.y - particle.radius < 0
  ) {
    particle.velocity.y = -particle.velocity.y;
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    updateParticle(particle);
    drawParticle(particle);
  });
}

animate(); */
