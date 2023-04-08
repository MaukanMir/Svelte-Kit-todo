// @ts-nocheck
import { writable } from 'svelte/store';

function createSessionStorageStore(key, initialValue) {
  let value = initialValue;
  
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue !== null) {
      value = JSON.parse(storedValue);
    }

    const store = writable(value);
  
    store.subscribe(value => {
      window.localStorage.setItem(key, JSON.stringify(value));
    });

    return store;
  }

  const store = writable(value);

  return store;
}

export const userSession = createSessionStorageStore('userSession', {
  authenticated: false,
  user: null,
  _id: null,
  email: null,
});