import Animal from "./Adapter/Animal";
import Cat from "./Adapter/Cat";
import Dog from "./Adapter/Dog";
import Bear from "./Adapter/Bear";
import BearAdapter from "./Adapter/BearAdapter";

const list: Animal[] = [];

list.push(new Dog("dog1"));
list.push(new Cat("cat1"));

/* 
const bear = new Bear();
bear.name = "bear1";
list.push(bear); // Animal 타입과 호환되지 않습니다.
 */

list.push(new BearAdapter("bear1"));

list.forEach((animal) => animal.sound());
