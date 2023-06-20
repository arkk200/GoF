import SumStrategy from "../interfaces/SumStrategy";

export default class GaussSumStrategy implements SumStrategy {
  get(N: number): number {
    return (N * (N + 1)) / 2;
  }
}
