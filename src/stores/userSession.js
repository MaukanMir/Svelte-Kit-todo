import { writable } from 'svelte/store';
const cache = require('memory-cache');

function createSessionStorageStore(key, initialValue) {
  const storedValue = cache.get(key);
  const initial = storedValue !== null ? JSON.parse(storedValue) : initialValue;
  const store = writable(initial);

  store.subscribe(value => {
    cache.put(key, JSON.stringify(value));
  });

  return store;
}

export const userSession = createSessionStorageStore('userSession', {
authenticated: false,
user: null,
_id:null,
email:null,
});