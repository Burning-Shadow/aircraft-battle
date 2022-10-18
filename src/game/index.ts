
import { Application, PlaneGeometry } from 'pixi.js';
import { Bullet } from './bullet';
import { Enemy, initEnemys, runEnemys } from './enemy';
import { setupPlane } from './plane';
export * from './plane';
export * from './bullet';
export * from './enemy';

function mainTricker(plane, enemys) {
  game.ticker.add(() => {
    plane.run();
    runEnemys(enemys);
  });
};

export const game = new Application({
  width: 500,
  height: 500,
});

document.body.append(game.view);

export function initGame(plane, bullets: Bullet[], enemys: Enemy[]) {
  const _plane = setupPlane(plane, bullets, {});

  initEnemys(enemys);

  mainTricker(plane, enemys);

  return { plane: _plane, bullets, enemys };
};
