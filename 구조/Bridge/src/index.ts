import CaptionDisplay from "./Bridge/CaptionDisplay";
import CharactersCounter from "./Bridge/CharactersCounter";
import Draft from "./Bridge/Draft";
import SimpleDisplay from "./Bridge/SimpleDisplay";

const title = "제목123";
const author = "저자123";
const content = ["내용1", "내용2", "내용3"];

/// 버전 1
/* 
const draft = new Draft(title, author, content);

const display = new SimpleDisplay();
// const display = new CaptionDisplay();
draft.print(display);
 */

/// 버전 2, 문자의 개수를 세는 기능 추가
const draft = new CharactersCounter(title, author, content);

const display = new SimpleDisplay();
// const display = new CaptionDisplay();
draft.print(display);

// 버전 2의 기능도 사용할 수 있다.
console.log(`전체 문자의 개수: ${draft.getCharactersCount()}`);
