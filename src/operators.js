import { from } from "rxjs";
import { map, filter, take, scan } from "rxjs/operators";
export const print = (v) => {
  const el = document.createElement("h3");
  el.innerText = `😀 ${v}`;
  document.body.appendChild(el);
};
const src = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const modified = src.pipe(
  map((n) => Math.pow(n, 2)),
  scan((acc, val) => {
    acc + val;
  }),
  filter((v) => v > 10),
  take(3)
);
modified.subscribe(print);
