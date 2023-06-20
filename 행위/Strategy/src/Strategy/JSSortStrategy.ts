import SortStartegy from "../interfaces/SortStrategy";

export default class JSSortStartegy implements SortStartegy {
  sort(array: number[]): void {
    array.sort();
  }
}
