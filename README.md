1. Create basic HTML 

JS:
2. create a grid 10*10 inside game-container
3. add player on grid and set rules 
limitations
4. add alien and set limitations
make aliens as an array
5. Link start and reset buttons
6. add shooting functions on both sides
7. add lives function
8. add score function




CSS: 
Background will be Mario Gameplay
Bullets will be ball of fire



SOUNDS:
1. add background sound when starting game
2. add shooting sounds for each
4. add hitting sounds
3. add start/reset button sounds


DAY ONE:

HTML 
Created most HTML structure based one wireframe.

CSS:
styled the grid and used flexbox to move <aside> to the right.
Created Play Game and Restart buttons. Linked PlayGame button to JS. Play Game button functioning.

JS:
Created Grid 10*10
Added player and invaders on grid

Got stuck with invaders moving pattern, for some reason they would bounce on each side only for two lines.
Used "!goingRight" with a bang operator instead of "goingLeft", also increased grid to 20*20 as I was getting an error with 10*10.



DAY TWO :

HTML:
. Made some tweaks to the structure to adapt CSS. Added <span> elements, added another container for score-board.
. Added all content such as GAME RULES, SCORE, LIVES.
. Added retro font for the whole page

JS:
. Created shooting functions for both Player (with space bar) and Invaders (randomly shooting in intervals)
. 


CSS:
. Styled the page with background theme Mario World.
. Added Mario's fireballs
. Added Wario Fighters "Spinies" as bullets
. Added brick wall as Mario's shield
. Added box-shadow on both game-container and <aside> container to add some depth to the game

DAY THREE:

Must To:
<!-- Collision when bullet hits brick wall -->
<!-- Add lives to JS -->
<!-- Add Game Over to the Screen -->
<!-- Remove turtles when I win -->
<!-- Fighters moving right -->
<!-- Remove bullets when I win -->
<!-- Play button click multiple times -->
Collision when two bullets hit each other
Turtles don't disapear
Restart button doesn't remove aliens or bullets after playing.
Ball kills too many invaders
Keep only Play button and change innerHTML when clicked

Only throw bullets from invaders still alive
Fix bug when fireballs are thrown too fast
Add Sounds
Reduce number of bullets
Stop turtles after height

TO DO:
Add collision styling when bullet hits
Move Mario left to right
Invaders not moving to the end when shot on the side