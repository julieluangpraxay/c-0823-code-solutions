import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function readOnce() {
  try {
    const msg = await read('foo/bar.html');
    console.log(elapsed(), 'readOnce:', msg);
  } catch (error) {
    console.error(error.message);
  }
}

async function readSeveral() {
  try {
    const msg = await read('foo1/bar.html');
    console.log(elapsed(), 'readSeveral1:', msg);
    const msg2 = await read('foo2/bar.html');
    console.log(elapsed(), 'readSeveral2:', msg2);
    const msg3 = await read('foo3/bar.html');
    console.log(elapsed(), 'readSeveral3:', msg3);
  } catch (error) {
    console.log(error.message);
  }
}

async function readChained() {
  const msg1 = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', msg1);
  const msg2 = await read(msg1);
  console.log(elapsed(), 'readChained2:', msg2);
  const msg3 = await read(msg2);
  console.log(elapsed(), 'readChained3:', msg3);
}

await readOnce();
await readSeveral();
await readChained();
