import { Subject, BehaviorSubject } from "rxjs";
export const print = (v) => {
  const el = document.createElement("h3");
  el.innerText = `😀 ${v}`;
  document.body.appendChild(el);
};
// const subject = new Subject();
// subject.subscribe(print);
// subject.next("hello");
// subject.next("World");
// subject.subscribe(print);

const bs = new BehaviorSubject("Hola");
bs.subscribe(print);
bs.next("Mundo");
bs.subscribe(print);
