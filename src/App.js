import React, { Component } from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './reducers/root-reducer';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Home from './components/home';

const store = createStore(RootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path='/' component={Home} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
