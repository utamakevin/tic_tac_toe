# Welcome to my first project!

It's my take on a classic game of tic tac toe.

You can have a go at it on this link:
https://pages.git.generalassemb.ly/utamakevin/tic_tac_toe/

Hope you enjoy!

![Screenshot of tic_tac_toe](./app_screenshot2.png)

## Now Let's Get Technical

This game was made with JavaScript.

The logic behind the game is quite straight-forward:
- When user click on a space - it is marked with either O or X, changing every click.
- The winning conditions are checked after every move. That is, if there are three markers of a type that are in a line either horizontally, vertically or diagonally.
- When there is no winner, **the board reset** and the game continues until there is a winner. Why settle for a draw when either of you can collapse or make a mistake in this seemingly never-ending game.
- When there is a winner, the background colour change depending on the winner. No, you cannot change the colour. I made it, I get to pick the colour.
- The loser gets to play first in the next round because if you didn't win the first time what are the chances you can win the next one being second?
- I am not aware of any bugs/issues with the game at the time of writing. But then again I have been squashing bugs left and right in a caffeine-induced rampage for the past couple of hours so I might miss some. Let me know!
- There is a round counter at the top that changes everytime the game is restarted.
- There is a prompt at the bottom to keep track of who's turn it is
- The code was made with minimum repetition (or so I thought). However, there is no value that keeps track of the turns and therefore all logic that involves displaying a player (either X or O) contains two separate statements and thus, repetition. Instead of addressing this, I decided to use the time to fix other logics, such as winning conditions. Have a peek at the code! Feedbacks are always welcome.
- Click sound is added on player move.
