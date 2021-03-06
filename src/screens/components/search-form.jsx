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
          class="search-input"
          onChange={(event) => this.setState(() => ({ term: event.target.value }))}
          onKeyUp={(event) =>
            event.key === 'Enter'
              ? executeSearch()
              : this.setState(() => ({ term: event.target.value }))
          }
          placeholder="Type in a search and hit Enter"
        />
        <button disabled={!searchEnabled} onClick={executeSearch} class="search-button">
          Search
        </button>
        <div class="source-link">
          <a href="https://github.com/maxnachlinger/preact-unistore-test">Source</a>
        </div>
        {results.length > 0 && <div class="results-count-display">{results.length} results</div>}
      </div>
    );
  }
}
