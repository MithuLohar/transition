import {
  Observable,
  of,
  from,
  interval,
  fromEvent,
  asyncScheduler,
} from "rxjs";

export const print = (v) => {
  const el = document.createElement("h3");
  el.innerText = `😀 ${v}`;
  document.body.appendChild(el);
};

/*
const hello = of("hello");
hello.subscribe(print);
const world = from("world");
world.subscribe(print);

const event = fromEvent(document, "click");
event.subscribe(print);

const periodic = interval(500);
periodic.subscribe(print); */

const hello = of("hello", asyncScheduler);
hello.subscribe(print);
print("world");
