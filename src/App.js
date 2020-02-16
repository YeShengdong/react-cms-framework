import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '@src/store';
import DefaultLayout from '@components/ui/layout';
import {
  HomePage, AboutPage, ArticleListPage,
} from '@src/pages';

const { store } = configureStore();

export default function App() {
  return (
    <Router>
      <Provider store={store}>
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
      </Provider>
    </Router>
  );
}
