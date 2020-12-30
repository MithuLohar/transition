import { delay } from "rxjs/operators";
import { Observable, combineLatest, merge } from "rxjs";

export const print = (v) => {
  const el = document.createElement("h3");
  el.innerText = `😀 ${v}`;
  document.body.appendChild(el);
};

const randoMAsync = Observable.create((o) => o.next(Math.random()));
const delayed = randoMAsync.pipe(delay(1000));
const combo = combineLatest([delayed, randoMAsync, randoMAsync, randoMAsync]);
combo.subscribe(print);
