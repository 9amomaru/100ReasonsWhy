const reasons = [
    "You make me smile even on my worst days.",
    "Your laugh is my favorite sound.",
    "You understand me better than anyone else.",
    "You’re my peace when the world feels chaotic.",
    "You're always there when I need you.",
    "You believe in me when I don't believe in myself.",
    "You're incredibly smart.",
    "i love the reels you send me so much.",
    "You know how to make me feel loved.",
    "You make even the boring moments feel special.",
    "Aku.",
    "Kira.",
    "You are the kindest soul to ever exist",
    "I love the way you see me.",
    "i love the way you yap, i love your yapping sm",
    "You love me despite my flaws.",
    "You’re honest, even when it’s hard.",
    "You make me laugh till my stomach hurts.",
    "You always know what to say when I'm down.",
    "You make me feel safe.",
    "YOUR BODY.",
    "You're thoughtful in ways that surprise me.",
    "You remember the details I forget.",
    "You're creative and full of ideas.",
    "You’re always down to try new things with me.",
    "You're patient, even when I don’t deserve it.",
    "I love your sense of humor so much",
    "Did I mention your body?",
    "You’re my best friend.",
    "Your eyes.",
    "I love how passionate you are about the things you love.",
    "Your pretty smile.",
    "You’re strong, even when life tries to break you.",
    "You’re humble despite how amazing you are.",
    "UMMM I love you.",
    "You make every moment better just by being there.",
    "You know how to comfort me.",
    "You respect me.",
    "You inspire me every day.",
    "I love how you treat the people around you with kindness.",
    "You're gentle with my heart.",
    "You’re a great listener.",
    "I love how your mind works.",
    "You accept me completely.",
    "You’ve taught me what real love feels like.",
    "your perfect face",
    "ok your body",
    "You are so supportive.",
    "You’re goofy and fun.",
    "You are hot af.",
    "Who is my good girl?",
    "You’ve helped me grow emotionally.",
    "I love waking up to your messages.",
    "You have the best taste in music.",
    "The way you comfort me even though you know I overthink.",
    "I can be 100% myself around you.",
    "You love me in your own unique way.",
    "Your cute nose omg.",
    "You make even silence feel comfortable.",
    "You bring light into my life.",
    "You know how to cheer me up.",
    "You’ve taught me how to love better.",
    "You care about the things I care about.",
    "i can be vulnerable with you.",
    "You forgive me when I mess up.",
    "You celebrate my wins like they’re your own.",
    "You’re full of surprises—in the best way.",
    "You’re always working to improve yourself.",
    "You make even simple things romantic.",
    "You’re the first person I want to share good news with.",
    "William likes you very very much.",
    "You make time for me, no matter how busy you are.",
    "Red looks so beautiful on you (only wear it for me).",
    "You have a heart of gold.",
    "You put up with my shit.",
    "You make me proud to be yours.",
    "You’re my safe place.",
    "You’re emotionally mature and thoughtful.",
    "I'm really sorry but girl your body is literally perfect wth.",
    "You believe in us.",
    "You’ve taught me how to communicate better.",
    "You never stop learning or growing.",
    "You’re my biggest fan.",
    "You laugh at my dumb jokes.",
    "You’re brave.",
    "You treat others with respect.",
    "You’re trustworthy.",
    "You make me want to be better for you.",
    "You see the best in me.",
    "You bring calm to my storms.",
    "You make love feel easy.",
    "I love how you express yourself.",
    "You’re full of warmth and light.",
    "You always comfort me",
    "You’re adventurous with me.",
    "You’re not afraid to speak your mind.",
    "You make me feel like the luckiest person alive.",
    "You never give up on me.",
    "You’re one of a kind.",
    "I love you simply because you’re you.",
  ];
  
  
  let usedReasons = [];
  const music = document.getElementById("bg-music");
  const startButton = document.getElementById("start-btn");
  const card = document.getElementById("card");
  const cardScreen = document.getElementById("card-screen");
  const startScreen = document.getElementById("start-screen");
  const endScreen = document.getElementById("end-screen");
  
  startButton.addEventListener("click", () => {
    startScreen.style.display = "none";
    cardScreen.style.display = "flex";
    music.play();
    showNextReason();
  });
  
  function showNextReason() {
    if (usedReasons.length === reasons.length) {
      cardScreen.style.display = "none";
      endScreen.style.display = "block";
      return;
    }
  
    let index;
    do {
      index = Math.floor(Math.random() * reasons.length);
    } while (usedReasons.includes(index));
  
    usedReasons.push(index);
  
    // Animate card
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        card.style.animation = "none";
        void card.offsetWidth; // trigger reflow
        card.style.animation = "fadeSlideIn 0.5s ease forwards";

      card.textContent = reasons[index];
      card.style.animation = "fadeSlideIn 0.5s ease forwards";
    }, 100);
  }
  
  
  // Click to show next reason
  card.addEventListener("click", showNextReason);
  
  // Swipe left/right to show next reason
  let startX = 0;
  card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });
  
  card.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (Math.abs(endX - startX) > 50) {
      showNextReason();
    }
  }

);
  