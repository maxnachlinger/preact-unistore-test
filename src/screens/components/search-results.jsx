import { h, render } from 'preact';

export const SearchResults = ({ results = [] }) => (
  <div>
    <p>{results.length ? `Results: ${results.length}` : null}</p>
    {results.map(({ itemImage300 }) => (
      <img src={itemImage300} />
    ))}
  </div>
);
