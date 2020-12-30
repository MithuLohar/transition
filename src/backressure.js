import { debounceTime, throttleTime, bufferCount } from "rxjs/operators";
import { fromEvent } from "rxjs";

export const print = (v) => {
  const el = document.createElement("h3");
  el.innerText = `😀 ${v}`;
  document.body.appendChild(el);
};

const event = fromEvent(document, "mousemove");
event.subscribe(print);
const debounce = event.pipe(debounceTime(1000));
// debounce.subscribe(print);
const throttled = event.pipe(throttleTime(1000));
// throttled.subscribe(print);
const buffered = event.pipe(bufferCount(20));
// buffered.subscribe(print);
