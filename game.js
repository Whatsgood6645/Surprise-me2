const app = document.getElementById("app");
const surpriseBtn = document.getElementById("surprise");

// 🔥 MINIGAME LIST (this scales to 100 easily)
const minigames = [

  // 🖱️ CLICKER GAME
  function clickerGame() {
    let count = 0;
    app.innerHTML = `
      <h2>Click Faster Than Your Thoughts</h2>
      <p id="count">0</p>
      <button id="click">CLICK</button>
      <br><br>
      <button onclick="showSurprise()">Escape</button>
    `;
    document.getElementById("click").onclick = () => {
      count++;
      document.getElementById("count").textContent = count;
    };
  },

  // 🧠 TROLLEY PROBLEM
  function trolleyGame() {
    app.innerHTML = `
      <h2>The Trolley Problem (Uh Oh)</h2>
      <p>A trolley is heading toward 5 people.</p>
      <p>You can pull the lever to redirect it.</p>
      <button onclick="endGame('You pulled the lever. History judges you.')">
        Pull Lever
      </button>
      <button onclick="endGame('You did nothing. Also judged.')">
        Do Nothing
      </button>
    `;
  },

  // 🤪 DO NOTHING GAME
  function doNothingGame() {
    app.innerHTML = `
      <h2>Do Absolutely Nothing</h2>
      <p>Don’t click anything.</p>
      <p id="timer">5</p>
    `;
    let time = 5;
    const interval = setInterval(() => {
      time--;
      document.getElementById("timer").textContent = time;
      if (time === 0) {
        clearInterval(interval);
        endGame("You won by doing nothing. Incredible.");
      }
    }, 1000);
  },

  // 🧪 LYING BUTTON GAME
  function lyingButtonGame() {
    app.innerHTML = `
      <h2>The Button Lies</h2>
      <button onclick="endGame('You lost.')">WIN</button>
      <button onclick="endGame('You won. Somehow.')">LOSE</button>
    `;
  },

  // ⚡ REACTION GAME
  function reactionGame() {
    app.innerHTML = `<h2>WAIT…</h2>`;
    setTimeout(() => {
      app.innerHTML = `
        <h2>NOW CLICK</h2>
        <button onclick="endGame('Nice reflexes, gamer.')">CLICK</button>
      `;
    }, Math.random() * 3000 + 1000);
  }
];

// 🎲 RANDOM GAME TELEPORTER
function loadRandomGame() {
  const game = minigames[Math.floor(Math.random() * minigames.length)];
  game();
}

// 🏁 END SCREEN
function endGame(message) {
  app.innerHTML = `
    <h2>${message}</h2>
    <button onclick="showSurprise()">🎲 SURPRISE ME AGAIN</button>
  `;
}

// 🏠 HOME BUTTON
function showSurprise() {
  app.innerHTML = `
    <h1>100 Bad Decisions</h1>
    <button onclick="loadRandomGame()">🎲 SURPRISE ME</button>
  `;
}

// INITIAL BUTTON
surpriseBtn.onclick = loadRandomGame;
