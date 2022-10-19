import { describe, expect, it } from "vitest";
import { hitTestObj } from './hitTestObj';

describe('hitTestObj', () => {
  it('体积碰撞【矩形相交】返回 true', () => {
    const rectA = { x: 0, y: 0, width: 100, height: 100 };
    const rectB = { x: 50, y: 50, width: 100, height: 100 };

    expect(hitTestObj(rectA, rectB)).toBe(true);
  });

  it('体积不碰撞【矩形不相交】返回 false', () => {
    const rectA = { x: 0, y: 0, width: 100, height: 100 };
    const rectB = { x: 150, y: 150, width: 100, height: 100 };

    expect(hitTestObj(rectA, rectB)).toBe(false);
  });
});