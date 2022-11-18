                            ********************************
                            ----- MARIO WORLD INVADERS ----       
                            ********************************

HTML:

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
. Background will be Mario Gameplay
. Bullets will be ball of fire


SOUNDS:
1. add background sound when starting game
2. add shooting sounds for each
4. add hitting sounds
3. add start/reset button sounds



DAY ONE:

HTML:
Created most HTML structure based one wireframe.

CSS:
. Styled the grid and used flexbox to move <aside> to the right.
. Created Play Game and Restart buttons. Linked PlayGame button to JS. Play Game button functioning.

JS:
. Created Grid 10*10
, Added player and invaders on grid
. Got stuck with invaders moving pattern, for some reason they would bounce on each side only for two lines.
. Used "!goingRight" with a bang operator instead of "goingLeft", also increased grid to 20*20 as I was getting an error with 10*10.



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

HTML:
Added <audio> tags and tested for background sound when Play button clicked.

JS:
. Added "lives" function with changes made in the DOM for player to see.
. Added "Game Over"  and "You Win!" to the DOM for player to see.
. Had a bug when added invaders as a W shape as they were coming off the screen. Fixed with "e % width === 0)"
. When creating Play/Restart buttons I started to have lots of bugs in the game such as: bullets getting stuck in the grid, bullets/bricks collision not happening.
. Included most function for the game in the "Play" function to resolve this, however still had some issues with it.

CSS:
Created Play/Restart button and styled it to 80's arcade games.



DAY FOUR:
HTML : 
. Added a two more <audio> tags as sounds so that sounds could play each other
. Added incon to the page


JS:
. Removed restart button and instead created a Play/Restart function while changing innerHTML when clicked.
. Debuged balls going off grid
. Debuged balls which were killing all invaders in their path
. Debugged turtles getting stuck in div's randomly by increasing their speed
. Added sounds for background music, balls/bullet thrown, Game Over, Winning, getting hit, ennemy being hit, button start being clicked.

. Winning sound
. Collision when two bullets hit each other
. Fix bug when fireballs are thrown too fast
. collision (explosion) when bullet or ball hits
. Background dark when game over


CSS:
Create responsive design for screens under XXpx
Added background images
Created personalised logo 
Modified colors of button to match logo colors


BUGS:
. Balls get disabled when shooting Shield too many times
. If ennemies touch the ground before touching Player, the game does not end.


AREAS OF IMPROVEMENT:
. Reduce the number of bullets that can be thrown. Possibly use an interval.
. Add collision styling when bullets/balls hit a target
. Flip axis of Player's image left to right when keys are being pressed 

