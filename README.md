# hangmanGame
Hangman game using vanilla javascript

hangman game:
notes:
-This particular homework demonstrated the value in walking away from code sometimes to let it marinate in the back of your mind. At several points I hit a wall where I simply could not figure out what to do. Feeling the deadline looming it was hard to go do other things, but after going out and relaxing the one magic line I needed to enter, or the one value I needed to put in, simply appeared in my head and the feeling of relief and accomplishment was palpable.

features:
-Game does not truly "start" until button is pressed.
-Alphabet grid loads upon start and dynamically updates to strike through a letter after it is entered by the user.
-Game is repeatable indefinitely for those who would like to actually play hangman for extended periods of time.
-Wins / Losses stats are kept between gameplay

fixes needed:
-Javascript feels a bit sloppy, once more familiar with the language can probably reduce the amount of clutter in the code
-"gameStart" and "gameOver" true/false conditions don't actually do anything.
-Workarounds using console.log statements used in areas where "return;" should be sufficient, however when using return in those areas the code breaks. Language is doing exactly what I tell it, rather than what I am trying to tell it to do sometimes.
-Reset game does not restart game, pressing "Start game" again is required to play a new round.

cheats:
-none.