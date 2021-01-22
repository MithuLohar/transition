import { Observable } from "rxjs";

const basic = Observable.create((observer) => {
  observer.next("A");
  observer.next("B");
  observer.next("C");

  observer.next("D");
});
export const print = (v) => {
  const el = document.createElement("h3");
  el.innerText = `😀 ${v}`;
  document.body.appendChild(el);
};

basic.subscribe(print);


