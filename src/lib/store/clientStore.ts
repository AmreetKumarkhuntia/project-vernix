/// <reference types="@sveltejs/kit" />
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type ClientStore = {
  activeNavigation: string;
};

const initialValue: ClientStore = {
  activeNavigation: 'home',
};

const getInitialValue = (): ClientStore => {
  if (browser) {
    const storedValue = sessionStorage.getItem('clientStore');
    if (storedValue) {
      return JSON.parse(storedValue);
    }
  }
  return initialValue;
};

const clientStore = writable<ClientStore>(getInitialValue());

clientStore.subscribe((value) => {
  if (browser) {
    sessionStorage.setItem('clientStore', JSON.stringify(value));
  }
});

export default clientStore;
