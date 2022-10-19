import { describe, expect, it } from "vitest";
import { Bullet } from "./bullet";
import { setupPlane } from "./plane";


describe('plane', () => {
  const defaultOptions = { speed: 1, x: 0, y: 0 };
  const createPlane = (plane = {}, bullets: Bullet[] = [], options?) => setupPlane({}, [], { ...defaultOptions });

  describe('move', () => {
    it('moveLeft', () => {
      const plane = createPlane();
      plane.moveLeft();
      expect(plane.x).toBe(-1);
    });
    it('moveRight', () => {
      const plane = createPlane();
      plane.moveRight();
      expect(plane.x).toBe(1);
    });
    it('moveUp', () => {
      const plane = createPlane();
      plane.moveUp();
      expect(plane.y).toBe(-1);
    });
    it('moveDown', () => {
      const plane = createPlane();
      plane.moveDown();
      expect(plane.y).toBe(1);
    });
  });

  describe('攻击', () => {
    it('attack', () => {
      const bullets = [];
      const plane = createPlane();
      plane.attack();

      expect(bullets.length).toBe(0);
    });
  });

  describe('run', () => {
    it('移动所有子弹', () => {
      const bullet = new Bullet();
      bullet.y = 1;
      const bullets = [bullet];
      const plane = setupPlane({}, bullets, {});
      plane.run();

      expect(bullets[0].y).not.toBe(1);
    });

    it('子弹超过边界后会被移除', () => {
      const bullets = [];
      const plane = setupPlane({}, bullets, { x: 0, y: 0 });
      plane.attack();
      plane.run();

      expect(bullets.length).not.toBe(1);
    });
  });
});


