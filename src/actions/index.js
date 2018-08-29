import { search } from './search';

// If actions is a function, it gets passed the store:
export const actions = (store) => ({
  search: (...args) => search(store, ...args),

  // Actions can just return a state update:
  increment: ({ count }) => ({ count: count + 1 }),

  // Actions receive current state as first parameter and any other params next
  incrementAndLog: ({ count }) => {
    console.info('incrementAndLog');
    return { count: count + 1 };
  },

  // Async actions can be pure async/promise functions:
  // async getStuff(state) {
  //   let res = await fetch('/foo.json');
  //   return { stuff: await res.json() };
  // },

  // ... or just actions that call store.setState() later:
  incrementAsync(state) {
    setTimeout(() => {
      console.info('incrementAsync');
      store.setState({ count: state.count + 1 });
    }, 100);
  },
});
