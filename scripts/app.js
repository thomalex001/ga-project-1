function init() {
  const grid = document.querySelector(".grid");
  const startGame = document.querySelector("#start-btn");
  const cells = [];
  const width = 20;
  const cellCount = width * width;

  const displayLives = document.querySelector("#lives");
  const displayResult = document.querySelector("#result");
  const displayPoints = document.querySelector("#points");
  
  const marioReggae = document.querySelector('#mario-reggae');
  const playSounds = document.querySelector('#play-sounds');
  const playMoreSounds = document.querySelector('#play-more-sounds');

  
  const invadersShot = [];
  const shieldsShot = [];

  let direction = 1;
  let goingRight = true;
  let points = 0;
  let lives = 3;
  let invadersShootingInterval;
  let moveInvadersInterval;
  let bullet;
  let ball;
  let playerPosition = 389;
  let invaders = [
    44, 56, 64, 65, 70, 75, 76, 84,
    85, 86, 89, 90, 91, 94, 95, 96,
    105, 106, 107, 109, 110, 111,
    113, 114, 115, 126, 127, 128, 
    131, 132, 133, 134, 148, 152
  ];
  let shield = [
    301, 302, 303, 305, 306, 307,
    309, 310, 312, 313, 314, 316,
    317, 318, 321, 322, 323, 325,
    326, 327, 329, 330, 332, 333,
    334, 336, 337, 338
  ];


  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement("div");
      grid.appendChild(cell);
      cells.push(cell);
    }
  }
  function addPlayer() {
    cells[playerPosition].classList.add("player");
  }
  function removePlayer() {
    cells[playerPosition].classList.remove("player");
  }

  function handleKeyUp(event) {
    const x = playerPosition % width;
    removePlayer();

    switch (event.keyCode) {
      case 39:
        if (x < width - 1) playerPosition++;
        break;
      case 37:
        if (x > 0) playerPosition--;
        break;
      default:
    }
    addPlayer();
  }

  function addInvaders() {
    for (let j = 0; j < invaders.length; j++) {
      if (!invadersShot.includes(j)) {
        cells[invaders[j]].classList.add("invaders");
      }
    }
  }

  function removeInvaders() {
    for (let j = 0; j < invaders.length; j++) {
      cells[invaders[j]].classList.remove("invaders");
    }
  }

  function moveInvaders() {
    const leftSide = invaders.some((e) => e % width === 0);
    const rightSide = invaders.some((e) => e % width === width - 1);
    removeInvaders();

    if (rightSide && goingRight) {
      for (let i = 0; i < invaders.length; i++) {
        invaders[i] += width + 1;
        direction = -1;
        goingRight = false;
      }
    }
    if (leftSide && !goingRight) {
      for (let i = 0; i < invaders.length; i++) {
        invaders[i] += width - 1;
        direction = 1;
        goingRight = true;
      }
    }
    for (let i = 0; i < invaders.length; i++) {
      invaders[i] += direction;
    }
    addInvaders();
    if (cells[playerPosition].classList.contains("invaders", "player")) {
      gameOver();
    }
  }

  function addShield() {
    for (let j = 0; j < shield.length; j++) {
      cells[shield[j]].classList.add("shield");
    }
  }
  
  function startingGame() {
    // clearing  previous game //
    clearInterval(moveInvadersInterval);
    clearInterval(invadersShootingInterval);
    removeInvaders();
    clearInterval(ball);
    document.removeEventListener('keyup', playerShooting);
    displayPoints.innerHTML = null;
    displayLives.innerHTML = 3;
    displayResult.innerHTML = 'PLAY!'
    startGame.innerHTML = "Restart";
    startGame.style.background = "rgba(247, 72, 56, 0.847";
    startGame.style.fontSize = "22px";

    // new game //
    invaders = [
      44, 56, 64, 65, 70, 75, 76, 84,
      85, 86, 89, 90, 91, 94, 95, 96,
      105, 106, 107, 109, 110, 111, 
      113, 114, 115, 126, 127, 128, 
      131, 132, 133, 134, 148, 152
    ];
    shield = [
      301, 302, 303, 305, 306, 307, 309,
      310, 312, 313, 314, 316, 317, 318,
      321, 322, 323, 325, 326, 327, 329, 
      330, 332, 333, 334, 336, 337, 338
    ];
    invadersShootingInterval = setInterval(invadersShooting, 1500);
    moveInvadersInterval = setInterval(moveInvaders, 1000);
    document.addEventListener("keyup", playerShooting);
    document.addEventListener('keyup', handleKeyUp);
    addShield();
    marioReggae.src = './sounds/mario-reggae.mp3';
    playSounds.src = './sounds/coin.mp3';
    marioReggae.play();
    playSounds.play();
  }
  function gameOver() {
    displayResult.innerHTML = "GAME OVER :(";
    displayLives.innerHTML = '0';
    clearInterval(moveInvadersInterval);
    clearInterval(invadersShootingInterval);
    document.removeEventListener("keyup", playerShooting);
    playSounds.src = './sounds/game-over.mp3';
    marioReggae.pause();
    playSounds.play();
  }
  function playerWins() {
    displayResult.innerHTML = "YOU WIN!!!";
    clearInterval(invadersShootingInterval);
    document.removeEventListener("keyup", playerShooting);
  }

  createGrid();
  addShield();
  addPlayer();
  startGame.addEventListener("click", startingGame);
  

  function playerShooting(event) {
    let currentBallPosition = playerPosition;
    function shootBall() {
     console.log(shootBall);
      const y = Math.floor(currentBallPosition / width)
      if (y === 0) {
        cells[currentBallPosition].classList.remove("ball");
        clearInterval(ball);
      } else if (cells[currentBallPosition].classList.contains("invaders")) {
        clearInterval(ball);
        cells[currentBallPosition].classList.remove("ball");
        cells[currentBallPosition].classList.remove("invaders");
        const invaderShot = invaders.indexOf(currentBallPosition);
        invaders.splice(invaderShot, 1);
        points += 100;
        displayPoints.innerHTML = points;
      } else if (cells[currentBallPosition].classList.contains("shield")) {
        clearInterval(ball);
        cells[currentBallPosition].classList.remove("ball");
      } else if (invadersShot.length === invaders.length) {
        playerWins();
      } else {
        cells[currentBallPosition].classList.remove("ball");
        currentBallPosition -= width;
        cells[currentBallPosition].classList.add("ball");
      }
    } if (event.keyCode === 32) {
      ball = setInterval(shootBall, 100);
      playSounds.src = "./sounds/ball.mp3";
      playSounds.play();
    }
  }

  function invadersShooting() {
    playSounds.src = './sounds/bullet.wav';
    playSounds.play();
    let currentBulletPosition =
      invaders[Math.round(Math.random() * (invaders.length - 1))];
    bullet = setInterval(() => {
      if (currentBulletPosition < 400) {
        cells[currentBulletPosition].classList.remove("bullet");
        currentBulletPosition += width; 
        if (currentBulletPosition < 400) {
          cells[currentBulletPosition].classList.add("bullet");
          if (cells[currentBulletPosition].classList.contains("shield")) {
            clearInterval(bullet);
            cells[currentBulletPosition].classList.remove("bullet");
            cells[currentBulletPosition].classList.remove("shield");
            const shieldShot = shield.indexOf(currentBulletPosition);
            shieldsShot.push(shieldShot);
          }
          if (cells[currentBulletPosition].classList.contains("player")) {
            lives -= 1;
            displayLives.innerHTML = lives;
            playMoreSounds.src = './sounds/mario-oof.mp3';
            playMoreSounds.play();
          }
          if (lives === 0) {
            gameOver();
            cells[currentBulletPosition].classList.remove("bullet");
            lives = 1;
          }
        } 
      } 
    }, 100);
  }
}
window.addEventListener("DOMContentLoaded", init);
