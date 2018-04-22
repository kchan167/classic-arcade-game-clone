# Classic Arcade Game Project

## Table of Contents

* [Instructions](#instructions)
* [Load game](#load-game)
* [How to play this game](#how-to-play-this-game)
* [Features & Resources](#features-and-resources)
* [Updates](#updates)

## Updates
### 4/22/2018
- a4c4d33 docs: Restructure the project folder
- 024ff29 docs: Modify README.md
- 3c9e4ba feat: Add endgame dialog to the game and rewrite README.md
### 4/21/2018
- 4df3a82 feat: Enemy's update method now randomly positions
                bugs in one of three rows after reset
- f1b7171 feat: Instantiate objects
- 1ed29b4 feat: Finish update, render and handleInput methods for Player class
- 5509478 feat: Finish Enemy function and Add Player function
- c4b0d5a feat: Add variables to Enemy function
- c1db072 feat: Initial commit

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project.
- [Project Description](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true)
- [Project Rubric](https://review.udacity.com/#!/rubrics/15/view)

## Load game

- Clone the website from https://github.com/kchan167/classic-arcade-game-clone
- Or you can go to https://kchan167.github.io/classic-arcade-game-clone/
## How to play this game
In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.
### Features and Resources

#### Result Dialog
Use sweet alert to display the congratulation dialog.
Resources: https://sweetalert.js.org/
