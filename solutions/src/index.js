import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import { Checkout } from './Checkout';
import { LandingPage } from './LandingPage';
import { FilmDetails } from './FilmDetails';
import { Login } from './Login';
import { PickSeats } from './PickSeats';
//import { NotFound } from './NotFound';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact component={LandingPage} path="/" />
      <Route component={FilmDetails} path="/Film/:filmId" />
      <Route component={PickSeats} path="/PickSeats/:showingId" />
      <Route component={Checkout} path="/Checkout" />
      <Route component={Login} path="/Login" />
      {/* <Route component={NotFound} path="*" /> */}
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
