import Animal from "./Animal";
import Bear from "./Bear";

export default class BearAdapter extends Animal {
  private bear: Bear;

  constructor(name: string) {
    super(name);
    this.bear = new Bear();
    this.bear.name = name;
  }

  sound(): void {
    console.log(`${this.bear.name}: ${this.bear.roar()}`);
  }
}
