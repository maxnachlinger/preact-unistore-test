import { h, render } from 'preact';

export const SearchResults = ({ results = [] }) => (
  <div class="search-results-container">
    {results.map(({ itemImage300 }) => (
      <img src={itemImage300} class="search-result-image" />
    ))}
  </div>
);
