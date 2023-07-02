import Aggregator from "../interfaces/Aggregator";
import ArrayIterator from "./ArrayIterator";
import Iterator from "../interfaces/Iterator";

class Array<T> implements Aggregator<T> {
  constructor(private items: T[]) {}

  public getItem(index: number) {
    return this.items[index];
  }

  public get count() {
    return this.items.length;
  }

  iterator(): Iterator<T> {
    return new ArrayIterator<T>(this);
  }
}

export default Array;
