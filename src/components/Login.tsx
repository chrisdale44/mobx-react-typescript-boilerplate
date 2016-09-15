import * as React from 'react';
import { withRouter } from 'react-router';

import pinterest from '../util/pinterest';

const Login = withRouter (
    React.createClass({
        getInitialState() {
            return {
                pinterest: pinterest.loggedIn()
            }
        },

        // might not be necessary:
        // componentDidMount() {
        //     if (this.state.pinterest) {
        //         this.context.router.transitionTo('feed');
        //     }
        // },

        resetState() {
            var state = {
                pinterest: pinterest.loggedIn()
            };

            if (state.pinterest) {
                this.context.router.transitionTo('feed');
            } else {
                this.setState(state);
            }
        },

        pinLogin() {
            pinterest.login(this.resetState);
        },

        render() {
            return (<button className="button button--pinterest" onClick={this.pinLogin}>Log in</button>);
        }
    })
);

export default Login;