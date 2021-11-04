class Player {

	constructor(playerImage) {
		this.width = 300
		this.height = 300
		this.x = 250
		this.y = 650
		this.velocity = 0
		this.gravity = 1
		this.image = playerImage
	}

	draw() {
		this.velocity += this.gravity
		this.y += this.velocity
		if (this.y >= 650) {
			this.y = 650
		}
		if (this.y < 0) {
			this.y = this.y + 10
		}
		image(game.playerImage, this.x, this.y, this.height, this.width)
	}
	jump() {
		this.velocity = - 15
	}
}