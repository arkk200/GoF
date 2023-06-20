import SortStartegy from "../interfaces/SortStrategy";

export default class InsertSortStrategy implements SortStartegy {
  sort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
      let j = i - 1;
      const pivot = array[i];
      for (j = i - 1; j >= 0 && pivot < array[j]; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = pivot;
    }
  }
}
