//No Button
const feedbackMessages = [
  "Choose again 😜",
  "Not quite! Try again 🤔",
  "Again. 🙂",
  "You're testing my patience... 😤",
  "...............",
  "Oh, yeah?🙃",
];

const finalMessage = "There we go.";

const noBtn = document.querySelector(".no-btn");
const feedback = document.querySelector(".feedback");

let clickCount = 0;

noBtn.addEventListener("click", function() {
  if (clickCount < feedbackMessages.length) {
    feedback.textContent = feedbackMessages[clickCount];
    feedback.classList.add("show");
    clickCount++;
  }

  if (clickCount === feedbackMessages.length) {
    noBtn.style.display = "none"; // Hide the No button
    feedback.textContent = finalMessage; // Show final feedback
  }
});

// Start music
let landingPage = document.querySelector('.landing-page');
let firstLine = document.querySelector('#first-line');
let secondLine = document.querySelector('#second-line');
let photoOne = document.querySelector('.one');
let photoTwo = document.querySelector('.two');
let photoThree = document.querySelector('.three');
let photoFour = document.querySelector('.four');
let song = document.querySelector('audio');
let promptM = document.querySelector('#prompt');

document.querySelector(".yes-btn").addEventListener("click", function() {
  landingPage.style.display = "none";

  if (song.paused) {
    song.play(); // Play the song
  }

  firstLine.style.animation = "moveDown 1s linear forwards";
  secondLine.style.animation = "scaleDown 1s linear forwards";
  photoOne.style.animation = "movePhoto1 2.5s linear forwards";
  photoTwo.style.animation = "movePhoto2 2s linear forwards";
  photoThree.style.animation = "movePhoto3 1s linear forwards";
  photoFour.style.animation = "movePhoto4 1.5s linear forwards";
  promptM.style.animation = "pulse 1.5s infinite alternate 3s, fade 4s linear forwards";

});



//Create Heart
function createHeart() {
    const heart = document.createElement('span');
  
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
  
    const size = Math.random() * 20 + 30; 
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
  
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
  
    document.body.appendChild(heart);
  
    const randomX = (Math.random() - 0.5) * 400; 
    const randomY = (Math.random() - 0.5) * 400; 
    const rotation = Math.random() * 360; 
  
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

// Go back to main page
let envelopeContainer = document.querySelector('.envelope-container');
let overLay =document.querySelector("#overlay"); 

exitBtn.addEventListener('click', () => {
  envelopeWrapper.classList.remove('flap');

  envelopeContainer.style.transition = 'opacity 0.5s ease-out';
  envelopeContainer.style.display = "none";

  overLay.style.transition = 'opacity 0.5s ease-out';
  overLay.style.opacity = "1";
  overLay.style.display = 'none';



  setTimeout(() => {
      envelopeContainer.style.display = 'none';
      overLay.style.display = 'none';
  }, 700);
});
