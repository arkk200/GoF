import Digit from "./Digit";

export default class DigitFactory {
  private pool: Array<Digit | null> = Array(10).fill(null);

  getDigit(n: number): Digit {
    if (!this.pool[n]) {
      console.log(`${n}에 해당하는 Digit 객체 생성`);
      this.pool[n] = new Digit(`./data/${n}.json`);
    }
    return this.pool[n];
  }
}
