import { h, render } from 'preact';
import createStore from 'unistore';
import { Provider } from 'unistore/preact';
import App from './screens/App';
import './style.css';

const store = createStore({
  searchStatus: null,
  results: [],
});

const { NODE_ENV } = process.env;
if (NODE_ENV === 'development') {
  store.subscribe(console.log);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body,
);
