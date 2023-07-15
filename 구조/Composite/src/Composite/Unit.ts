export default abstract class Unit {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  abstract getSize(): number;
}
