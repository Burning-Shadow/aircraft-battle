export class Enemy {
  public x: number = Math.random() * 400;
  public y: number = 0;
  public border: number = 400;
  public speed: number = 1;
  public width: number = 50;
  public height: number = 50
  public onDestory: any;

  constructor() { };

  move() {
    this.y += this.speed;

    if (this.y >= this.border) {
      this.onDestory && this.onDestory();
    }
  }
};

export function initEnemys(enemys: Enemy[]) {
  // 先立即生成一个
  const enemy = new Enemy();
  enemy.onDestory = () => {
    console.log(`enemys = ${enemys.toString()}`);
    console.log(`enemy = ${enemy.toString()}`);
    const enemysStr = (enemys).map(_ => JSON.stringify(_));
    const enemyStr = JSON.stringify(enemy);
    const index = enemysStr.indexOf(enemyStr);
    // const index = enemys.indexOf(enemy);
    enemys.splice(index, 1);
  };

  enemys.push(enemy);

  setInterval(() => {
    const enemy = new Enemy();
    enemy.onDestory = () => {
      console.log(`enemys = ${enemys.toString()}`);
      console.log(`enemy = ${enemy.toString()}`);
      const enemysStr = (enemys).map(_ => JSON.stringify(_));
      const enemyStr = JSON.stringify(enemy);
      const index = enemysStr.indexOf(enemyStr);
      // const index = enemys.indexOf(enemy);
      enemys.splice(index, 1);
    };

    enemys.push(enemy);
  }, 2000);
};

export function runEnemys(enemys: Enemy[]) {
  enemys.forEach(enemy => {
    enemy.move();
  });
};
