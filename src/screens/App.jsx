import { h, render } from 'preact';
import { connect } from 'unistore/preact';
import { actions } from '../actions';
import { SearchResults } from './components/search-results';
import { SearchForm } from './components/search-form';
import { SearchStatus } from '../consts';
import { ProcessingScreen } from './components/processing';

const App = ({ results = [], searchStatus, search }) => (
  <div>
    <SearchForm {...{ search, results }} />
    {searchStatus === SearchStatus.Processing && <ProcessingScreen />}
    <SearchResults {...{ results }} />
  </div>
);

export default connect(
  'results,searchStatus',
  actions,
)(App);
