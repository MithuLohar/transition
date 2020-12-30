import { of } from "rxjs";
import { switchMap } from "rxjs/operators";

export const print = (v) => {
  const el = document.createElement("h3");
  el.innerText = `😀 ${v}`;
  document.body.appendChild(el);
};

const user$ = of({ uid: Math.random() });
const fetchorders = (userId) => {
  return of(`${userId}'s order data`);
};
let orders;
user$.subscribe((user) => {
  fetchorders(user.uid).subscribe((data) => {
    orders = data;
    print(orders);
  });
});

const orders$ = user$.pipe(
  switchMap((user) => {
    return fetchorders(user.uid);
  })
);
orders$.subscribe(print);
