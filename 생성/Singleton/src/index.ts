import King from "./SIngleton/King";

/*
const king = new King(); // King 클래스에 생성자가 private이기에 생성할 수 없습니다.
*/

const king = King.getInstance();
const king2 = King.getInstance();

// 두 객체를 비교해보면 같은 객체를 참조하고 있다는 것을 알 수 있습니다.
console.log(`Are king and king2 same?: ${king === king2}`);

king.sayHello();
king2.sayHello();
