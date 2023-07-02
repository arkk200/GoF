import Decorator from "./Decorator";
import Item from "./Item";

export default class BoxDecorator extends Decorator {
  number = 0;
  constructor(targetItem: Item) {
    super(targetItem);
  }
  getLinesCount(): number {
    return this.targetItem.getLinesCount() + 2;
  }
  getLength(i: number): number {
    return this.targetItem.getLength(i) + 2;
  }
  getMaxLength(): number {
    return this.targetItem.getMaxLength() + 2;
  }
  getString(i: number): string {
    if (i === 0 || i === this.getLinesCount() - 1) {
      return `<span style="color: yellow">+</span>${"-".repeat(
        this.getMaxLength() - 2
      )}<span style="color: yellow">+</span>`;
    }
    return (
      '<span style="color: yellow">|</span>' +
      this.targetItem.getString(i - 1) +
      " ".repeat(this.getMaxLength() - this.getLength(i - 1)) +
      '<span style="color: yellow">|</span>'
    );
  }
}
