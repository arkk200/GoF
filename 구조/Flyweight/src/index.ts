import DigitFactory from "./Flyweight/DigitFactory";
import Number from "./Flyweight/Number";

const factory = new DigitFactory();

const dom = document.querySelector("#tmp");

let value = 434331;

setInterval(() => {
  // 0부터 9까지 DigitFactory에 저장된 Digit 객체가 재활용되는 걸 볼 수 있다.
  const number = new Number(factory, value++);
  number.put(dom);
}, 100);
