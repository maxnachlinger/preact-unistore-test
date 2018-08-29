import fetch from 'unfetch';
import { SearchStatus } from '../consts';

export const search = (store, state, term) => {
  store.setState({ ...state, results: [], searchStatus: SearchStatus.Processing });

  return fetch(`http://search.mobile.walmart.com/v1/browse/search?query=${term}`)
    .then((response) => response.json())
    .then(({ item: results }) => ({ ...state, results, searchStatus: SearchStatus.Ok }))
    .catch((error) => {
      store.setState({ ...state, results: [], searchStatus: SearchStatus.Error });
      console.error(error);
      throw error;
    });
};
