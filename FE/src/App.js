import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import DefaultLayout from './components/ui/layout';
import {
  HomePage, AboutPage, ArticleListPage,
} from './pages';

export default function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route path="/article/list">
            <ArticleListPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </DefaultLayout>
    </Router>
  );
}
