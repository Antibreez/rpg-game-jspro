class ClientWorld {
  constructor(game, engine, levelCfg) {
    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: levelCfg.map.length,
      width: levelCfg.map[0].length,
    });
  }

  init() {
    const { map } = this.levelCfg;
    const { canvas } = this.engine;
    const sW = canvas.width / this.width;
    const sH = canvas.height / this.height;

    map.forEach((cfgRaw, y) => {
      cfgRaw.forEach((cfgCell, x) => {
        this.engine.renderSpriteFrame({
          sprite: ['terrain', cfgCell[0]],
          frame: 0,
          x: x * sW,
          y: y * sH,
          w: sW,
          h: sH,
        });
      });
    });
  }
}

export default ClientWorld;
