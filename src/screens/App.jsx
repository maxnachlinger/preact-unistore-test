import { h, render } from 'preact';
import { connect } from 'unistore/preact';
import { actions } from '../actions';
import { SearchResults } from './components/search-results';
import { SearchForm } from './components/search-form';
import { SearchStatus } from '../consts';
import { ProcessingScreen } from './components/processing';

const App = ({ results = [], search, searchStatus }) => (
  <div>
    <SearchForm {...{ search }} />
    <p>{searchStatus === SearchStatus.Processing ? (<ProcessingScreen/>) : searchStatus}</p>
    <SearchResults {...{ results }} />
  </div>
);

export default connect('count,results,searchStatus', actions)(App);
