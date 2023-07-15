import File from "./Composite/File";
import Folder from "./Composite/Folder";

const root = new Folder("root");
root.add(new File("a.txt", 1000));
root.add(new File("b.txt", 2000));

const sub1 = new Folder("sub1");
root.add(sub1);
sub1.add(new File("sa.txt", 100));
sub1.add(new File("sb.txt", 200));

const subSub = new Folder("subsub");
sub1.add(subSub);
subSub.add(new File("subsub1.txt", 10));
subSub.add(new File("subsub2.txt", 20));

const sub2 = new Folder("sub2");
root.add(sub2);
sub2.add(new File("sa2.txt", 300));
sub2.add(new File("sa2.txt", 400));

const dom = document.querySelector("#list");
root.list(dom);
