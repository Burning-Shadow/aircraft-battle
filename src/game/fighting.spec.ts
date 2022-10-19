import { describe, expect, it } from "vitest";
import { Bullet } from "./bullet";
import { Enemy } from "./enemy";
import { fighting } from "./fighting";
import { setupPlane } from "./plane";

describe('fighting', () => {
  it('敌军和我方子弹碰撞时二者均会被销毁', () => {
    const bullet = new Bullet();
    bullet.x = 0;
    bullet.y = 0;
    bullet.width = 100;
    bullet.height = 100;
    const bullets = [bullet];
    const plane = setupPlane({}, bullets);

    const enemy = new Enemy();
    enemy.x = 50;
    enemy.y = 50;
    enemy.width = 100;
    enemy.height = 100;
    const enemys = [enemy];

    fighting(plane, enemys);
    expect(bullets.length).toBe(0);
    expect(enemys.length).toBe(0);
  });
});