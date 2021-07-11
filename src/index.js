import './index.scss';
import SenseiWalk from './assets/Male-4-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const fieldW = 600;
const fieldH = 600;
const spriteW = 48;
const spriteH = 48;
const shots = 3;
const bottomFactor = 0;
const leftFactor = 1;
const rightFactor = 2;
const topFactor = 3;
let cycle = 0;
let bottomPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;
let pY = fieldH / 2 - spriteH / 2;
let pX = fieldW / 2 - spriteW / 2;
let idx = 0;

function drawBackground() {
  ctx.fillStyle = '#bbb';

  for (let i = 0; i < 10; i += 2) {
    for (let j = 0; j < 10; j += 1) {
      const k = j % 2 === 0 ? i + 1 : i;
      ctx.fillRect((fieldW / 10) * k, (fieldH / 10) * j, fieldW / 10, fieldH / 10);
    }
  }

  ctx.fillStyle = '#fff';

  for (let i = 0; i < 10; i += 2) {
    for (let j = 0; j < 10; j += 1) {
      const k = j % 2 !== 0 ? i + 1 : i;
      ctx.fillRect((fieldW / 10) * k, (fieldH / 10) * j, fieldW / 10, fieldH / 10);
    }
  }
}

function keyDownHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = true;
  }

  if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = true;
  }

  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }

  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = false;
  }

  if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = false;
  }

  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }

  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = SenseiWalk;

img.addEventListener('load', () => {
  setInterval(() => {
    if (bottomPressed) {
      idx = bottomFactor;

      if (pY + 10 < fieldH - spriteH) {
        pY += 10;
      }
      cycle = (cycle + 1) % shots;
    }

    if (upPressed) {
      idx = topFactor;

      if (pY - 10 > 0) {
        pY -= 10;
      }
      cycle = (cycle + 1) % shots;
    }

    if (leftPressed) {
      idx = leftFactor;

      if (pX - 10 > 0) {
        pX -= 10;
      }
      cycle = (cycle + 1) % shots;
    }

    if (rightPressed) {
      idx = rightFactor;

      if (pX + 10 < fieldW - spriteW) {
        pX += 10;
      }
      cycle = (cycle + 1) % shots;
    }

    ctx.clearRect(0, 0, fieldW, fieldH);
    drawBackground();
    ctx.drawImage(img, cycle * spriteW, spriteH * idx, spriteW, spriteH, pX, pY, spriteW, spriteH);
  }, 120);
});
