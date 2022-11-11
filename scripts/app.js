function init() {
  const grid = document.querySelector('.grid');
  const startGame = document.querySelector('#start-btn');
  const cells = [];
  const width = 11;
  const cellCount = width * width;

  let playerPosition = 115;
  let invaders = [5, 6, 7, 8];


  function createGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div');
      cell.textContent = i;
      grid.appendChild(cell);
      cells.push(cell);
    }
    cells[startingPosition].classList.add('player');
  }

  function handleKeyUp(event) {
    cells[playerPosition].classList.remove('player');
    const x = playerPosition % width;

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
    cells[playerPosition].classList.add('player');
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
    removeInvaders()
    for (let i = 0; i < invaders.length; i++) {
      invaders[i] += 1;
    }
    addInvaders();
  }
 
  function startingGame() {
    console.log('starting game works')
    addInvaders(invaders);
    setInterval(moveInvaders, 1000)
}

  
createGrid(playerPosition);



  startGame.addEventListener('click', startingGame);
  document.addEventListener('keyup', handleKeyUp);


}
window.addEventListener('DOMContentLoaded', init);