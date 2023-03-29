import { writable } from 'svelte/store';

function createSessionStorageStore(key, initialValue) {
  let storedValue, initial, store;

  if (typeof sessionStorage !== 'undefined') {
    storedValue = sessionStorage.getItem(key);
    initial = storedValue !== null ? JSON.parse(storedValue) : initialValue;
    store = writable(initial);

    store.subscribe(value => {
      sessionStorage.setItem(key, JSON.stringify(value));
    });
  } else {
    // Fall back to using an in-memory object if sessionStorage is not available
    store = writable(initialValue);
  }

  return store;
}

export const userSession = createSessionStorageStore('userSession', {
authenticated: false,
user: null,
_id:null,
email:null,
});