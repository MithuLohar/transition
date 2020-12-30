import { of } from "rxjs";
import { map, tap } from "rxjs/operators";
export const print = (v) => {
  const el = document.createElement("h3");
  el.innerText = `😀 ${v}`;
  document.body.appendChild(el);
};
const src = of("jeff");
const tapped = src.pipe(
  tap(print),
  map((v) => v.toUpperCase()),
  tap(print),
  map((v) => `Hello 🐴 ${v}`),
  tap(async (v) => {
    await Promise.resolve();
    alert(v);
  })
);
tapped.subscribe();
