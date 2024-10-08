import { s } from "./storage.js";
import { me } from "./store.js";

const sleep = delay => new Promise(resolve => {
  setTimeout(() => {
    resolve();
  }, delay)
})

setTimeout(() => {
  s.run(Math.random(), async () => {
    me();
    await sleep(2000);
    me();
  });
}, 1000);

setTimeout(() => {
  s.run(Math.random(), async () => {
    me();
    await sleep(1000);
    me();
  });
}, 1000);
