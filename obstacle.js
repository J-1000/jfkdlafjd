class Collection {

  constructor(image) {
    this.width = 120
    this.height = 120
    this.x = 2000
    this.y = Math.floor(Math.random() * (740 - 675 + 1) + 675)
    this.image = game.collectionImage
  }
  draw() {
    this.x -= 5
    image(this.image, this.x, this.y, this.width, this.height)
  }

  scoring(playerInfo) {
    let collectionMiddleX = this.x + this.width / 2;
    let collectionMiddleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;
    if (dist(collectionMiddleX, collectionMiddleY, playerX, playerY) > this.height) {
      return false
    } else {
      game.score++
      return true
    }
  }
}

class Obstacle {
  constructor(image) {
    this.width = 150
    this.height = 150
    this.x = 2000
    this.y = Math.floor(Math.random() * (860 - 745 + 1) + 745)
    this.image = game.obstacleImage
  }

  draw() {
    this.x -= 5
    image(this.image, this.x, this.y, this.width, this.height)
  }

  collision(playerInfo) {
    let obstacleMiddleX = this.x + this.width / 2;
    let obstacleMiddleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;
    if (dist(obstacleMiddleX, obstacleMiddleY, playerX, playerY) > this.height) {
      return false
    } else {
      game.lives.splice(-1)
      return true
    }
  }
}
