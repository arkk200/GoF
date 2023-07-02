export default class King {
  // 생성자에 private을 붙여서 자기자신만이 이 클래스의 객체를 생성할 수 있게 만들 수 있습니다.
  private constructor() {}

  private static instance: King | undefined;

  static getInstance(): King {
    if (this.instance === undefined) this.instance = new King();
    return this.instance;
  }

  sayHello() {
    console.log("I am only one...");
  }
}
