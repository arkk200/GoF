import Array from "./Array/Array";
import Item from "./Item";
import Row from "./Row";

const items = [
  new Item("쿠쿠다스", 2500),
  new Item("새우깡", 1000),
  new Item("빼빼로", 1200),
  new Item("초코파이", 4600),
];

const array = new Array(items);
const iter = array.iterator();

while (iter.next()) {
  const item = iter.current();

  const domItem = document.createElement("div");
  domItem.innerText = `${item.name} : ${item.cost}원`;
  document.body.appendChild(domItem);
}

const rows = [
  new Row("James", 18),
  new Row("John", 19),
  new Row("Jack", 20),
  new Row("Jane", 21),
];

const table = new Array(rows);
const tableIter = table.iterator();

while (tableIter.next()) {
  const item = tableIter.current();

  const domItem = document.createElement("div");
  domItem.innerText = `이름: ${item.name}, 나이: ${item.age}`;
  document.body.appendChild(domItem);
}
