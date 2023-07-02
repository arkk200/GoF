import BoxDecorator from "./Decorator/BoxDecorator";
import LineNumberDecorator from "./Decorator/LineNumberDecorator";
import SideDecorator from "./Decorator/SideDecorator";
import Strings from "./Decorator/Strings";

const strs = new Strings();
strs.add("Hello!");
strs.add("Lorem, ipsum dolor sit");
strs.add("amet consectetur adipisicing elit.");
strs.add("Minus enim dolorem veritatis");
strs.add("aspernatur laborum molestias totam nam error");
strs.add("adipisci nobis aperiam porro magnam sequi vero");
strs.add("consectetur iste quia atque nostrum qui quos,");
strs.add("odio id itaque! Inventore, iusto.");
strs.add("Quas dolores cum error!");

const $pre = document.querySelector("pre");
strs.print($pre);

// SideDecorator 장식 추가
const sidDec = new SideDecorator(strs, '"');
sidDec.print($pre);

const linDec = new LineNumberDecorator(sidDec);
linDec.print($pre);

// 이어서 BoxDecorator 장식 추가
const boxDec = new BoxDecorator(linDec);
boxDec.print($pre);
