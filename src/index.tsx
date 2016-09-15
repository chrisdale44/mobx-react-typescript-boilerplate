import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Login from './views/Login';
import Boards from './views/Boards';
import Pins from './views/Pins';
import pinterest from './util/pinterest';

function requireAuth(nextState, replace) {
  if (!pinterest.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

ReactDOM.render ((
    <Router history={hashHistory}>
        <Route path="/" component={Boards} onEnter={requireAuth}/>
        <Route path="/login" component={Login} />
        <Route path="/board/:boardId" component={Pins} />
    </Router>
), document.getElementById('app'));
