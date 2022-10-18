import { Bullet } from "./bullet";

export interface Plane {
  x: number,
  y: number,
  bullets: Array<Bullet>,
  moveLeft: () => void,
  moveRight: () => void,
  moveUp: () => void,
  moveDown: () => void,
  attack: () => void,
  run: () => void,
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 5,
};

const offsetY = 0;
const offsetX = 42;

function initMove(plane) {
  plane.moveDown = () => {
    plane.y += plane.speed;
  };
  plane.moveUp = () => {
    plane.y -= plane.speed;
  };
  plane.moveLeft = () => {
    plane.x -= plane.speed;
  };
  plane.moveRight = () => {
    plane.x += plane.speed;
  };
};

function initRun(plane, bullets) {
  plane.run = () => {
    bullets.forEach(bullet => {
      bullet.move();
    });
  };
};

function initAttack(plane, bullets) {
  plane.attack = () => {
    const bullet = new Bullet();
    bullet.x = plane.x + offsetX;
    bullet.y = plane.y + offsetY;
    bullet.border = 0;
    bullet.onDestory = () => {
      const index = bullets.indexOf(bullet);
      bullets.splice(index, 1);
    };

    bullets.push(bullet);
  };
}

export function setupPlane(
  plane,
  bullets: Bullet[] = [],
  options?
): Plane {
  plane.bullets = bullets;
  Object.assign(plane, defaultOptions, options);

  initMove(plane);
  initRun(plane, bullets);
  initAttack(plane, bullets);

  return plane;
};
