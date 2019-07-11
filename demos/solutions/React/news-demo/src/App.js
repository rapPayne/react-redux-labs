import React, { Component } from 'react';
import './App.css';
import { store } from './store/store';
import { actions } from './store/actions';
import { Landing } from './Landing';
import { NewsDetails } from './NewsDetails'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }
  componentDidMount() {
    store.dispatch(actions.fetchNews());
  }
  render() {
    return (
      <main>
        <header>
        </header>
        <BrowserRouter>
          <Switch>
            <Route path="/details" render={props => <NewsDetails {...props} />} />
            <Route path="*" render={props => <Landing {...props} articles={this.state.articles} />} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }

}

export default App;
