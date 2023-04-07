import { writable } from 'svelte/store';

function createSessionStorageStore(key, initialValue) {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue !== null ? JSON.parse(storedValue) : initialValue;
  const store = writable(initial);

  store.subscribe(value => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return store;
}

export const userSession = createSessionStorageStore('userSession', {
  authenticated: false,
  user: null,
  _id: null,
  email: null,
});