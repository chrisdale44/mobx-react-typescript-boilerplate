import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App';
import Login from './views/Login';
import Logout from './views/Logout';
import Boards from './views/Boards';
import Pins from './views/Pins';
import NotFound from './views/NotFound';

import pinterest from './util/pinterest';

function requireAuth(nextState, replace) {
  if (!pinterest.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

ReactDOM.render ((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Login} /> 
          <Route path="boards" component={Boards} onEnter={requireAuth}/>
          <Route path="board/:boardId" component={Pins} onEnter={requireAuth}/>
          <Route path="logout" component={Logout}/>
        </Route>
        
    </Router>
), document.getElementById('app'));
