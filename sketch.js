// 三部分的标题
const titles = 'Xi’an China'
let words
let simplePictures
let cityPictures

let clickCount = 0

function preload() {

  cityPictures = [
    loadImage('assets/bg1.jpg'),
    loadImage('assets/bg2.png'),
    loadImage('assets/bg3.png')
  ]
  simplePictures = [
    { url: loadImage('assets/dayanta.jpeg'), w: 135, h: 161 },
    { url: loadImage('assets/xian.jpeg'), w: 203, h: 203 },
    { url: loadImage('assets/zhonglou.jpeg'), w: 141, h: 90 },
  ]
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1)
  textAlign(CENTER, CENTER)

  simplePictures[0].x = 100
  simplePictures[0].y = 90
  simplePictures[1].x = 30
  simplePictures[1].y = height - 350
  simplePictures[2].x = 200
  simplePictures[2].y = height * 0.4

  words = [
    { word: 'Hometown', x: 100, y: 50 },
    { word: 'Childhood', x: width - 100, y: height - 100 },
  ]
}

function draw() {
  background(255)
  if (clickCount == 0) {
    textSize(38)
    text(titles, width / 2, height / 2)
  } else if (clickCount == 1) {
    textSize(30)
    for (let i = 0; i < words.length; i++) {
      text(words[i].word, words[i].x, words[i].y)
    }

    for (let i = 0; i < simplePictures.length; i++) {
      let { x, y, w, h } = simplePictures[i]
      image(simplePictures[i].url, x, y, w, h)
    }
  } else if (clickCount == 2) {
    push()
    imageMode(CENTER)
    let h = width
    image(cityPictures[0], width / 2, height / 2, width, h)
    pop()
  } else if (clickCount == 3) {
    push()
    imageMode(CENTER)
    let h = width / 0.75
    image(cityPictures[1], width / 2, height / 2, width, h)
    pop()
  } else if (clickCount == 4) {
    push()
    imageMode(CENTER)
    let h = width

    image(cityPictures[2], width / 2, height / 2, width, h)
    pop()
  }
}

function mouseClicked() {
  if (++clickCount == 5) {
    clickCount = 0
  }
}