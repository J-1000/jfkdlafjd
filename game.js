class Game {

	setup() {
		this.background = new Background()
		this.player = new Player()
		this.obstacles = []
		this.collections = []
		this.score = 0
		this.lives = ['❤️', '❤️', '❤️']
	}
	constructor() {
		this.backgroundImages
		this.obstacleImage
		this.collectionImage
		this.endGameImage
		this.button
	}

	preload() {

		this.endGameImage = loadImage('Assets/pngaaa.com-763555.png')

		this.obstacleImage = loadImage('Assets/kisspng-mushroom-cartoon-snacks-5acaa7e9d23ae5.2640844415232306978611.png')

		this.collectionImage = loadImage('Assets/kisspng-cartoon-illustration-cartoon-mushrooms-5a99dc89e28990.8592031715200329059279.png')

		this.playerImage = loadImage('Assets/kisspng-european-hedgehog-u0418u0441u0442u043eu0440u0438u0-cartoon-hedgehog-5a7ac1116d4006.8550967915179942574475.png')

		this.backgroundImages = [
			{ src: loadImage('Assets/_11_background.png'), x: 0, speed: 0 },
			{ src: loadImage('Assets/_10_distant_clouds.png'), x: 0, speed: 0.3 },
			{ src: loadImage('Assets/_09_distant_clouds1.png'), x: 0, speed: 0.7 },
			{ src: loadImage('Assets/_08_clouds.png'), x: 0, speed: 1 },
			{ src: loadImage('Assets/_07_huge_clouds.png'), x: 0, speed: 1.3 },
			{ src: loadImage('Assets/_06_hill2.png'), x: 0, speed: 1.7 },
			{ src: loadImage('Assets/_05_hill1.png'), x: 0, speed: 2 },
			{ src: loadImage('Assets/_04_bushes.png'), x: 0, speed: 2.5 },
			{ src: loadImage('Assets/_03_distant_trees.png'), x: 0, speed: 3 },
			{ src: loadImage('Assets/_02_trees and bushes.png'), x: 0, speed: 4 },
			{ src: loadImage('Assets/_01_ground.png'), x: 0, speed: 7 },
		]

	}

	resetSketch() {
		window.location.reload()
	}

	draw() {

		clear()
		this.background.draw()
		this.player.draw()

		if (frameCount % 250 === 0) {
			this.collections.push(new Collection(this.collectionImage))
		}
		this.collections.forEach(function (collection, index, array) {
			collection.draw()
			if (collection.x < 0) {
				array.splice(index, 1)
			}
		})

		this.collections = this.collections.filter((collection) => {
			if (collection.scoring(this.player)) {
				return false
			} else {
				return true
			}
		})

		if (frameCount % 150 === 0) {
			this.obstacles.push(new Obstacle(this.obstacleImage))
		}
		this.obstacles.forEach(function (obstacle, index, array) {
			obstacle.draw()
			if (obstacle.x < 0) {
				array.splice(index, 1)
			}
		})

		this.obstacles = this.obstacles.filter((obstacle) => {
			if (obstacle.collision(this.player)) {
				return false
			} else {
				return true
			}
		})

		//status bar
		fill('red')
		textFont('Georgia, serif')
		textSize(75)
		text('Score:', 50, 100);
		text(this.score, 270, 100)
		text('Lives:', 50, 200)
		text(this.lives.join(''), 270, 200)

		if (this.lives.length <= 0) {
			noLoop()
			image(this.endGameImage, 500, 250, 1000, 500)
			this.button = createImg('Assets/4972899ccd327d1.png', 1000, 500)
			this.button.width = 150
			this.button.height = 500
			this.button.mousePressed(this.resetSketch)
		}
	}
}

