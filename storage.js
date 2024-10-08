import { AsyncLocalStorage } from "node:async_hooks";

const s = new AsyncLocalStorage();

export default () => s.getStore();

export { s };
