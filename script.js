//Create Heart
function createHeart() {
    const heart = document.createElement('span');
  
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
  
    const size = Math.random() * 20 + 30; // 30px to 50px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
  
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
  
    document.body.appendChild(heart);
  
    const randomX = (Math.random() - 0.5) * 400; // Random x-axis movement (-200 to 200px)
    const randomY = (Math.random() - 0.5) * 400; // Random y-axis movement (-200 to 200px)
    const rotation = Math.random() * 360; // Random rotation
  
    heart.style.animation = `moveAndRotate 2s ease-out`;
    heart.style.setProperty('--move-x', `${randomX}px`);
    heart.style.setProperty('--move-y', `${randomY}px`);
    heart.style.setProperty('--rotate', `${rotation}deg`);
  
    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
  
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes moveAndRotate {
      0% {
        transform: translate(0, 0) rotate(0);
        opacity: 1;
      }
      100% {
        transform: translate(var(--move-x), var(--move-y)) rotate(var(--rotate));
        opacity: 0; /* Fade out for smooth removal */
      }
    }
  
    span {
      position: absolute;
      pointer-events: none;
      filter: drop-shadow(0 0 15px rgba(80, 73, 73, 0.5));
    }
  
    span::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('heart.png') no-repeat center;
      background-size: cover;
    }
  `;
  document.head.appendChild(style);
  
  setInterval(createHeart, 300); 
  
//Reveal Message
let promptMessage = document.getElementById('promptMessage');
let overlay = document.getElementById('overlay');
let message = document.querySelector('.envelope-container');

promptMessage.addEventListener("click", function () {
    overlay.style.visibility = "visible"; 
    overlay.style.opacity = "1";

    message.style.display = "grid";
});

//Open envelope
const envelope = document.querySelector('.envelope-wrapper');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});