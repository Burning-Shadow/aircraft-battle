export class Bullet {
  public x: number = 0;
  public y: number = 0;
  public speed: number = 5;
  public border: number = 0;
  public onDestory: any;
  public width: number = 10;
  public height: number = 20;

  constructor() {};

  move() {
    this.y -= this.speed;

    if (this.y <= this.border) {
      this.onDestory && this.onDestory();
    }
  }
};
