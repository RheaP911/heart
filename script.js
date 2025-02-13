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
    overLay.style.display = "block";

    message.style.display = "grid";
});

//Open envelope
let messageLetter = document.querySelector('.envelope-container');
let envelopeWrapper = document.querySelector('.envelope-wrapper');
let exitBtn = document.querySelector(".exit-btn");

messageLetter.addEventListener('animationend', () => {
  setTimeout (() => {
    envelopeWrapper.classList.add('flap');
    
  }, 1000);
});

// Reveal exit button

envelopeWrapper.addEventListener('animationend', () => {
  setTimeout (() => {
    exitBtn.style.opacity = "1";
    exitBtn.style.animation = "opacity 1s ease-in-out"
  }, 3200)
})

// Go back to landing page
// exitBtn.addEventListener('clicked', () => {

// )}
let envelopeContainer = document.querySelector('.envelope-container');
let overLay =document.querySelector("#overlay"); 

exitBtn.addEventListener('click', () => {
  envelopeWrapper.classList.remove('flap');

  // Add fade-out effect
  envelopeContainer.style.transition = 'opacity 0.5s ease-out';
  // envelopeContainer.style.opacity = '0';
  envelopeContainer.style.display = "none";

  overLay.style.transition = 'opacity 0.5s ease-out';
  overLay.style.opacity = "1";
  overLay.style.display = 'none';



  // Hide the envelope container after the fade-out effect
  setTimeout(() => {
      envelopeContainer.style.display = 'none';
      overLay.style.display = 'none';
  }, 700); // After 0.5 seconds (same as fade-out duration)
});


// Select all the cards
const cards = document.querySelectorAll('.card');

// Loop through each card and add a click event listener
// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         cards.forEach(c => {
//             c.classList.remove('expanded');
//             c.classList.remove('opaque');
//         });

//         card.classList.add('expanded');
//         cards.forEach(c => {
//             if (c !== card) {
//                 c.classList.add('opaque');
//             }
//         });
//     });
// });
