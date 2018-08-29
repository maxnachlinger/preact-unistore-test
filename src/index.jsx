import { h, render } from 'preact';
import createStore from 'unistore'
import { Provider } from 'unistore/preact';
import App from './screens/App';
import './style.css'

const store = createStore({
  count: 0,
  results: [],
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body,
);
