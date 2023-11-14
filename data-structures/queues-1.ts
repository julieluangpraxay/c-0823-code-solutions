/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function getFront<T>(queue: Queue<T>): T | undefined {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    return queue.peek();
  }
}

export function addToBack<T>(queue: Queue<T>, value: T): void {
  return queue.enqueue(value);
}

export function takeFront<T>(queue: Queue<T>): T | undefined {
  return undefined;
}

export function isEmpty<T>(queue: Queue<T>): boolean {
  return false;
}
