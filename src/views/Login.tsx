import * as React from 'react';
import { withRouter } from 'react-router';

import pinterest from '../util/pinterest';

class Login extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            pinterest: pinterest.loggedIn()
        }
        
    }

    componentDidMount() {
        if (this.state.pinterest) {
            this.props.router.replace('/boards');
        }
    }

    resetState = () => {
        var state = {
            pinterest: pinterest.loggedIn()
        };

        if (state.pinterest) {
            this.props.router.push('/boards');
        } else {
            this.setState(state);
        }
    }

    pinLogin = () => {
        pinterest.login(this.resetState);
    }

    render() {
        return (<button className="button button--pinterest" onClick={this.pinLogin}>Log in</button>);
    }
}


export default withRouter(Login);