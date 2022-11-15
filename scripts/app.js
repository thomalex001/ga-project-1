function init() {
  const grid = document.querySelector('.grid');
  const startGame = document.querySelector('#start-btn');
  const restartGame = document.querySelector('#restart-btn');
  const cells = [];
  const width = 20;
  const cellCount = width * width;
  const invadersPattern = setInterval(moveInvaders, 1000);
  const displayResult = document.querySelector('#points');
  let playerPosition = 389;
  let invaders = [9, 10, 11, 12, 13, 29, 30, 31, 32, 33];
  let invadersShot = [];
  let shieldsShot = [];
  let shield = [301, 302, 303, 305, 306, 307, 309, 310, 312, 313, 314, 316, 317, 318,
    321, 322, 323, 325, 326, 327, 329, 330, 332, 333, 334, 336, 337, 338,
  ];
  let direction = 1;
  let goingRight = true;
  let score = 0;

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div');
      // cell.textContent = i;
      grid.appendChild(cell);
      cells.push(cell);
    }
  }
  function addPlayer() {
    cells[playerPosition].classList.add('player');
  }
  function removePlayer() {
    cells[playerPosition].classList.remove('player');
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
        console.log('invalid key do nothing');
    }
    addPlayer();
  }
  function addInvaders() {
    for (let j = 0; j < invaders.length; j++) {
      if (!invadersShot.includes(j)) {
        cells[invaders[j]].classList.add('invaders');
      }
    }
  }

  function removeInvaders() {
    for (let j = 0; j < invaders.length; j++) {
      cells[invaders[j]].classList.remove('invaders');
    }
  }
  function moveInvaders() {
    const leftSide = invaders[0] % width === 0;
    const rightSide = invaders[invaders.length - 1] % width === width - 1;
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
    if (cells[playerPosition].classList.contains('invaders', 'player')) {
      console.log('GameOVER');
      clearInterval(invadersPattern);
    }
  }

  function addShield() {
    for (let j = 0; j < shield.length; j++) {
      cells[shield[j]].classList.add('shield');
    }
  }

  function restartingGame() {
    console.log('restart button works');
    clearInterval(invadersPattern);
    clearInterval(bullet)
    removeInvaders();
  }

  function startingGame() {
    console.log('starting game works');
    setInterval(invadersPattern);
    setInterval(bullet)
  }
  

  createGrid();
  addShield();
  addPlayer();
  startGame.addEventListener('click', startingGame);
  restartGame.addEventListener('click', restartingGame);
  document.addEventListener('keyup', handleKeyUp);
  
 

  function playerShooting(event) {
    let currentBallPosition = playerPosition;
    function shootBall() {
      cells[currentBallPosition].classList.remove('ball');
      currentBallPosition -= width;
      cells[currentBallPosition].classList.add('ball');
      if (cells[currentBallPosition].classList.contains('invaders')) {
        clearInterval(ball);
        cells[currentBallPosition].classList.remove('ball');
        cells[currentBallPosition].classList.remove('invaders');
        const invaderShot = invaders.indexOf(currentBallPosition);
        invadersShot.push(invaderShot);
        score += 100;
        displayResult.innerHTML = score;
      }
      if (cells[currentBallPosition].classList.contains('shield')) {
        clearInterval(ball);
        cells[currentBallPosition].classList.remove('ball');
      }
      if (invadersShot.length === invaders.length) {
        console.log('YOU WIN!');
      }
    }
    switch (event.keyCode) {
      case 32:
        ball = setInterval(shootBall, 100);
    }
  }

  function invadersShooting() {
    let bullet;
    let currentBulletPosition =
        invaders[Math.round(Math.random() * (invaders.length - 1))];
    function shootBullet() {
      cells[currentBulletPosition].classList.remove('bullet');
      currentBulletPosition += width;
      cells[currentBulletPosition].classList.add('bullet');
    }
    if (cells[currentBulletPosition].classList.contains('shield')) {
      clearInterval(bullet);
      cells[currentBulletPosition].classList.remove('bullet');
      cells[currentBulletPosition].classList.remove('shield');
      const shieldShot = shield.indexOf(currentBulletPosition);
      shieldsShot.push(shieldShot)
    }
    setInterval(shootBullet, 100);
  }
  
  
  
  bullet = setInterval(invadersShooting, 2000);


  document.addEventListener('keyup', playerShooting);



}
window.addEventListener('DOMContentLoaded', init);