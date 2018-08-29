import { h, Component } from 'preact';
import { SearchStatus } from '../../consts';

export class SearchForm extends Component {
  render() {
    const { search } = this.props;
    const { term } = this.state;

    const searchEnabled = term && term.length >= 2;
    const executeSearch = () => (searchEnabled ? search(term) : null);

    return (
      <div>
        <input
          autofocus
          onChange={(event) => this.setState(() => ({ term: event.target.value }))}
          onKeyUp={(event) =>
            event.key === 'Enter'
              ? executeSearch()
              : this.setState(() => ({ term: event.target.value }))
          }
        />
        <button disabled={!searchEnabled} onClick={executeSearch}>
          Search
        </button>
      </div>
    );
  }
}
