export class Enemy {
  public x: number = 0;
  public y: number = 0;
  public speed: number = 1;

  constructor() { };

  move() {
    this.y += 1;
  };
};

export function initEnemys(enemys: Enemy[]) {
  const enemy = new Enemy();
  enemys.push(enemy);
};

export function runEnemys(enemys: Enemy[]) {
  enemys.forEach(enemy => {
    enemy.move();
  });
};
