Grid
- nine divs in 3x3 arrangement - changed to button for disabled attribute
- same height and width (square)
- CSS: margin on borders that touch another border. ie. top left div will have visible borders on right and bottom

User Input
- images in divs (Xs and Os)
- image depends on which player's turn (eg X if player 1's turn, O if player 2's)

Turn-taking
- change turn every click event.
- delay for .5s and announce who has the turn -- a pop up text covering the whole screen
- CSS: background color change to keep track on who's turn

Winning and Draw (game over)
- the game over when one of these conditions are met:
    - 3 Xs are in a row (X win condition) - Ask if wants to retry (retry button appears)
    - 3 Os are in a row (O win condition) - Ask if wants to retry (retry button appears)
    - the whole board is filled AND there is no marks (X/O) that are in line (draw condition) - Marks dissapear and 