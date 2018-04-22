// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // Initiate variable for enemy's location
    this.x = x;
    this.y = y;
    // Initiate variable for enemy's speed
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Create an array to store 3 possible y position
    var enemyY = [60, 140, 220];
    // Create a random index for array enemyY
    function getRndIndex(arr) {
        return Math.floor(Math.random() * arr.length);
    }

    this.x += this.speed * dt;
    // Reset enemy's position and speed after enemies pass
    // over canvas.
    if (this.x > 505) {
        this.x = -100;
        this.y = enemyY[getRndIndex(enemyY)]; // Randomly set y position
        this.speed = 100 + Math.floor(Math.random() * 505);
    }
    // Reset player position after collision
    if( this.x + 70 > player.x && this.x < player.x + 60 &&
        this.y === player.y) {
            player.x = 200;
            player.y = 380;
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x = 200, y = 380, speed = 50) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    // Ensure player's character is inside canvas box
    if(this.x < 0) {
        this.x = 0;
    }
    if(this.x > 400) {
        this.x = 400;
    }
    if(this.y > 380) {
        this.y = 380;
    }
    // Reset player position after reaching top of canvas;
    if(this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyInput) {
    switch (keyInput) {
        // player moves horizontally +/- 100;
        case 'left':
            this.x -= this.speed + 50;
            break;
        case 'right':
            this.x += this.speed + 50;
            break;
        case 'up':
            this.y -= this.speed + 30;
            break;
        case 'down':
            this.y += this.speed + 30;
            break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

var enemyY = [60, 140, 220];
var player = new Player();
enemyY.forEach(function(y) {
    var enemy = new Enemy(0, y, 100 + Math.floor(Math.random() * 505));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
