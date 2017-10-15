import React from 'react';
import App from './app.js';
import HomePage from './home.js';
import StoreView from './storeView.js';
import NotFound from './notFound.js';
import { render } from 'react-dom';
// import { Router, Route, Switch } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/city/:cityName/store/:storeId" component={StoreView}/>
          <Route path="/city/:cityName" component={App}/>
          <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
  );
}

render(<Root />, document.querySelector('#root'));
