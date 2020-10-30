import React, { useEffect, useState } from 'react';
import { store } from './store/store';
import { Landing } from './Landing';
import { NewsDetails } from './NewsDetails';
import { Footer } from './Footer';
import { Copyright } from './Copyright';
import { SiteLinks } from './SiteLinks';
import { actions } from './store/actions';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  
  const [state, setState] = useState(store.getState())
  useEffect(() => {
    store.subscribe(() => setState(store.getState()));
    store.dispatch(actions.fetchNews());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header>
        </header>
        <main>
          <Route path="/" exact><Landing articles={state.articles} /></Route>
          <Route path="/article/:article_number"><NewsDetails /></Route>
        </main>
        <Footer>
          <SiteLinks />
          <Copyright date={new Date()} />
        </Footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
