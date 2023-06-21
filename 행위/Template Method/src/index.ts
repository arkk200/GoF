import Article from "./Article";
import EditableDisplayArticle from "./Template Method/EditableDisplayArticle";
import SimpleDisplayArticle from "./Template Method/SimpleDisplayArticle";

const article = new Article(
  "제목123",
  ["컨텐츠1", "컨텐츠2", "컨텐츠3", "컨텐츠4"],
  "푸터123"
);

const display = new SimpleDisplayArticle(article);
document.querySelector(".content").innerHTML = display.displayHtml();

document.querySelector(".edit-mode").addEventListener("change", (event) => {
  let display;

  if ((<HTMLInputElement>event.target).checked) {
    display = new EditableDisplayArticle(article);
  } else {
    display = new SimpleDisplayArticle(article);
  }

  document.querySelector(".content").innerHTML = display.displayHtml();
});
