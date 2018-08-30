import { h, Component } from 'preact';

export class SearchForm extends Component {
  render() {
    const { search, results = [] } = this.props;
    const { term } = this.state;

    const searchEnabled = term && term.length >= 2;
    const executeSearch = () => (searchEnabled ? search(term) : null);

    return (
      <div class="search-form-container">
        <input
          autofocus
          onChange={(event) => this.setState(() => ({ term: event.target.value }))}
          onKeyUp={(event) =>
            event.key === 'Enter'
              ? executeSearch()
              : this.setState(() => ({ term: event.target.value }))
          }
        />
        <button disabled={!searchEnabled} onClick={executeSearch} class="search-button">
          Search
        </button>
        {results.length > 0 && <div class="results-count-display">{results.length} results</div>}
      </div>
    );
  }
}
