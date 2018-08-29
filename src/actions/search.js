import fetch from 'unfetch';
import { SearchStatus } from '../consts';

export const search = async (store, state, term) => {
  store.setState({ ...state, results: [], searchStatus: SearchStatus.Processing });

  const response = await fetch(
    `http://search.mobile.walmart.com/v1/browse/search?query=${term}`,
  ).catch((error) => {
    store.setState({ ...state, results: [], searchStatus: SearchStatus.Error });
    console.error(error);
    throw error;
  });

  const { item: results } = await response.json();

  return { ...state, results, searchStatus: SearchStatus.Ok };
};
