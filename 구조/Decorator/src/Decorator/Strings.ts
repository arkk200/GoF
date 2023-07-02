import Item from "./Item";

export default class Strings extends Item {
  private data = new Array<string>();

  constructor() {
    super();
  }
  add(str: string): void {
    this.data.push(str);
  }

  getLinesCount(): number {
    return this.data.length;
  }
  getLength(i: number): number {
    return this.data[i].length;
  }
  getMaxLength(): number {
    return Math.max(...this.data.map((str) => str.length));
  }
  getString(i: number): string {
    return this.data[i];
  }
}
