function init() {
  const grid = document.querySelector('.grid');
  const startGame = document.querySelector('#start-btn');
  const restartGame = document.querySelector('#restart-btn');
  const cells = [];
  const width = 20;
  const cellCount = width * width;

  let playerPosition = 390;
  let invaders = [9, 10, 11, 12, 13, 29, 30, 31, 32, 33];
  let shield = [321, 322, 323, 325, 326, 327, 329, 330, 332,
    333, 334, 336, 337, 338 ]
  let direction = 1;
  let goingRight = true;

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div');
      cell.textContent = i;
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
      cells[invaders[j]].classList.add('invaders');
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
  }

  function addShield() {
    for (let j = 0; j < shield.length; j++) {
      cells[shield[j]].classList.add('shield');
    }
  }

  function startingGame() {
    console.log('starting game works');
    addInvaders(invaders);
    addPlayer();
    setInterval(moveInvaders, 100);
    addShield();
  }

  function restartingGame() {
    console.log('restart button works');
    removePlayer();
    clearInterval(invadersPattern);
    removeInvaders();
  }

  createGrid(playerPosition);

  startGame.addEventListener('click', startingGame);
  restartGame.addEventListener('click', restartingGame);
  document.addEventListener('keyup', handleKeyUp);
  

}
window.addEventListener('DOMContentLoaded', init);