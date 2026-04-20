const correctPin = "1028";

const pinScreen = document.getElementById("pin-screen");
const entryScreen = document.getElementById("entry-screen");
const letterScreen = document.getElementById("letter-screen");
const pinInput = document.getElementById("pin-input");
const unlockBtn = document.getElementById("unlock-btn");
const pinError = document.getElementById("pin-error");
const openLetterBtn = document.getElementById("open-letter-btn");
const letterCard = document.getElementById("letter-card");
const letterContent = document.getElementById("letter-content");
const signature = document.getElementById("signature");
const musicToggle = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");
const hearts = document.getElementById("hearts");
const particles = document.getElementById("particles");

const letterText = `Hello, Precious. My Love. My Baby. My Everything. I just hope you read all of this, every single part of it. Kasi lahat ng sasabihin ko here, galing talaga sa puso ko, and it all matters to me.  
  
I prayed.. I really did. I asked God for a sign, for guidance, for clarity. I won’t say na I fully understand everything right now, but I feel like this, what we’re going through, might be something He allowed for a reason. I’ve been holding on to the thought na maybe God separates two people sometimes, not to end them, but to fix them individually first.. so if they come back, they’ll be stronger, better, and more ready. I don’t know if that’s exactly what this is, but I’m praying with all my heart that it is.  
  
So for now.. I’ll focus on myself. I’ll fix my flaws, I’ll grow, I’ll become better, not just for me, but for you, and for God. I’ll work on the parts of me that hurt you, the parts of me that weren’t enough, and I’ll make sure I don’t stay the same person who made those mistakes. I want to come out of this as someone better, someone worthy of the love I once had with you.  
  
And I just want you to know.. mahal na mahal talaga kita. I love you so much. Not just in words, but in the way I still choose you even now that we’re not together anymore. Kahit ganito na tayo, ikaw pa rin yung laman ng puso ko. Ikaw pa rin yung hinahanap ko sa bawat araw. My heart is more yours than mine, it always has been.  
  
To be honest.. I don’t know how long this waiting will take.  I don’t know what will happen to us in the future. But even then, I’m willing to wait. Not because I’m forcing anything, but because I’m serious about you. I can’t just move on like nothing happened. I’ve told you this so many times already, but I’ll say it again, I’ll stay loyal. No matter what happens, I’ll stay loyal to you, even in silence, even from a distance.  
  
You won’t see me replacing you. I won’t look for someone else, I won’t entertain anyone, because for me, you’re not someone who can be replaced. What I felt for you, what I gave to you, that’s yours. And I’m keeping it that way.  
  
If loving you means I have to wait, then I’ll wait, as long as forever. Kahit walang kasiguraduhan, kahit ang daming what ifs, kahit masakit, kahit nakakapagod minsan.. I’d still choose this. I’d still choose you. Because for me, you’re worth every second of waiting, every bit of pain, every moment of uncertainty.  
  
I may not be beside you right now, but my heart is still with you. And kahit hindi mo na ako piliin..  I’ll still be here, loving you quietly, faithfully, the same way I always did.  
  
I don’t need a lot of people.. ikaw lang naman talaga yung gusto ko. Ikaw lang yung nakita kong makakasama ko sa future. And kahit wala ka na ngayon, that future I once dreamed of, that life I imagined with you.. it’s still here in my heart.  
  
And there’s something else I need you to understand, very clearly, from me.

If there ever comes a day when your heart leads you back to me.. please don’t hold yourself back. Don’t question if it’s too late, don’t overthink if I’ve already moved on, don’t be scared of what you might find.

Just come.

Text me. Call me. Find me in whatever way you can.

Because my love for you, it will never change. Some love doesn’t restart, doesn't stop, it continues, even after silence. And what I feel for you.. it will never stop, even when everything around us did.

Kung babalik ka, you won’t be met with anger, or coldness, or questions like “why now?” Nandito lang ako, with understanding. With familiarity. With a heart that still somehow remembers the way you feel like home to me.

I won’t ask this to be perfect. I won’t ask us to fix everything all at once. I just want honesty. I just want effort. I just want you, real, present, trying.

And if we ever try again, I don’t want it to be rushed or forced by emotions alone. I want it to be two people who grew, who learned, who became softer in the places where we used to hurt each other. I want us to do it right this time, not because we’re afraid of losing each other again, but because we finally understand how to keep each other.

But even if that day doesn’t come.. even if life takes us in completely different direction.. I want you to know something I will never take back.

You were never just a chapter to me. You were the story I didn’t want to end. 

And if I ever loved you in a way that felt heavy, or too much, or overwhelming.. I hope you still remember that it was never fake. It was never temporary. It was real, even in its most imperfect form.

So wherever you go, whatever happens, whoever you become..

please be kind to yourself.
please heal gently.
and please don’t forget that somewhere in this world, there’s someone who once loved you so deeply that even silence couldn’t make it disappear.

And if it’s meant to be.. we’ll find our way back to each other again. Not as the same people we were, but as better versions, ready, steady, and finally right.

Until then.. I’ll carry you quietly in my heart. 

And always remember this.. I’m here. If you ever need someone to talk to, someone to rant to, someone to run to when everything feels heavy, I’m here. Don’t hesitate to message me, to call me, to reach out. I’ll always be here for you. One call away, always ready to listen, always ready to understand.  
  
Even if we’re not together.. I’ll still care for you the same. And if it takes a lifetime of waiting.. then I’ll wait. I'll spend a lifetime waiting for you.`;

let letterRendered = false;
let userHasInteracted = false;

function switchScreen(from, to) {
  from.classList.remove("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    to.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 260);
}

function showError(message) {
  pinError.textContent = message;
  pinInput.classList.remove("shake");
  void pinInput.offsetWidth;
  pinInput.classList.add("shake");
}

function verifyPin() {
  if (pinInput.value.trim() === correctPin) {
    pinError.textContent = "";
    switchScreen(pinScreen, entryScreen);
  } else {
    showError("Wrong PIN. Please try again.");
  }
}

function renderLetter() {
  if (letterRendered) return;
  letterRendered = true;

  const paragraphs = letterText.split(/\n\s*\n/);

  paragraphs.forEach((paragraph, index) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    p.style.animationDelay = `${index * 0.22}s`;
    letterContent.appendChild(p);
  });

  const signatureDelay = paragraphs.length * 220 + 900;
  setTimeout(() => {
    signature.classList.add("show");
  }, signatureDelay);
}

function updateMusicButton() {
  musicToggle.textContent = bgMusic.paused ? "Play Music" : "Pause Music";
}

function playMusic() {
  if (!userHasInteracted) return;

  const playAttempt = bgMusic.play();
  if (playAttempt && typeof playAttempt.then === "function") {
    playAttempt
      .then(() => {
        updateMusicButton();
      })
      .catch(() => {
        updateMusicButton();
      });
  } else {
    updateMusicButton();
  }
}

function pauseMusic() {
  bgMusic.pause();
  updateMusicButton();
}

function toggleMusic() {
  userHasInteracted = true;
  if (bgMusic.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
}

function openLetter() {
  userHasInteracted = true;
  switchScreen(entryScreen, letterScreen);
  setTimeout(() => {
    letterCard.classList.add("show");
    renderLetter();
    playMusic();
  }, 420);
}

function createParticles() {
  for (let i = 0; i < 26; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `${-20 - Math.random() * 50}px`;
    particle.style.animationDuration = `${8 + Math.random() * 8}s`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.setProperty("--drift", `${-50 + Math.random() * 100}px`);
    particle.style.opacity = String(0.15 + Math.random() * 0.3);
    particles.appendChild(particle);
  }
}

function burstHearts(x, y) {
  for (let i = 0; i < 10; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = "❤";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${14 + Math.random() * 14}px`;
    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 180}px`);
    heart.style.setProperty("--y", `${-50 - Math.random() * 170}px`);
    heart.style.setProperty("--r", `${-35 + Math.random() * 70}deg`);
    hearts.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 1600);
  }
}

function registerInteraction() {
  userHasInteracted = true;
}

unlockBtn.addEventListener("click", verifyPin);

pinInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    verifyPin();
  }
});

openLetterBtn.addEventListener("click", openLetter);
musicToggle.addEventListener("click", toggleMusic);

bgMusic.addEventListener("play", updateMusicButton);
bgMusic.addEventListener("pause", updateMusicButton);
bgMusic.addEventListener("loadedmetadata", updateMusicButton);
bgMusic.addEventListener("canplay", updateMusicButton);

document.addEventListener("click", (event) => {
  registerInteraction();
  burstHearts(event.clientX, event.clientY);
});

document.addEventListener("touchstart", (event) => {
  registerInteraction();
  const touch = event.touches[0];
  if (touch) {
    burstHearts(touch.clientX, touch.clientY);
  }
}, { passive: true });

createParticles();
updateMusicButton();
