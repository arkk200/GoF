import SortStartegy from "./interfaces/SortStrategy";

export default class SortArrayPrinter {
  print(strategy: SortStartegy, array: number[], domOutput: Element) {
    strategy.sort(array);
    domOutput.innerHTML = array.toString();
  }
}
