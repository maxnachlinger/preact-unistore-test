import { search } from './search';

export const actions = (store) => ({
  search: (...args) => search(store, ...args),
});
