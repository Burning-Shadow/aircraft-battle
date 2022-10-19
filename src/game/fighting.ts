import { Enemy } from "./enemy";
import { hitTestObj } from "./hitTestObj";
import { Plane } from "./plane";

export function fighting(plane: Plane, enemys: Enemy[]) {
  plane.bullets.forEach((bullet, bIdx) => {
    enemys.forEach((enemy, eIdx) => {
      if (hitTestObj(bullet, enemy)) {
        console.log(`hitTestObj result = ${hitTestObj}`);
        plane.bullets.splice(bIdx, 1);
        enemys.splice(eIdx, 1);
      }
    });
  });
};
