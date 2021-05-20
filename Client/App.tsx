import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Create from '@pages/Create';
import Blog from '@pages/Blog';

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/blog" />
      <Route path="/create" component={Create} />
      <Route path="/blog/:index" component={Blog} />
      <Route path="/blog" component={Blog} />
    </Switch>
  );
};

export default App;
