const game = new Game();

function preload() {
	game.preload()
}


function setup() {
	createCanvas(2000, 1000)
	game.setup()
}

function draw() {
	game.draw()
}

function keyPressed() {
	if (keyCode === 32) {
		// make the player jump
		game.player.jump()
	}
}
