import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import DefaultLayout from './components/ui/layout';
import {
  Home, About,
} from './pages';

export default function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </DefaultLayout>
    </Router>
  );
}
