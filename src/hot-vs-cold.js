import { Observable } from "rxjs";
import { share, shareReplay, publish } from "rxjs/operators";

export const print = (v) => {
  const el = document.createElement("h3");
  el.innerText = `😀 ${v}`;
  document.body.appendChild(el);
};

const cold = Observable.create((o) => o.next(Math.random()));
// cold.subscribe(print);
// cold.subscribe(print);
// cold.subscribe(print);
const hot = cold.pipe(shareReplay());
hot.subscribe(print);
hot.subscribe(print);
hot.subscribe(print);
