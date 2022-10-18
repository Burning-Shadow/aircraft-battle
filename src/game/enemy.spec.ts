import { describe, expect, it } from "vitest";
import { Enemy, initEnemys, runEnemys } from './enemy';

describe('Enemy', () => {
  it('move', () => {
    const enemy = new Enemy();
    enemy.y = 0;
    enemy.speed = 1;

    enemy.move();
    expect(enemy.y).toBe(1);
  });

  it('initEnemys', () => {
    const enemys = [];
    initEnemys(enemys);

    expect(enemys.length).toBe(1);
  });

  it('让所有敌军移动', () => {
    const enemy = new Enemy();
    enemy.y = 1;
    const enemys = [enemy];

    runEnemys(enemys);

    expect(enemy.y).toBe(2);
  });
});