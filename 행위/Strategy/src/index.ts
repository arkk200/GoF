import SortArrayPrinter from "./SortArrayPrinter";
import GaussSumStrategy from "./Strategy/GaussSumStrategy";
import InsertSortStrategy from "./Strategy/InsertSortStrategy";
import JSSortStartegy from "./Strategy/JSSortStrategy";
import LoopSumStrategy from "./Strategy/LoopSumStrategy";
import SumPrinter from "./SumPrinter";

// SumPrinter
const printer = new SumPrinter();

const dom1 = document.createElement("h1");
document.body.appendChild(dom1);

const dom2 = document.createElement("h1");
document.body.appendChild(dom2);

printer.print(new LoopSumStrategy(), 100, dom1);
printer.print(new GaussSumStrategy(), 100, dom2);

// SortArrayPrinter
const sortPrinter = new SortArrayPrinter();

const dom3 = document.createElement("h1");
document.body.appendChild(dom3);

const dom4 = document.createElement("h1");
document.body.appendChild(dom4);

sortPrinter.print(new InsertSortStrategy(), [2, 4, 3, 1], dom3);
sortPrinter.print(new JSSortStartegy(), [2, 4, 3, 1], dom4);
