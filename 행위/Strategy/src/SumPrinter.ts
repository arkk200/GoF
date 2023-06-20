import SumStrategy from "./interfaces/SumStrategy";

export default class SumPrinter {
  print(strategy: SumStrategy, N: number, domOutput: Element) {
    const value = strategy.get(N);
    domOutput.innerHTML = `숫자 1부터 ${N}까지의 합은 ${value}입니다.`;
  }
}
