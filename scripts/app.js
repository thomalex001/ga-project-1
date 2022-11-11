function init() {
  const grid = document.querySelector('.grid');
  const cells = [];
  const width = 10;
  const cellCount = width * width;

  let playerPosition = 94;
  let invaders = [4, 5, 6, 7];

  function createGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div');
      cell.textContent = i;
      grid.appendChild(cell);
      cells.push(cell);
    }
    cells[startingPosition].classList.add('player');
  }
  
  function invadersMap() {
    cells[invaders[0]].classList.add('invaders');
  }

  function handleKeyUp(event) {
    cells[playerPosition].classList.remove('player'); // * remove player class from old position
    const x = playerPosition % width;

    switch (
      event.keyCode // * calculate the new index
    ) {
      case 39:
        if (x < width - 1) playerPosition++;
        break;
      case 37:
        if (x > 0) playerPosition--;
        break;
      default:
        console.log('invalid key do nothing');
    }
    cells[playerPosition].classList.add('player'); // * add the class back at the new position
  }

  // let count = 3;
  // let counter;
  // function invadersMovingPattern(counter) {
  //   counter = setInterval((invadersPosition) => {
  //     if (count <= 6) {
  //       count++;
  //     } else if (count) {
  //       count--;
  //     }
  //     console.log(count);
  //   }, 500);

  // }
  invadersMap();
  createGrid(playerPosition);
  // invadersMovingPattern();

  document.addEventListener('keyup', handleKeyUp);
}
window.addEventListener('DOMContentLoaded', init);
