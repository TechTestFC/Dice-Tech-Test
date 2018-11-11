import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import moviesReducer from './stores/movies/reducer';
import MoviesContainer from './containers/MoviesContainer';

const store = createStore(moviesReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MoviesContainer />
      </Provider>
    );
  }
}
