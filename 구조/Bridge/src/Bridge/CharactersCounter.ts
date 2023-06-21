import Draft from "./Draft";

// 새로운 요구사항이 들어와서 기존 클래스를 상속받고 기능을 추가한 모습입니다.
export default class CharactersCounter extends Draft {
  constructor(title: string, author: string, content: string[]) {
    super(title, author, content);
  }

  getCharactersCount() {
    let count = 0;

    count += this.getTitle().length;
    count += this.getAuthor().length;
    count += this.getContent().length;

    return count;
  }
}
