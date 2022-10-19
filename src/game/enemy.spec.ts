import { describe, expect, it, vi } from "vitest";
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

    console.log(enemys.toString());

    expect(enemys.length).toBe(1);
  });

  it('让所有敌军移动', () => {
    const enemy = new Enemy();
    enemy.y = 1;
    const enemys = [enemy];

    runEnemys(enemys);

    expect(enemy.y).toBe(2);
  });

  it('每2s创建一个敌军', () => {
    vi.useFakeTimers();
    const enemys = [];
    initEnemys(enemys);

    // 2000
    vi.advanceTimersByTime(4000);

    expect(enemys.length).toBe(3);
    vi.restoreAllMocks();
  });
});