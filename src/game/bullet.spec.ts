import { describe, expect, it, vi } from 'vitest';
import { Bullet } from './bullet';

describe('Bullet', () => {
  it('move', () => {
    const bullet = new Bullet();
    bullet.y = 1;
    bullet.speed = 1;
    bullet.move();

    expect(bullet.y).toBe(0);
  });

  it('超出边界, 回调 destory', () => {
    const bullet = new Bullet();
    bullet.x = 0;
    bullet.y = 1;
    bullet.speed = 1;
    bullet.border = 0;
    bullet.onDestory = vi.fn();

    bullet.move();

    expect(bullet.onDestory).toBeCalled();
  });
});
