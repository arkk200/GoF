import Array from "./Array";
import Iterator from "../interfaces/Iterator";

class ArrayIterator<T> implements Iterator<T> {
  private index: number;

  constructor(private array: Array<T>) {
    this.index = -1;
  }

  next(): boolean {
    this.index++;
    return this.index < this.array.count;
  }
  current(): T {
    return this.array.getItem(this.index);
  }
}

export default ArrayIterator;
