import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

// import SenseiWalk from './assets/Male-4-Walk.png';
// import terrainAttlas from './assets/terrain.png';
// import worldCfg from './configs/world.json';
// import sprites from './configs/sprites';

// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');
// const fieldW = canvas.offsetWidth;
// const fieldH = canvas.offsetHeight;
// const spriteW = 48;
// const spriteH = 48;
// const shots = 3;
// const bottomFactor = 0;
// const leftFactor = 1;
// const rightFactor = 2;
// const topFactor = 3;
// let cycle = 0;
// let bottomPressed = false;
// let upPressed = false;
// let leftPressed = false;
// let rightPressed = false;
// let pY = fieldH / 2 - spriteH / 2;
// let pX = fieldW / 2 - spriteW / 2;
// let idx = 0;

// const terrain = document.createElement('img');
// terrain.src = terrainAttlas;

// terrain.addEventListener('load', () => {
//   const {map} = worldCfg;
//   map.forEach((cfgRow, y) => {
//     cfgRow.forEach((cfgCell, x) => {
//       let cell = cfgCell[0][0];
//       if (cfgCell[0][0] === 'wall' && x !== 0 && y !== 0) {
//         cell = 'water';
//       }
//       const [sX, sY, sW, sH] = sprites.terrain[cell].frames[0];
//       ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//     })
//   })
// })

// function keyDownHandler(e) {
//   if (e.key === 'Down' || e.key === 'ArrowDown') {
//     bottomPressed = true;
//   }

//   if (e.key === 'Up' || e.key === 'ArrowUp') {
//     upPressed = true;
//   }

//   if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = true;
//   }

//   if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.key === 'Down' || e.key === 'ArrowDown') {
//     bottomPressed = false;
//   }

//   if (e.key === 'Up' || e.key === 'ArrowUp') {
//     upPressed = false;
//   }

//   if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = false;
//   }

//   if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = false;
//   }
// }

// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);

// const img = document.createElement('img');
// img.src = SenseiWalk;

// function walk(timestamp) {
//   if (bottomPressed) {
//     idx = bottomFactor;

//     if (pY + 10 < fieldH - spriteH) {
//       pY += 10;
//     }
//     cycle = (cycle + 1) % shots;
//   }

//   if (upPressed) {
//     idx = topFactor;

//     if (pY - 10 > 0) {
//       pY -= 10;
//     }
//     cycle = (cycle + 1) % shots;
//   }

//   if (leftPressed) {
//     idx = leftFactor;

//     if (pX - 10 > 0) {
//       pX -= 10;
//     }
//     cycle = (cycle + 1) % shots;
//   }

//   if (rightPressed) {
//     idx = rightFactor;

//     if (pX + 10 < fieldW - spriteW) {
//       pX += 10;
//     }
//     cycle = (cycle + 1) % shots;
//   }

//   ctx.clearRect(0, 0, fieldW, fieldH);
//   ctx.drawImage(img, cycle * spriteW, spriteH * idx, spriteW, spriteH, pX, pY, spriteW, spriteH);

//   window.requestAnimationFrame(walk);
// }

// img.addEventListener('load', () => {
//   window.requestAnimationFrame(walk);
// });
